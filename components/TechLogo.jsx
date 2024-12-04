import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// objet de mappage pour associer les noms aux chemins d'accès des images
const techLogos = {
  HTML: "/images/html.webp",
  CSS: "/images/css.webp",
  SASS: "/images/sass.webp",
  JS: "/images/js.webp",
  SWAGGER: "/images/swagger.webp",
  NOTION: "/images/notion.webp",
  REACT: "/images/react.webp",
  NODEJS: "/images/nodejs.webp",
  WAVE: "/images/wave.webp",
  LIGHTHOUSE: "/images/lightouse.webp",
  YARN: "/images/yarn.webp",
  REDUX: "/images/redux.webp",
  GITHUB: "/images/github.webp",
  GIT: "/images/git.webp",
};

const TechLogo = ({ tech }) => {
  const logoSrc = techLogos[tech];

  if (!logoSrc) {
    return null;
  }

  return (
    <Image
      src={logoSrc}
      alt={tech}
      className="skill-image"
      width={40}
      height={40}
    />
  );
};

TechLogo.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default TechLogo;
