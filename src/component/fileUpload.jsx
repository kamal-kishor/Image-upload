import React, { useState } from "react";

export default function FileUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="col-lg-6">
          {image && (
            <>
              <img src={image} alt="uploaded image" />
              <br />
              <button onClick={() => setImage(null)}>Hide Image</button>
            </>
          )}
          {!image && <p>No image uploaded yet.</p>}
        </div>
      </div>
    </div>
  );
}
