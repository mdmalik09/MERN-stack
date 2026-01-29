// In your AuthContext.js file
import React from "react";

const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
isAuthenticated: false
});

export default AuthContext;