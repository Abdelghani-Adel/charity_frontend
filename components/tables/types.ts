export interface HeadCell {
  id: string;
  label: string;
}

export interface EnhancedTableProps {
  order: "asc" | "desc";
  orderBy: string;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
}
