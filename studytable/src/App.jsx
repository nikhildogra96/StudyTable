import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PracticeSession from "./components/PracticeSession";
import PersonalizedAssessment from "./components/PersonalizedAssessment";
import ManagingAcademicLife from "./components/ManagingAcademicLife";
import HowWeCameToThis from "./components/HowWeCameToThis";
import AcademicNeeds from "./components/AcademicNeeds";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="block">
      <Header></Header>
      <HeroSection></HeroSection>
      <PracticeSession></PracticeSession>
      <PersonalizedAssessment></PersonalizedAssessment>
      <ManagingAcademicLife></ManagingAcademicLife>
      <HowWeCameToThis></HowWeCameToThis>
      <AcademicNeeds></AcademicNeeds>
      <Footer></Footer>
    </div>
  );
};

export default App;
