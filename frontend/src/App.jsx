import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ChatbotComponent from "./components/Chatbot";
import AuthPopup from "./components/AuthPopup";
import { UserProvider } from "./components/UserContext"; // Import the UserProvider
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <UserProvider>
      <Router>
        <Navbar setShowPopup={setShowPopup} />
        {showPopup && <AuthPopup closePopup={() => setShowPopup(false)} />}
        <HeroSection />
        <Services />
        <Packages />
        <About />
        <Portfolio /> 
        <Contact />
        <ChatbotComponent />
        <Reviews />
        <Footer />
        <Toaster />
      </Router>
    </UserProvider>
  );
};

export default App;
