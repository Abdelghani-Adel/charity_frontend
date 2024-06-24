import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface TableBodyProps {
  rows: any[];
  columns: string[];
  visibleRows: any[];
  emptyRows: number;
}

export default function Body({ rows, columns, visibleRows, emptyRows }: TableBodyProps) {
  return (
    <TableBody>
      {visibleRows.map((row, index) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ cursor: "pointer" }}>
          {columns.map((column) => (
            <TableCell key={column} align="left">
              {row[column] ?? ""}
            </TableCell>
          ))}
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={columns.length} />
        </TableRow>
      )}
    </TableBody>
  );
}
