import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { baseURL } from "@/config";
import axios from "axios";
import { WindowSharp } from "@mui/icons-material";

// Define ShareModalProps interface
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  workspace: {
    _id: string;
    name: string;
    description: string;
  };
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffff", // Change background color to white
  borderRadius: 8, // Add border radius for a rounded look
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add box shadow for depth
  p: 4,
};

const EditModal: React.FC<EditModalProps> = ({ open, onClose, workspace }) => {
  console.log("outside effect", workspace);

  const [newName, setNewName] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  useEffect(() => {
    if (workspace) {
      setNewName(workspace.name);
      setNewDescription(workspace.description);
    }
  }, [workspace]);

  const handleEditWorkspace = async () => {
    const body = {
      id: workspace._id,
      name: newName,
      description: newDescription,
    };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    await axios.put(`${baseURL}/v1/api/workspace/`, body, { headers }).then(
      (response) => {
        console.log(response);
        alert("Workspace Updated");
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
    onClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            mb={2}
            className="text-black
          "
          >
            Edit Workspace
          </Typography>
          <TextField
            id="standard-basic"
            label="New Workspace Name..."
            variant="outlined" // Change variant to outlined for a cleaner look
            fullWidth // Take up full width
            className="mb-2" // Add margin bottom
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="New Description..."
            variant="outlined" // Change variant to outlined for a cleaner look
            fullWidth // Take up full width
            className="mb-2" // Add margin bottom
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditWorkspace}
            fullWidth
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
