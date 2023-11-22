// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a context provider component
export function UserDataProvider({ children }) {
  const [user, setUserData] = useState([{
    userId: "rahul123",
    name: "rahul",
    duration: "1",
    pending: 200,
    books: []
  }]);

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for consuming the context
export function useUserContext() {
  return useContext(UserContext);
}
