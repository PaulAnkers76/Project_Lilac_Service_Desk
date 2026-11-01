import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";

import SummaryCards from "../components/SummaryCards";
import WorkItemsGrid from "../components/WorkItemsGrid";

import { api } from "../services/api";

export default function WorkItemsPage() {

  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    api.get("/workitems")
      .then((response) => {
        setWorkItems(response.data);
      });
  }, []);

  return (
    <Container>

      <Typography
        variant="h3"
        gutterBottom
      >
        Service Desk
      </Typography>

      <SummaryCards />

      <br />

      <WorkItemsGrid
        rows={workItems}
      />

    </Container>
  );
}
