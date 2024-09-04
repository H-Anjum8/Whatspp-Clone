import React, { useRef, useState } from 'react';
import { FaUpload } from 'react-icons/fa'; // Example icon from react-icons

function IconFileUpload() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null); // State to store selected image

  // Function to trigger the file input click
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
      setImage(imageUrl); // Update the state with the image URL
    }
  };

  return (
    <div>
      <FaUpload
        onClick={handleIconClick}
        style={{ cursor: 'pointer', fontSize: '24px', color: '#007bff' }} // Style the icon
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }} // Hide the input element
        onChange={handleFileChange}
      />
      {image && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={image}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
}

export default IconFileUpload;
