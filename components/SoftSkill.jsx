import React from "react";
import Image from "next/image";

const SoftSkills = ({ skills }) => {
  return (
    <div className="skills-section">
      <h2 className="section_subtitle">Soft Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <Image src={skill.image} alt={skill.tech} className="skill-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;