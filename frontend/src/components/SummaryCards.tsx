import { ClosedCaptionDisabledRounded } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography } from "@mui/material";



export default function SummaryCards ({
  workItems,
}: {
    workItems: any[];
}) {
  const openIncidents = workItems.filter(
    item => ![5, 6].includes(item.StatusID)
).length;

const myWork =
    workItems.filter(
        item =>
            item.AssignedUserID === 3 &&
            ![5, 6].includes(item.StatusID)
    ).length;

    const unassigned =
    workItems.filter(
        item =>
            item.AssignedUserID == null &&
            ![5, 6].includes(item.StatusID)
    ).length;

    const waiting = workItems.filter(
    item => item.StatusID === 4
).length;

const resolved = workItems.filter(
    item => item.StatusID === 6
).length;

const closed = workItems.filter(
    item => item.StatusID === 5
).length;

return (
    <Grid container spacing={2}>

        <Grid size={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {openIncidents}
                    </Typography>

                    <Typography>
                        All Open Incidents
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid size={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {myWork}
                    </Typography>

                    <Typography>
                        My Open Incidents
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid size={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {unassigned}
                    </Typography>

                    <Typography>
                        Unassigned
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid size={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {waiting}
                    </Typography>

                    <Typography>
                        Waiting
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid size={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {closed}
                    </Typography>

                    <Typography>
                        Closed
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid size={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {resolved}
                    </Typography>

                    <Typography>
                        Resolved
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    </Grid>
);
}