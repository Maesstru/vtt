import React, { useRef, useState } from 'react';
import { Button, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

function AudioUpload() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select an audio file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("audio", file); // 'audio' should match your backend field name

    try {
      const response = await fetch("http://localhost:8000/audio/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: 50 }}>
      <Typography variant="h6">Upload an Audio File</Typography>

      {/* Hidden file input */}
      <input
        type="file"
        accept="audio/*"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Trigger file input */}
      <Button
        variant="contained"
        startIcon={<UploadFileIcon />}
        onClick={() => inputRef.current.click()}
        sx={{ mt: 2 }}
      >
        Select Audio
      </Button>

      {/* Show selected file name */}
        <Typography variant="body1" sx={{ mt: 2 }}>
          Selected file: <strong>{fileName}</strong>
        </Typography>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="outlined"
        sx={{ mt: 3 }}
        disabled={!file}
      >
        Upload File
      </Button>
    </form>
  );
}

export default AudioUpload;
