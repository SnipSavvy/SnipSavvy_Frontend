import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { baseURL } from "@/config";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

interface DeleteSnippetProps {
    open: boolean;
    onClose: () => void;
    snippet_id: string;
}

const DeleteSnippet: React.FC<DeleteSnippetProps> = ({ open, onClose, snippet_id }) => {
    const searchParams = useSearchParams();
    const Router = useRouter();

    async function deleteSnippet(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        const token = localStorage.getItem("token");
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        try {
            const _id = snippet_id;
            const snippet = searchParams.get("snippet") || "";
            if (snippet === _id) {
                const workspace = searchParams.get("workspace") || "";
                const collection = searchParams.get("collection") || "";
                const query: Record<string, string> = {
                    workspace,
                    collection,
                };

                Router.push(`?${new URLSearchParams(query).toString()}`);
            }
            console.log("Deleting user with id:", _id);
            const response = await axios.delete(
                `${baseURL}/v1/api/snippet?s_id=${_id}`,
               
                {
                    headers,
                }
            );
            if (response.status === 200) {
                console.log("User deleted successfully");
            } else {
                console.log("Failed to delete user");
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            
            onClose();
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "#141415",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4,
                    outline: "none", // Remove the border on focus
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Confirm Deletion
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to delete this item?
                </Typography>
                <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
                    <Button onClick={onClose} sx={{ mr: 2 }}>
                        Cancel
                    </Button>
                    <Button onClick={(e) => deleteSnippet(e)} variant="contained" color="error">
                        Delete
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteSnippet;