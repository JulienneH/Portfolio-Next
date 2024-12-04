import Image from "next/image";
import Photo from "../public/images/PhotoHattabiJulienne.webp";

const PresentationPage = () => {
  return (
    <div className="section">
      <Image
        src={Photo}
        alt="Hattabi Julienne développeuse web front-end"
        className="section_photo presentation_photo"
        width={500}
        height={500}
      />
      <div className="section_text">
        <h1 className="section_title">Julienne HATTABI</h1>
        <h2 className="section_subtitle">Développeuse front-end</h2>
        <p className="section_description">
          Développeuse front-end enthousiaste, je me passionne pour
          l&apos;intégration d&apos;interfaces utilisateur intuitives et
          dynamiques. Curieuse et motivée, j’aime explorer de nouvelles
          technologies pour perfectionner mes compétences et relever de nouveaux
          défis avec passion.
        </p>
      </div>
    </div>
  );
};

export default PresentationPage;
