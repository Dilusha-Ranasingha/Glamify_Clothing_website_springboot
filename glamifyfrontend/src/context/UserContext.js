import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Provide the context to the app
export const UserProvider = ({ children }) => {
  // State to manage if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to manage user details
  const [user, setUser] = useState(null);

  // Function to handle user login
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUserContext = () => {
  return useContext(UserContext);
};