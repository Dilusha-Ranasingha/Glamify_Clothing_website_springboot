import React, { createContext, useState, useContext } from "react";

// Create the context
const UserContext = createContext();

// Provide the context to the app
export const UserProvider = ({ children }) => {
  // State to manage if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to manage user details
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "password123", // Example password
  });

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user context
export const useUserContext = () => {
  return useContext(UserContext);
};