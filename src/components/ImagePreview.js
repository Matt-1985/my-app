import React from "react";
import IconButton from "./IconButton";
import "./imagePreview.css";

export default function ImangPreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <IconButton className="icon-button" onClick={() => alert("test")}>
        🤍
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
