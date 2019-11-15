import React from "react";
import "./RandomImage.css";

const images = ["vineyard", "vine", "wine", "grape"];

function RandomImage() {
  const [one, two, three, four] = images.map(i =>
    Math.floor(Math.random() * Math.floor(i.length))
  );
  return (
    <div className="RandomImage">
        <img
          className="RandomImage__image"
          src={`https://source.unsplash.com/600x400/?${images[one]},${images[two]},${images[three]},${images[four]}`}
          alt="images random"
        />
    </div>
  );
}

export default RandomImage;
