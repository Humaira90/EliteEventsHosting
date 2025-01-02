import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthPopup from "./AuthPopup";
import UserProfilePopup from "./UserProfilePopup"; // Import the UserProfilePopup component
import { useUser } from "../components/UserContext"; // Import the useUser hook


const Navbar = () => {
  const [show, setShow] = useState(false); // State to toggle the menu visibility
  const [showAuthPopup, setShowAuthPopup] = useState(false); // State for the AuthPopup
  const [showProfilePopup, setShowProfilePopup] = useState(false); // State for the UserProfilePopup

  const { isLoggedIn, logout } = useUser(); // Access user state and logout function

  // Function to close both popups
  const closePopups = () => {
    setShowAuthPopup(false);
    setShowProfilePopup(false);
  };

  return (
    <nav>
      <div className="logo">Elite Events</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="packages-section" spy={true} smooth={true} duration={500}>
            PACKAGES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="portfolio" spy={true} smooth={true} duration={500}>
           PORTFOLIOS
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>

          {/* Profile Link to trigger the Profile Popup */}
          <button
            className="profile-btn"
            onClick={() => {
              setShowProfilePopup(true); // Open profile popup
              setShowAuthPopup(false); // Close AuthPopup if open
            }}
          >
            Profile
          </button>
        </div>

        {/* Login/Logout Button */}
        <button
          className="login-btn"
          onClick={() => {
            if (isLoggedIn) {
              logout(); // Logout user if logged in
            } else {
              setShowAuthPopup(true); // Show the login/signup popup
              setShowProfilePopup(false); // Close profile popup if open
            }
          }}
        >
          {isLoggedIn ? "LOGOUT" : "LOGIN"}
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>

      {/* Render the AuthPopup if showAuthPopup is true */}
      {showAuthPopup && <AuthPopup closePopup={closePopups} />}

      {/* Render the UserProfilePopup if showProfilePopup is true */}
      {showProfilePopup && (
        <UserProfilePopup
          isOpen={showProfilePopup}
          onClose={() => setShowProfilePopup(false)} // Close profile popup from inside
        />
      )}
    </nav>
  );
};

export default Navbar;
