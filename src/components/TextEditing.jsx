// TextEditing.js
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

const TextEditing = ({ transcribedText }) => {
  const [text, setText] = useState(transcribedText || '');

    useEffect(() => {
    setText(transcribedText);
    }, [transcribedText]);
  
  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <h2>Text Editing</h2>
      {console.log(`Text editing text: ${text}`)}
      <ReactQuill value={text} onChange={handleTextChange} />

      {/* Other buttons or controls related to text editing can be added here */}
    </div>
  );
};

export default TextEditing;
