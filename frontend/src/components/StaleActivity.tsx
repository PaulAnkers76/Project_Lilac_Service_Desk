import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";

export default function StaleActivity({
    items,
    statuses,
}: {
    items: any[];
    statuses: any[];
}) {

    const statusLookup = Object.fromEntries(
        (statuses ?? []).map((status) => [
            status.StatusID,
            status.StatusName,
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
            flex: 1,
        },
        {
            field: "StatusID",
            headerName: "Status",
            width: 150,

            renderCell: (params: any) =>
                statusLookup[
                    Number(params.value)
                ] ?? params.value,
        },
        {
            field: "UpdatedDate",
            headerName: "Updated",
            width: 150,

            renderCell: (params: any) =>
                new Date(
                    params.value
                ).toLocaleDateString(
                    "en-GB",
                    {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    }
                ),
        },
    ];

    return (
        <Card sx={{ mt: 4 }}>

            <CardContent>

                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Recent Activity
                </Typography>

                <DataGrid
                    rows={items}
                    columns={columns}
                    getRowId={(row) =>
                        row.WorkItemID
                    }
                    autoHeight
                    hideFooter
                />

            </CardContent>

        </Card>
    );
}