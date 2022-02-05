import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar.jsx";

export default function App() {
  return (
    <>
      {/* navbar */}
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" />
          <Route path="/article" />
          <Route path="/portfolio" />
          <Route path="/bbs" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </>
  );
}
