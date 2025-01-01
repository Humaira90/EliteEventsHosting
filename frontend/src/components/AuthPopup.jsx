import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebaseConfig"; // Ensure the path is correct
import { useUser } from "../components/UserContext";  // Import the useUser hook

const AuthPopup = ({ closePopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const { login } = useUser();  // Access the login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        login();  // Call login on successful authentication
        alert("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      }
      closePopup(); // Close the popup after successful authentication
    } catch (error) {
      console.error(error.message);
      alert("Authentication failed: " + error.message);
    }
  };

  return (
    <div className="popup" onClick={closePopup}> {/* Close on overlay click */}
      <div className="popup-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside the form */}
        <button className="close-btn" onClick={closePopup}>
          X
        </button>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default AuthPopup;
