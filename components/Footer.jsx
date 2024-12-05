import Image from "next/image";
import GITHUB from "../public/images/github.webp";
import LINKEDIN from "../public/images/linkedin.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_text">
        <p>N&apos;hésitez pas à consulter mes profils Github et LinkedIn : </p>
      </div>
      <div className="footer_img">
        <a
          href="https://github.com/JulienneH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GITHUB} alt="lien repo github" className="footer_logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/juliennehattabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={LINKEDIN}
            alt="lien compte linkedin"
            className="footer_logo"
          />
        </a>
        <a
          href="https://julienneh.github.io/Portfolio/cvHattabiJulienne.pdf"
          download
          className="footer_cv"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
};

export default Footer;
