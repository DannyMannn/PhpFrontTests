import { Typography, CircularProgress, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import NoteAddIcon from "@material-ui/icons/NoteAdd";

const Proveedores = () => {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle file selection and auto-upload
  const handleFileChange = async (event) => {
    console.log("Inside handleFileChange");
    const file = event.target.files?.[0];
    if (file) {
      await uploadFile(file);
    }
  };

  // Handle file upload using Axios
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("image1", file);

    setUploading(true);
    setMessage(""); // Reset message before upload

    try {
      const response = await axios.post(
        "http://localhost:8888/PutSystem.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(response.data.message || "File uploaded successfully!");
    } catch (error) {
      setMessage("Failed to upload the file.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Proveedores</h1>
      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-input"
      />

      {/* NoteAddIcon as Upload Button */}
      <label htmlFor="file-input">
        <IconButton color="primary" component="span">
          <NoteAddIcon fontSize="large" />
        </IconButton>
      </label>

      {/* Uploading Status */}
      {uploading ? (
        <CircularProgress />
      ) : (
        message && <Typography>{message}</Typography>
      )}
    </div>
  );
};

export default Proveedores;
