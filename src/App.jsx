import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import FooterSection from "./FooterSection/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FirstSection />
        <SecondSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
