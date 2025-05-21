import { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) setIsLoggedIn(true);
  }, []);

  return isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />;
}

export default App;