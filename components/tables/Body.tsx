import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { v4 } from "uuid";

interface TableBodyProps {
  columns: string[];
  rows: any[];
  onRowClick?: (row: any) => void;
}

export default function Body({ columns, rows, onRowClick }: Readonly<TableBodyProps>) {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow
          hover
          tabIndex={-1}
          key={v4()}
          sx={{ cursor: "pointer" }}
          onClick={() => {
            if (onRowClick) onRowClick(row);
          }}
        >
          {columns.map((column) => (
            <TableCell key={column} align="right" className="w-max">
              {row[column] ?? ""}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
