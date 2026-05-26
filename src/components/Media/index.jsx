import React from "react";
import MediaCard from '../MediaCard';
import { mediaData } from "./mediaData.js";
import "./styles.css";

const Media = () => {
  return (
    <div className="container">
      <header className="page-header">
        <div className="page-subtitle">GALLERY</div>
        <h1 className="page-title">Media Gallery</h1>
      </header>

      <div className="media-grid">
        {mediaData.map((media, index) => (
          <MediaCard key={index} data={media} />
        ))}
      </div>
    </div>
  );
};

export default Media;
