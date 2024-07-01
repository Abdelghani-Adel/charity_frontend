import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
  MUIDataTableProps,
} from "mui-datatables";
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
  const options: MUIDataTableOptions | undefined = {
    onRowClick: props.onRowClick,
    filterType: "multiselect",
    fixedHeader: true,
    responsive: "standard",
    selectableRows: "none",
    textLabels: {
      body: {
        noMatch: "لا توجد بيانات",
      },
      toolbar: {
        search: "بحث",
        downloadCsv: "تحميل CSV",
        print: "طباعة",
        viewColumns: "الأعمدة",
        filterTable: "فلتر",
      },
    },
  };

  return (
    <div dir="ltr" className="text-right">
      <MUIDataTable
        title={props.title}
        data={props.data}
        columns={props.columns}
        options={options}
      />
    </div>
  );
};

export default MUIDatatable;
