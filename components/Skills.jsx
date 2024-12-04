"use client";
import React, { useState, useEffect } from "react";
import SoftSkills from "../components/SoftSkill";
import HardSkills from "../components/HardSkill";
import HTML from "../public/images/html.webp";
import CSS from "../public/images/css.webp";
import SASS from "../public/images/sass.webp";
import JS from "../public/images/js.webp";
import REACT from "../public/images/react.webp";
import REDUX from "../public/images/redux.webp";
import NOTION from "../public/images/notion.webp";
import CHATGPT from "../public/images/chat-gpt.webp";
import VSCODE from "../public/images/vscode.webp";
import GIT from "../public/images/git.webp";
import GITHUB from "../public/images/github.webp";
import NPM from "../public/images/npm-yarn.webp";

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Le composant est monté côté client
  }, []);

  if (!mounted) return null; // Evite le rendu prématuré côté serveur

  const hardSkills = [
    { tech: "HTML", image: HTML },
    { tech: "CSS", image: CSS },
    { tech: "SASS", image: SASS },
    { tech: "REACT", image: REACT },
    { tech: "REDUX", image: REDUX },
    { tech: "JS", image: JS },
    { tech: "NPM", image: NPM },
  ];

  const softSkills = [
    { tech: "NOTION", image: NOTION },
    { tech: "CHATGPT", image: CHATGPT },
    { tech: "VSCODE", image: VSCODE },
    { tech: "GIT", image: GIT },
    { tech: "GITHUB", image: GITHUB },
  ];

  return (
    <div className="skills margin-left section_text" id="competences">
      <h1 className="section_title section_title_mobile">
        Mes compétences à votre service
      </h1>
      <p className="section_description">
        Dans l&apos;optique de fournir des solutions à la pointe de
        l&apos;innovation, j&apos;ai mis en place une veille technologique afin
        de rester informée des dernières tendances et évolutions du secteur.
        L&apos;apprentissage continu de nouveaux langages et technologies me
        permet de m&apos;adapter rapidement aux besoins changeants du
        développement web.
      </p>
      <SoftSkills skills={softSkills} />
      <HardSkills skills={hardSkills} />
    </div>
  );
};

export default Skills;
