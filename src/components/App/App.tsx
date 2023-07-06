import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
