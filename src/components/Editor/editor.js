import React, { useState } from "react";
import ReactQuill from "react-quill";
import katex from "katex";
import "katex/dist/katex.min.css";
window.katex = katex;

const Editor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div style={{maxWidth: "70%", display: 'flex', justifyContent: 'center'}}>
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={modules}
        placeholder="Write something..."
      />
    </div>
  );
};

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ header: [1, 2, 3, false] }],

    ["link", "image", "formula"],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],

    ["clean"], // remove formatting button
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default Editor;
