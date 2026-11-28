import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";


import WorkItemsGrid from "../components/WorkItemsGrid";

import { api } from "../services/api";



export default function AgingItems() {

  const [workItems, setWorkItems] = useState([]);
  const [statuses, setStatuses] = useState<any[]>([]);
  const [priorities, setPriorities] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const currentUserId = 3;
 

     const AgingItems = workItems.filter(
        item =>
            
            ![1, 5, 6].includes(item.StatusID)
             )
    .sort(
        (a, b) =>
            new Date(a.UpdatedDate).getTime() -
            new Date(b.UpdatedDate).getTime()
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
console.log(AgingItems);
  
    return (
        <Container>

            <Typography
                variant="h3"
                gutterBottom
            >
                Aging Work
            </Typography>

            <WorkItemsGrid
                rows={AgingItems}
                statuses={statuses}
                priorities={priorities}
                users={users}
            />

        </Container>
    );
}