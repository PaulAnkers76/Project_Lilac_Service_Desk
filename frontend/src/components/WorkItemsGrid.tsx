import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function WorkItemsGrid({
    rows,
    statuses,
    priorities,
    users
}: {
    rows: any[];
    statuses: any[];
    priorities: any[];
    users: any[];
}) {

    const statusLookup = Object.fromEntries(
    (statuses ?? []).map((status) => [
        status.StatusID,
        status.StatusName,
    ])
);

    const priorityLookup = Object.fromEntries(
    (priorities ?? []).map((priority) => [
        priority.PriorityID,
        priority.PriorityName,
    ])
);

const userLookup = Object.fromEntries(
    (users ?? []).map((Users) => [
        Users.UserIDID,
        Users.DisplayName,
    ])
);

    const columns = [
        {
            field: "WorkItemNumber",
            headerName: "Ticket",
            width: 160,

            renderCell: (params: any) => (
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
            width: 300,
        },
        {
            field: "StatusID",
            headerName: "Status",
            width: 150,

            renderCell: (params: any) =>
                statusLookup[params.value] ??
                params.value,
        },
        {
            field: "PriorityID",
            headerName: "Priority",
            width: 150,

            renderCell: (params: any) =>
                priorityLookup[params.value] ??
                params.value,
        },
          {
            field: "UserID",
                headerName: "Assigned",
                width: 150,

                renderCell: (params: any) =>
                    priorityLookup[params.value] ??
                    params.value,
            },

        {
    field: "CreatedDate",
    headerName: "Created",
    width: 150,

    renderCell: (params: any) => {

        if (!params.value) {
            return "";
        }

        return new Date(
            params.value
        ).toLocaleDateString("en-GB");
    },
},

{
    field: "UpdatedDate",
    headerName: "Updated",
    width: 150,

    renderCell: (params: any) => {

        if (!params.value) {
            return "";
        }

        return new Date(
            params.value
        ).toLocaleDateString("en-GB");
    },
},
    ];

    return (
        <div style={{ height: 500, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.WorkItemID}
            />
        </div>
    );
}