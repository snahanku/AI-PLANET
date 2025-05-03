import React, { useRef, useState } from 'react';

function FileUpload() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // triggers hidden file input
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Hidden File Input */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      {/* Upload Button */}
      <button onClick={handleButtonClick}>
        {file ? file.name : 'Upload PDF'}
      </button>
    </div>
  );
}

export default FileUpload;
