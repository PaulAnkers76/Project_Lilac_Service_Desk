import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";

import SummaryCards from "../components/SummaryCards";
import WorkItemsGrid from "../components/WorkItemsGrid";

import { api } from "../services/api";

export default function WorkItemsPage() {

  const [workItems, setWorkItems] = useState([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [priorities, setPriorities] = useState<any[]>([]);
  const [Users, setUsers] = useState<any[]>([]);

  const [assignedUser, setAssignedUser] =
     useState<number | "">("");

  useEffect(() => {

    api.get("/workitems")
        .then((response) => {
            setWorkItems(response.data);
        });

    api.get("/statuses")
        .then((response) => {
            setStatuses(response.data);
        });

      api.get("/priorities")
        .then((response) => {
            setPriorities(response.data);
        });

      api
        .get("/Users")
        .then((response) => {
          setUsers(response.data);
      });

}, []);
    
console.log(workItems);
  return (
    <Container>

      <Typography
        variant="h3"
        gutterBottom
      >
        Service Desk
      </Typography>

      

      <br />

      <WorkItemsGrid
       
        rows={workItems}
        statuses={statuses}
        priorities={priorities}
        users={Users}

      />

    </Container>
  );
}
