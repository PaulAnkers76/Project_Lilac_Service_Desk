import { useEffect, useState } from "react";

import {
    Container,
    Typography,
} from "@mui/material";

import SummaryCards from "../components/SummaryCards";
import RecentActivity from "../components/RecentActivity";

import { api } from "../services/api";

export default function DashboardPage() {

    const [workItems, setWorkItems] = useState<any[]>([]);

    const recentItems = [...workItems]
        .sort(
            (a, b) =>
                new Date(b.UpdatedDate).getTime() -
                new Date(a.UpdatedDate).getTime()
        )
        .slice(0, 5);

    useEffect(() => {

        api.get("/workitems")
            .then((response) => {
                setWorkItems(response.data);
            });

    }, []);

    return (
        <Container maxWidth="xl">

            <Typography
                variant="h3"
                gutterBottom
            >
                Dashboard
            </Typography>

            <Typography
                sx={{ mb: 3 }}
            >
                Project Lilac Service Desk
            </Typography>

            <SummaryCards
                workItems={workItems}
            />

            <RecentActivity
                items={recentItems}
            />

        </Container>
    );
}