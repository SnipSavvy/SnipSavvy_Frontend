import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { baseURL } from "@/config";
import axios from "axios";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  workspace_id: string;
  type: string;
  email: any;
}
const DeleteModal: React.FC<DeleteModalProps> = ({
  open,
  onClose,
  workspace_id,
  type,
  email,
}) => {
  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (type == "shared") {
        const body = {
          workspace_id,
          email,
        };
        await axios
          .delete(`${baseURL}/v1/api/workspace/shared`, { data: body, headers })
          .then(
            (response) => {
              alert("Shared Workspace Removed !!");
              window.location.reload();
            },
            (error) => {
              alert("error occured while removing the shared workspace");
            }
          );
      } else {
        await axios
          .delete(`${baseURL}/v1/api/workspace?w_id=${workspace_id}`, {
            headers,
          })
          .then(
            (response) => {
              alert("Workspace Removed !!");
              window.location.reload();
            },
            (error) => {
              alert("error occured while removing the workspace");
            }
          );
      }
    } catch (error) {
      alert("error occured while removing the workspace");
    }
  };

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
          <Button
            onClick={(e) => handleDelete(e)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
