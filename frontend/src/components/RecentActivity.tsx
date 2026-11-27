import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

export default function RecentActivity({
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

    console.log(statuses);
    console.log(statusLookup);

    return (
        <Card sx={{ mt: 4 }}>

            <CardContent>

                <Typography
                    variant="h5"
                    gutterBottom
                >
                    Recent Activity
                </Typography>

                {items.map((item) => (

                    <Typography
                        key={item.WorkItemID}
                        sx={{ mb: 1 }}
                    >
                        {item.WorkItemNumber}
                        {" - "}
                        {item.Title}
                        {" - "}
                        {statusLookup[Number(item.StatusID)]}
                        {" - "}
                        {new Date(
                            item.UpdatedDate
                        ).toLocaleDateString(
                            "en-GB",
                            {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            }
                        )}
                    </Typography>

                ))}

            </CardContent>

        </Card>
    );
}