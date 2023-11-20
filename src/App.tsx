import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Components
import { Navbar } from "./components/Navbar";
//Pages
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={} />
      </Routes>
    </>
  );
}

export default App;
