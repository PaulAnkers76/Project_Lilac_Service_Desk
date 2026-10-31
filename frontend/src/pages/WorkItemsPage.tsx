import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { WorkItem } from "../types/WorkItem";

export default function WorkItemsPage() {

  const [workItems, setWorkItems] = useState<WorkItem[]>([]);

  useEffect(() => {
    api
      .get("/workitems")
      .then((response) => {
        setWorkItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Service Desk</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {workItems.map((item) => (
            <tr key={item.WorkItemID}>
              <td>{item.WorkItemID}</td>
              <td>{item.WorkItemNumber}</td>
              <td>{item.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}