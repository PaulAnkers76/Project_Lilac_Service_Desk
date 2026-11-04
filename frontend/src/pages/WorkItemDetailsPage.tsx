import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Container,
    Paper,
    Typography,
} from "@mui/material";

import { api } from "../services/api";

export default function WorkItemDetailsPage() {

    const { id } = useParams();

    const [workItem, setWorkItem] = useState<any>(null);

    useEffect(() => {

    console.log("Loading work item:", id);

    api
        .get(`/workitems/${id}`)
        .then((response) => {

            console.log("Response:", response.data);

            setWorkItem(response.data);

        })
        .catch((error) => {

            console.error("Details Error");

            console.error(error);

        });

}, [id]);

    if (!workItem) {
        return <div>Loading...</div>;
    }

    return (
        <Container maxWidth="md">

            <Paper
                sx={{
                    p: 4,
                    mt: 4,
                }}
            >

                <Typography variant="h4">
                    {workItem.WorkItemNumber}
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                    }}
                >
                    {workItem.Title}
                </Typography>

                <Typography
                    sx={{
                        mt: 3,
                    }}
                >
                    {workItem.Description}
                </Typography>

            </Paper>

        </Container>
    );
}