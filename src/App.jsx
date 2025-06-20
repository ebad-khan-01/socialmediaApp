import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home.jsx";  // Add './' at the beginning of the path
import Login from "../src/pages/login/Login.jsx";
import Profile from "../src/pages/profile/Profile.jsx";

function App() {
  return (
    <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
