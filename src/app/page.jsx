import React from "react";
import PresentationPage from "../../components/PresentationPage";
import Navigation from "../../components/Navigation";
import FormationSection from "../../components/FormationSection";
import WorksSection from "../../components/WorksSection";
import Skills from "../../components/Skills";
import FormContact from "../../components/FormContact";
import Footer from "../../components/Footer";
import "../../styles/main.scss";

const SinglePage = () => {
  return (
    <div>
      <Navigation />

      <div className="presentation_page">
        <PresentationPage />
      </div>

      <FormationSection />

      <WorksSection />

      <Skills />

      <FormContact />

      <Footer />
    </div>
  );
};

export default SinglePage;
