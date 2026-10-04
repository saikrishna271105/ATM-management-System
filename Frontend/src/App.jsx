import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Components/AuthComponents/Login.jsx";
import UserDashBoard from "./Components/DashBoards/UserDashBoard.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/api/auth/profile", {
          withCredentials: true,
        });

        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <h2>Checking authentication...</h2>;
  }

  return isAuthenticated ? (
    <UserDashBoard onLogout={() => setIsAuthenticated(false)} />
  ) : (
    <Login onLogin={() => setIsAuthenticated(true)} />
  );
};

export default App;
