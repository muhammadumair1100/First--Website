import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import FooterSection from "./FooterSection/FooterSection";
import MobileAppArticle from "./Navbar/MobileAppArticle";
import LoginPage from "./Navbar/NavPages/LoginPage/LoginPage";
import SignUpPage from "./Navbar/NavPages/SignUpPage/SignUpPage";

// Articles
import Webdesign from "./Navbar/NavPages/ArticlePages/WebsiteDesign/Webdesign";
import EmailDesign from "./Navbar/NavPages/ArticlePages/EmailDesign/EmailDesign";
// import WebsiteExamples from "./Navbar/NavPages/ArticlePages/WebsiteExamples/WebsiteExamples";
// import EmailMarketing from "./Navbar/NavPages/ArticlePages/EmailMarketing/EmailMarketing";
// import WebsiteTools from "./Navbar/NavPages/ArticlePages/WebsiteTools/WebsiteTools";
// import Bootstrap from "./Navbar/NavPages/ArticlePages/Bootstrap/Bootstrap";
// import Resources from "./Navbar/NavPages/ArticlePages/Resources/Resources";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="w-full h-full">
        <Navbar open={open} setOpen={setOpen} />
        <MobileAppArticle open={open} setOpen={setOpen} />

        <Routes>
          {/* Login / Signup */}
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signuppage" element={<SignUpPage />} />

          {/* Article Pages */}
          <Route path="/website-design" element={<Webdesign />} />
          <Route path="/email-design" element={<EmailDesign />} />
          {/* <Route path="/website-examples" element={<WebsiteExamples />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/website-tools" element={<WebsiteTools />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/resources" element={<Resources />} /> */}

          {/* Home */}
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

        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
