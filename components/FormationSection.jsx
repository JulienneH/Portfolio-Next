import Image from "next/image";
import ImageFormation from "../public/images/img-formation.webp";

const FormationSection = () => {
  return (
    <div className="section margin-left " id="parcours">
      <div className="section_text">
        <h1 className="section_title">Formation</h1>
        <h2 className="section_subtitle">Formation Intégratrice-Web</h2>
        <h3 className="formation_subtitle">OPENCLASSROOMS</h3>
        <p className="section_description">
          Durant cette formation, j’ai mené à bien 11 projets professionnels me
          permettant d’acquérir des compétences et connaissances indispensables
          à la création d’un site web de qualité. J’ai également développé un
          sens aigu de l&apos;organisation, amélioré ma capacité à résoudre des
          bugs de manière efficace, et élargi mes axes de travail en apprenant
          d&apos;autres technologies et langages. Ces projets m’ont initiée à la
          gestion de projet, notamment à la planification des étapes de
          développement et à l’utilisation de la méthode AGILE.
        </p>
      </div>
      <Image
        src={ImageFormation}
        alt="Bureau développeur web"
        className="formation_photo section_photo"
        width={500}
        height={300}
      />
    </div>
  );
};

export default FormationSection;
