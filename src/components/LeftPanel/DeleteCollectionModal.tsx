import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { baseURL } from "@/config";
import axios from "axios";
import { redirect, useSearchParams ,useRouter, usePathname} from "next/navigation";

interface collectionItem {
  name: string;
  description: string;
  _id: string;
}
interface DeleteCollectionModalProps {
  open: boolean;
  onClose: () => void;
  collection: collectionItem;
  fetchCategories: () => void;
}
const DeleteCollectionModal: React.FC<DeleteCollectionModalProps> = ({
  open,
  onClose,
  collection,
  fetchCategories,
}) => {
  const searchParams = useSearchParams();
  const workspace = searchParams.get("workspace") || "";
  const collection_id = searchParams.get("collection") || "";
  const snippet_id = searchParams.get("snippet") || "";
  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const router = useRouter()
  const pathName = usePathname()
  const handleDelete = async (e: any) => {
    e.preventDefault();
    try {
      const body = {
        workspace_id: workspace,
        category_id: collection._id,
      };
      console.log(body);
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const resp = await axios
        .delete(`${baseURL}/v1/api/category/`, { data: body, headers })
        .then(
          (response) => {
            
            console.log(
              "c_id => ",
              collection._id,
              "param_c_id =>",
              collection_id
            );
            if (collection._id === collection_id) {
              // const nextSearchParams = new URLSearchParams(searchParams.toString());
              console.log("Working")
              nextSearchParams.delete("snippet");
              nextSearchParams.delete("collection")
              router.push(`${pathName}?${nextSearchParams.toString()}`);
              // redirect(`/workspace/${workspace}`);
            }
            alert("Collection Removed !!");
            // window.location.reload()
            onClose();
            fetchCategories();
            // console.log(window.location.href);
          },
          (error) => {
            console.log(error);
            alert("Error");
          }
        );

      
    } catch (error) {
      alert("error occured while removing the collection");
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

export default DeleteCollectionModal;
