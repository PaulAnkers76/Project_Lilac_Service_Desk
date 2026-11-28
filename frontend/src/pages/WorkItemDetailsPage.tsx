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
    const [Users, setUsers] = useState<any[]>([]);

    const [assignedUser, setAssignedUser] =
        useState<number | "">("");

    useEffect(() => {

        api
            .get(`/workitems/${id}`)
            .then((response) => {

                setWorkItem(response.data);

                setSelectedStatus(
                    response.data.StatusID
                );


                setAssignedUser(
                    response.data.AssignedUserID
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

        api
            .get("/Users")
            .then((response) => {
                setUsers(response.data);
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
                AssignedUserID: assignedUser
            }
        );

        alert("Item updated");

    } catch (error) {

        console.error(error);

    }

};

const handleDelete = async () => {

    const confirmed = window.confirm(
        "Are you sure you want to delete this work item?"
    );

    if (!confirmed) {
        return;
    }

    try {

        await api.delete(
            `/workitems/${id}`
        );

        alert("Work item deleted");

        window.location.href = "/workitems";

    } catch (error) {

        console.error(error);

    }

};

if (!workItem) {

    return (
        <Container>
            <Typography variant="h5">
                Work item not found.
            </Typography>
        </Container>
    );

}

    return (
        <Container maxWidth="xl">

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

                <FormControl
    fullWidth
    sx={{ mt: 3 }}
>

    <InputLabel>
        Assigned To
    </InputLabel>

    <Select
        value={assignedUser}
        label="Assigned To"
        onChange={(e) =>
            setAssignedUser(
                Number(e.target.value)
            )
        }
    >

        {Users.map((user) => (

            <MenuItem
                key={user.UserID}
                value={user.UserID}
            >
                {user.DisplayName}
            </MenuItem>

        ))}

    </Select>

</FormControl>
                <Button
                    color="error"
                    variant="contained"
                    sx={{ mt: 2, mr: 2 }}
                    onClick={handleDelete}
                >
                    Delete Work Item
                </Button>

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