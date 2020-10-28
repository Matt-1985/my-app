import React from "react";
import "./button.css";

export default function Button({ innerText, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {innerText}
    </button>
  ); //bei element erstellung darauf achte das das HTML elemnt kleingeschrieben wird
}
