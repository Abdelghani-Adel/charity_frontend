"use client";

import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from "mui-datatables";
import React, { useEffect, useState } from "react";

type Props = {
  title: string | React.ReactNode;
  columns: MUIDataTableColumn[];
  data: Array<object | number[] | string[]>;
  rowClick?:
    | ((rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => void)
    | undefined;
};

const MUIDatatable = (props: Props) => {
  const [tableData, setTableData] = useState<Array<object | number[] | string[]>>();

  useEffect(() => {
    // Function to map the data to match the order of columns
    const mapDataToColumns = (data: any[], columns: MUIDataTableColumn[]) => {
      return data.map((row) => {
        const mappedRow: any = {};
        columns.forEach((column) => {
          mappedRow[column.name] = row[column.name];
        });
        return mappedRow;
      });
    };
    const mappedData = mapDataToColumns(props.data, props.columns);
    setTableData(mappedData);
  }, [props]);

  const options: MUIDataTableOptions | undefined = {
    onRowClick: props.rowClick,
    filterType: "multiselect",
    fixedHeader: true,
    responsive: "standard",
    selectableRows: "none",
    // selectableRowsHeader: false,
    // selectToolbarPlacement: "none",
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

  return tableData ? (
    <div dir="ltr" className="text-right">
      <MUIDataTable
        title={props.title}
        data={tableData}
        columns={props.columns}
        options={options}
      />
    </div>
  ) : null;
};

export default MUIDatatable;
