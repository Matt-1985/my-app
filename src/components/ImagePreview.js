import React from "react";
import "./imangePreview.css";

export default function ImangPreview({ src, alt, author }) {
  return (
    <div className="imageContainer">
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
