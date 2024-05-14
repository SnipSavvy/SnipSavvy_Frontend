import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { baseURL } from "@/config";
import axios from "axios";
interface EditCollectionProps {
  open: boolean;
  onClose: () => void;
  workspace: string;
  collection: {
    _id: string;
    name: string;
    description: string;
  };
  fetchCategories: () => void;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "", 
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", 
  p: 4,
};

const EditCollection: React.FC<EditCollectionProps> = ({
  open,
  onClose,
  workspace,
  collection,
  fetchCategories,
}) => {
  const [newName, setNewName] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  useEffect(() => {
    if (workspace && collection._id) {
      setNewName(collection.name);
      setNewDescription(collection.description);
    }
  }, [collection]);

  const handleEditCollection = async () => {
    const body = {
      collectionid: collection._id,
      name: newName,
      description: newDescription,
    };
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    await axios
      .put(`${baseURL}/v1/api/category/${workspace}/${collection._id}`, body, {
        headers,
      })
      .then(
        (response) => {
          console.log(response);
          alert("Collection Updated");
          fetchCategories();
          
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
        <Box sx={modalStyle} className="bg-zinc-900 ">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            mb={2}
            className="text-gray-200
          "
          >
            Edit Collection
          </Typography>
          <TextField
            id="standard-basic"
            label="New Name"
            placeholder={collection.name}
            variant="outlined"
            fullWidth
            className="mb-4 bg-zinc-800"
            InputProps={{
              style: {
                color: "white", // Text color
                borderColor: "white", // Outline color
              },
            }}
            InputLabelProps={{
              style: {
                color: "white", // Label color
              },
            }}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            id="outlined-controlled"
            label="New Description"
            placeholder={collection.description}
            variant="outlined"
            fullWidth
            className="mb-4 bg-zinc-800"
            InputProps={{
              style: {
                color: "white", // Text color
                borderColor: "white", // Outline color
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
                borderColor: "gray", // Label color
              },
            }}
            onChange={(e) => setNewName(e.target.value)}
          />
          
          <Button
            className="w-2/6 bg-orange-500 hover:bg-orange-600"
            variant="contained"
            
            onClick={handleEditCollection}
            fullWidth
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default EditCollection;
