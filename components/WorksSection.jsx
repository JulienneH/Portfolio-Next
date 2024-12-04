"use client";

import React, { useState, useRef, useEffect } from "react";
import CardWorks from "./CardWorks";
import worksData from "../public/works.json";
import Modal from "./Modal";

const WorksSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const modalRef = useRef(null);

  const openModal = (work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
    setTimeout(() => setIsOpening(true), 10);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setIsOpening(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedWork(null);
      setIsClosing(false);
    }, 500);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const works = worksData.map((work) => ({
    ...work,
    imgProject: `/images/${work.imgProject}.webp`, // Construit dynamiquement le chemin de chaque image
  }));

  return (
    <div className="cards_works" id="realisations">
      <h1 className="section_text section_title">Mes travaux</h1>
      <div className="cards">
        {works.map((work) => (
          <CardWorks
            key={work.id}
            title={work.title}
            imgProject={work.imgProject} // Passe seulement le chemin de l'image
            onClick={() => openModal(work)}
          />
        ))}
      </div>
      {selectedWork && (
        <Modal
          isOpen={isModalOpen}
          isOpening={isOpening}
          isClosing={isClosing}
          onClose={handleCloseModal}
          selectedWork={selectedWork}
          modalRef={modalRef}
        />
      )}
    </div>
  );
};

export default WorksSection;
