"use client";
import { IIndigentRecord } from "@/types/api_responses/GetAllIndigents";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";

export default function IndigentsTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IIndigentRecord>("indigent_name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof IIndigentRecord) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.indigent_id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell align="left">{row.national_id}</TableCell>
                    <TableCell align="left">{row.indigent_name}</TableCell>
                    <TableCell align="left">{row.phone ?? ""}</TableCell>
                    <TableCell align="right">{row.kids ?? 0}</TableCell>
                    <TableCell align="left">{row.indigency_type_name}</TableCell>
                    <TableCell align="left">{row.governorate_name}</TableCell>
                    <TableCell align="left">{row.city_name}</TableCell>
                    <TableCell align="left">{row.district_name}</TableCell>
                    <TableCell align="left">{row.address ?? ""}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          dir="ltr"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

const rows: IIndigentRecord[] = [
  {
    indigent_id: 1082,
    national_id: "27811152702582",
    indigent_name: "فاطمه رضى حسن ابراهيم",
    phone: null,
    kids: null,
    indigency_type_name: "أيتام",
    governorate_name: "البحر الأحمر",
    city_name: "الغردقة",
    district_name: "الدهار",
    address: "حفر الباطن",
    is_active: true,
  },
  {
    indigent_id: 1083,
    national_id: "27609152602282",
    indigent_name: "مرفت عبدالنعيم على بيومى",
    phone: "01119968564",
    kids: null,
    indigency_type_name: "أيتام",
    governorate_name: "البحر الأحمر",
    city_name: "الغردقة",
    district_name: "الدهار",
    address: null,
    is_active: true,
  },
  {
    indigent_id: 1084,
    national_id: "28707180102606",
    indigent_name: "شيماء فتح الله عبد بركات",
    phone: "01018656992",
    kids: null,
    indigency_type_name: "أيتام",
    governorate_name: "البحر الأحمر",
    city_name: "الغردقة",
    district_name: "الدهار",
    address: "الاحياء",
    is_active: true,
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: IIndigentRecord[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof IIndigentRecord;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "national_id",
    numeric: false,
    disablePadding: true,
    label: "الرقم القومي",
  },
  {
    id: "indigent_name",
    numeric: false,
    disablePadding: false,
    label: "الإسم",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "الهاتف",
  },
  {
    id: "kids",
    numeric: true,
    disablePadding: false,
    label: "عدد الأطفال",
  },
  {
    id: "indigency_type_name",
    numeric: false,
    disablePadding: false,
    label: "نوع الإحتياج",
  },
  {
    id: "governorate_name",
    numeric: false,
    disablePadding: false,
    label: "المحافظة",
  },
  {
    id: "city_name",
    numeric: false,
    disablePadding: false,
    label: "المدينة",
  },
  {
    id: "district_name",
    numeric: false,
    disablePadding: false,
    label: "الحي",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: false,
    label: "العنوان",
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IIndigentRecord) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler =
    (property: keyof IIndigentRecord) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
