import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Box,
} from "@mui/material";

export default function CreateWorkItemPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {

    try {

        await api.post(
            "/workitems",
            {
                ProjectID: 1,
                WorkItemTypeID: 1,
                StatusID: 1,
                PriorityID: 2,
                Title: title,
                Description: description,
                CreatedByUserID: 1,
            }
        );

        navigate("/workitems");

    } catch (error: any) {

    console.error("Create Work Item Error");

    console.error(error);

    console.error(error?.response);

    console.error(error?.response?.data);

    alert(
        JSON.stringify(
            error?.response?.data
        )
    );
}

};
    return (
        <Container maxWidth="md">

            <Paper
                sx={{
                    padding: 4,
                    marginTop: 4,
                }}
            >

                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Create Work Item
                </Typography>

                <Box
                    display="flex"
                    flexDirection="column"
                    gap={3}
                >

                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        fullWidth
                    />

                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        multiline
                        rows={6}
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Create Work Item
                    </Button>

                </Box>

            </Paper>

        </Container>
    );
}