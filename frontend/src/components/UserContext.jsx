import React, { createContext, useContext, useState } from 'react';

// Create a context to hold user authentication status
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial state, user is not logged in

  // Function to login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
