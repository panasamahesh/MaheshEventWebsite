import React, { useState } from "react";
import "./Upload.css";

function WeddingUpload() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const maxLimit = 10;

  const handleImageChange = (e) => {
    if (!title.trim()) {
      alert("Please enter event title before uploading images 💍");
      return;
    }

    const files = Array.from(e.target.files);

    if (images.length + files.length > maxLimit) {
      alert(`You can upload maximum ${maxLimit} images only.`);
      return;
    }

    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDelete = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Wedding Memories</h2>

      {/* TEXT INPUT */}
      <input
        type="text"
        placeholder="Enter Event Name"
        className="event-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* UPLOAD BOX */}
      <label className="upload-box">
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          disabled={images.length >= maxLimit}
        />
        <span>
          Click to Upload (Max {maxLimit}) 💍 <br />
          {images.length}/{maxLimit} Uploaded
        </span>
      </label>

      {/* EVENT TITLE DISPLAY */}
      {title && images.length > 0 && (
        <h3 className="event-title-display">{title}</h3>
      )}

      {/* IMAGE GRID */}
      <div className="preview-grid">
        {images.map((img) => (
          <div key={img.id} className="preview-card">
            <img src={img.url} alt="preview" />
            <button
              className="delete-btn"
              onClick={() => handleDelete(img.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeddingUpload;