import {
    Card,
    CardContent,
    Typography,
} from "@mui/material";

export default function RecentActivity({
    items,
}: {
    items: any[];
}) {

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
                    </Typography>

                ))}

            </CardContent>

        </Card>
    );
}