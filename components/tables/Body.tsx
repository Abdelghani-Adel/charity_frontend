import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

interface TableBodyProps {
  columns: string[];
  rows: any[];
}

export default function Body({ columns, rows }: TableBodyProps) {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ cursor: "pointer" }}>
          {columns.map((column) => (
            <TableCell key={column} align="right">
              {row[column] ?? ""}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
