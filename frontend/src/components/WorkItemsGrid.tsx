import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

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

      renderCell: (params) => (
        <Link
            to={`/workitems/${params.row.WorkItemID}`}
        >
            {params.value}
        </Link>
      ),
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