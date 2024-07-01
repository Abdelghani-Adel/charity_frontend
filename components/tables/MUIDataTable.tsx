import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableProps } from "mui-datatables";
import React from "react";

type Props = {
  title: string | React.ReactNode;
  columns: MUIDataTableColumnDef[];
  data: Array<object | number[] | string[]>;
  onRowClick?:
    | ((rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void)
    | undefined;
};

const MUIDatatable = (props: Props) => {
  return (
    <div dir="ltr" className="text-right">
      <MUIDataTable
        title={props.title}
        data={props.data}
        columns={props.columns.toReversed()}
        options={{
          onRowClick: props.onRowClick,
          filterType: "multiselect",
          fixedHeader: true,
          responsive: "standard",
          selectableRows: "none",
        }}
      />
    </div>
  );
};

export default MUIDatatable;