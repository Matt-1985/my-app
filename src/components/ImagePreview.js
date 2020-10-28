import React from "react";
import "./imagePreview.css";

export default function ImangPreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <button className="favorite-btn" onClick={() => alert("test")}>
        🤍
      </button>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
