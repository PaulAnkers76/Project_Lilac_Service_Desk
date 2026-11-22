import { Card, CardContent, Grid, Typography } from "@mui/material";


export default function SummaryCards ({
  workItems,
}: {
    workItems: any[];
}) {
  const openIncidents = workItems.filter(
    item => ![5, 6].includes(item.StatusID)
).length;
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              {openIncidents}
            </Typography>

            <Typography>
              Open Incidents
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              0
            </Typography>

            <Typography>
              Requests
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              0
            </Typography>

            <Typography>
              Tasks
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}