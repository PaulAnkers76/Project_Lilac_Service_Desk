import { DataGrid } from "@mui/x-data-grid";

export default function WorkItemsGrid({
  rows,
}: {
  rows: any[];
}) {

  const columns = [
    {
      field: "WorkItemNumber",
      headerName: "Ticket",
      width: 160,
    },
    {
      field: "Title",
      headerName: "Title",
      width: 400,
    },
    {
      field: "StatusID",
      headerName: "Status",
      width: 120,
    },
  ];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      getRowId={(row) => row.WorkItemID}
    />
  );
}