// React import
import React, { useState } from "react";

// Router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./App.css";

// Main components
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import FooterSection from "./FooterSection/FooterSection";

// Mobile menu
import MobileAppArticle from "./Navbar/MobileAppArticle";

// Auth pages
import LoginPage from "./Navbar/NavPages/LoginPage/LoginPage";
import SignUpPage from "./Navbar/NavPages/SignUpPage/SignUpPage";

// Context
import userContext from "./contextAPI/Context";

// Article pages
import Webdesign from "./Navbar/NavPages/ArticlePages/WebsiteDesign/Webdesign";
import EmailDesign from "./Navbar/NavPages/ArticlePages/EmailDesign/EmailDesign";
import WebsiteExamples from "./Navbar/NavPages/ArticlePages/WebsiteExamples/WebsiteExamples";

// Product page
import Product from "./Navbar/ProductPage/Product";

// User settings
import SettingPage from "./Navbar/NavPages/LoginPage/SettingPages/SettingPage";
import PrivacyPage from "./Navbar/NavPages/LoginPage/PrivacyPages/PrivacyPage";

function App() {
  // Navbar open/close state
  const [open, setOpen] = useState(false);

  // Login form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <userContext.Provider value={{ formData, setFormData }}>
      <BrowserRouter>
        <div className="appSection w-full h-full">
          {/* Navbar */}
          <Navbar open={open} setOpen={setOpen} />

          {/* Mobile Article Menu */}
          <MobileAppArticle open={open} setOpen={setOpen} />

          {/* All Routes */}
          <Routes>
            {/* Login & Signup */}
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/signuppage" element={<SignUpPage />} />

            {/* Articles */}
            <Route path="/website-design" element={<Webdesign />} />
            <Route path="/email-design" element={<EmailDesign />} />
            <Route path="/website-examples" element={<WebsiteExamples />} />

            {/* Product */}
            <Route path="/product" element={<Product />} />

            {/* User Settings */}
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* Home Page */}
            <Route
              path="/"
              element={
                <main className="bg-white w-full h-full overflow-x-hidden">
                  <HeroSection />
                  <FirstSection />
                  <SecondSection />
                </main>
              }
            />
          </Routes>

          {/* Footer */}
          <FooterSection />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
