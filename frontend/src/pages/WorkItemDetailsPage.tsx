import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

import { api } from "../services/api";

export default function WorkItemDetailsPage() {

    const { id } = useParams();

    const [workItem, setWorkItem] = useState<any>(null);
    const [comments, setComments] = useState<any[]>([]);
    const [newComment, setNewComment] = useState("");
    const [statuses, setStatuses] = useState<any[]>([]);
    const [selectedStatus, setSelectedStatus] = useState("");

    useEffect(() => {

        api
            .get(`/workitems/${id}`)
            .then((response) => {

                setWorkItem(response.data);

                setSelectedStatus(
                    response.data.StatusID
                );

            })
            .catch((error) => {

                console.error("Details Error");

                console.error(error);

            });

        api
            .get(`/workitems/${id}/comments`)
            .then((response) => {

                setComments(response.data);

            })
            .catch((error) => {

                console.error("Comments Error");

                console.error(error);

            });

        api
            .get("/statuses")
            .then((response) => {

                setStatuses(response.data);

            });

    }, [id]);

    const handleAddComment = async () => {

        try {

            await api.post(
                `/workitems/${id}/comments`,
                {
                    CommentText: newComment,
                    CreatedByUserID: 1,
                    IsInternal: false,
                }
            );

            const response = await api.get(
                `/workitems/${id}/comments`
            );

            setComments(response.data);

            setNewComment("");

        } catch (error) {

            console.error(error);

        }

    };

    const handleSaveStatus = async () => {

    console.log("Saving Status");
    console.log("Selected Status:", selectedStatus);

    try {

        await api.put(
            `/workitems/${id}`,
            {
                StatusID: selectedStatus,
            }
        );

        alert("Status updated");

    } catch (error) {

        console.error(error);

    }

};


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

                <FormControl
                    fullWidth
                    sx={{ mt: 3 }}
                >

                    <InputLabel>
                        Status
                    </InputLabel>

                    <Select
                        value={selectedStatus}
                        label="Status"
                        onChange={(e) =>
                            setSelectedStatus(
                                e.target.value
                            )
                        }
                    >

                        {statuses.map((status) => (

                            <MenuItem
                                key={status.StatusID}
                                value={status.StatusID}
                            >
                                {status.StatusName}
                            </MenuItem>

                        ))}

                    </Select>

                </FormControl>

                <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={handleSaveStatus}
                >
                    Save Status
                </Button>

                <Typography
                    variant="h5"
                    sx={{
                        mt: 4,
                    }}
                >
                    Comments
                </Typography>

                {comments.length === 0 && (
                    <Typography
                        sx={{
                            mt: 2,
                        }}
                    >
                        No comments found.
                    </Typography>
                )}

                {comments.map((comment) => (

                    <Paper
                        key={comment.CommentID}
                        sx={{
                            p: 2,
                            mt: 2,
                            backgroundColor: "#f5f5f5",
                        }}
                    >

                        <Typography>
                            {comment.CommentText}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                fontSize: "0.8rem",
                                color: "gray",
                            }}
                        >
                            User {comment.CreatedByUserID}
                        </Typography>

                    </Paper>

                ))}

                <TextField
                    label="Add Comment"
                    multiline
                    rows={4}
                    fullWidth
                    value={newComment}
                    onChange={(e) =>
                        setNewComment(e.target.value)
                    }
                    sx={{
                        mt: 3,
                    }}
                />

                <Button
                    variant="contained"
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    sx={{
                        mt: 2,
                    }}
                >
                    Add Comment
                </Button>

            </Paper>

        </Container>
    );
}