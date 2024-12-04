/* eslint-disable @next/next/no-img-element */
import React from "react";

const CardWorks = ({ title, imgProject, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card_text">
        <h4 className="card_title">{title}</h4>
      </div>
      {/* Affiche l'image avec le chemin passé via imgProject */}
      <img src={imgProject} alt={title} className="card_image" />
    </div>
  );
};

export default CardWorks;
