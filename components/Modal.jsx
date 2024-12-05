"use client";

import React, { useState, useEffect, useRef } from "react";
import TechLogo from "../components/TechLogo";

const Modal = ({ isOpen, isOpening, isClosing, onClose, selectedWork }) => {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef(null); // Référence pour la modale

  useEffect(() => {
    setMounted(true); // S'assure que le code n'est exécuté qu'une fois côté client
  }, []);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Ferme la modale si le clic est à l'extérieur
    }
  };

  if (!mounted || !isOpen || !selectedWork) return null;

  return (
    <div
      className={`modal ${isOpening ? "visible" : ""} ${
        isClosing ? "hidden" : ""
      }`}
      onClick={handleOutsideClick} // Détecte le clic sur la div parent
    >
      <div className="modal_content" ref={modalRef}>
        <button className="close_button" onClick={onClose}>
          X
        </button>
        <h2>{selectedWork.title}</h2>
        <div className="modal_body">
          <div className="modal_left">
            <h3>Description du projet</h3>
            <p className="modal_text">{selectedWork.description}</p>
          </div>
          <div className="modal_right">
            <h3>Technologies utilisées</h3>
            <ul className="modal_tech">
              {selectedWork.techUsed.map((tech, index) => (
                <li key={index}>
                  <TechLogo tech={tech} size="40px" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="modal_footer">
          {selectedWork.github || selectedWork.githubPages ? (
            <>
              {selectedWork.github && (
                <a
                  href={selectedWork.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code sur GitHub
                </a>
              )}
              {selectedWork.githubPages ? (
                <a
                  href={selectedWork.githubPages}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Accéder au site
                </a>
              ) : (
                <p className="modal_backend_notice">
                  Ce site contient une partie Backend. Il n&apos;est donc pas
                  disponible sur Pages. Pour voir le site, clonez le dépôt
                  Github en local et suivez le Readme.
                </p>
              )}
            </>
          ) : (
            <p className="modal_backend_notice modal_project7">
              Ce projet était exclusivement une gestion de projet, sans
              développement de code. L&apos;organisation, la planification et
              l&apos;utilisation d&apos;outils comme Notion ont été les
              principaux aspects de ce travail.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
