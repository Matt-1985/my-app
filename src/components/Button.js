import React from "react";
import "./button.css";

export default function Button({ innerText, className }) {
  return <button className={className}>{innerText}</button>; //bei element erstellung darauf achte das das HTML elemnt kleingeschrieben wird
}
