"use client";
import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SnippetModal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Image from "next/image";
// import Workspace from "../../../public/workspace.jpg";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { baseURL } from "@/config";
import { string } from "zod";


const workspaceWarningToast = (placeholder: string, duration: number = 2000) => {
  toast.error(`Don't leave the ${placeholder} field empty!`, {
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      background: '#333333',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      textAlign: 'center',
      width: '160%'
    },
    
    progressStyle: {
      background: 'white'
    }
  })
};



export default function Modal({ fetchWorkspace }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState({
    name: "",
    description: "",
  });
  const handleSubmit = () => {
    setOpen(false);
    alert("Works space created!");
  };


  const handleCreateWorkspace = async () => {
    if(data.name == '')
      workspaceWarningToast('name')
    if(data.description == '')
      workspaceWarningToast('description')

    if(data.name != '' && data.description != ''){
      const body = {
        name: data.name,
        description: data.description,
      };
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      await axios.post(`${baseURL}/v1/api/workspace`, body, { headers }).then(
        (response) => {
          console.log(response);
          alert("Workspace Created");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  return (
    <Dialog>
      <ToastContainer position="top-left"/>
      <DialogTrigger asChild>
        <Button className="hover:bg-zinc-600 hover:rounded duration-300 font-bold text-3xl ">
          +
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px] rounded-3xl "
        style={{ backdropFilter: "blur(8px)" }}
      >
        <DialogHeader>
          <DialogTitle>Create Workspace</DialogTitle>
          <DialogDescription>
            Add Name & Description to your workspace
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="New Workspace"
              className="col-span-3"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input
              id="username"
              placeholder="Project Snippets"
              className="col-span-3"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleCreateWorkspace()}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
