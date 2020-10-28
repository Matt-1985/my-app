import React from "react";
import IconButton from "./IconButton";
import "./imagePreview.css";

export default function ImangPreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <IconButton
        className="icon-button"
        onClick={() => {
          let favorites = null;
          try {
            favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          } catch (error) {
            console.error(error);
            favorites = [];
          }
          if (favorites.includes(id)) {
            // Already added to favorites
            return;
          }
          const newFavorites = [...favorites, id];
          localStorage.setItem("favorites", JSON.stringify([id]));
        }}
      >
        🍑
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
