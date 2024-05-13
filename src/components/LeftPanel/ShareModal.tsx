import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { baseURL } from "@/config";

// Define ShareModalProps interface
interface ShareModalProps {
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

const ShareModal: React.FC<ShareModalProps> = ({
  open,
  onClose,
  workspace,
}) => {
  const [email, setEmail] = useState<string>();
  const handleShareWorkspace = async () => {
    const body = {
      email: email,
      workspace_id: `${workspace._id}`,
      sharedData: "workspace",
    };
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    await axios
      .post(`${baseURL}/v1/api/share/workspace`, body, { headers })
      .then(
        (response) => {
          console.log(response);
          alert("Workspace Shared Successfully");
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
            className="text-black"
          >
            Share Access
          </Typography>
          <TextField
            id="standard-basic"
            label="Enter Email"
            variant="outlined" // Change variant to outlined for a cleaner look
            fullWidth // Take up full width
            className="mb-2" // Add margin bottom
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleShareWorkspace}
            fullWidth
          >
            Share
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ShareModal;
