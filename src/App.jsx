import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import FooterSection from "./FooterSection/FooterSection";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <main className="bg-white w-full h-full overflow-x-hidden">
        <HeroSection />
        <FirstSection />
        <SecondSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
