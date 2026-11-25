import { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";

import SummaryCards from "../components/SummaryCards";

import { api } from "../services/api";

export default function DashboardPage() {

    const [workItems, setWorkItems] = useState([]);

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

        </Container>
    );
}