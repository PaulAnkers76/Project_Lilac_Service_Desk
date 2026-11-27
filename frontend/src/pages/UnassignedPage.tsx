import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";


import WorkItemsGrid from "../components/WorkItemsGrid";

import { api } from "../services/api";



export default function MyWorkPage() {

  const [workItems, setWorkItems] = useState([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [priorities, setPriorities] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [assignedUser, setAssignedUser] =
     useState<number | "">("");

     const UnassignedItems = workItems.filter(
        item =>
            item.AssignedUserID === null &&
            ![5, 6].includes(item.StatusID)
);




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
console.log(UnassignedItems);
  
    return (
        <Container>

            <Typography
                variant="h3"
                gutterBottom
            >
                Unassigned Work
            </Typography>

            <WorkItemsGrid
                rows={UnassignedItems}
                statuses={statuses}
                priorities={priorities}
                users={users}
            />

        </Container>
    );
}