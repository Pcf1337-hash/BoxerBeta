import React, { useState, useEffect } from "react";
import { LoginScreen } from "@/components/AdminPage/LoginScreen";
import { Dashboard } from "@/components/AdminPage/Dashboard/Dashboard";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(sessionStorage.getItem("bh_admin") === "1");
    }
  }, []);

  const handleLogin = () => {
    if (typeof window !== "undefined") sessionStorage.setItem("bh_admin", "1");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") sessionStorage.removeItem("bh_admin");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) return <LoginScreen onLogin={handleLogin} />;
  return <Dashboard onLogout={handleLogout} />;
}
