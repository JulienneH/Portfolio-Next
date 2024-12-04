"use client";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false); // Ajout d'un état pour vérifier le montage côté client

  useEffect(() => {
    setMounted(true); // Le composant est monté côté client
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Si le composant n'est pas encore monté (côté serveur), ne rien afficher
  if (!mounted) return null;

  return (
    <ul className={`navigation ${showMenu ? "show" : ""}`}>
      <li className="navigation_content">
        <a href="#parcours">Parcours de formation</a>
      </li>
      <li className="navigation_content">
        <a href="#realisations">Mes réalisations</a>
      </li>
      <li className="navigation_content">
        <a href="#competences">Mes compétences</a>
      </li>
      <li className="navigation_content">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;
