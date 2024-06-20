import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home.tsx";
import './App.css';
import SiteNotHosted from "./components/SiteNotHosted.tsx";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/gardeners-grove" element={<SiteNotHosted />} />
            <Route path="/catalyst" element={<SiteNotHosted />} />
            <Route path="/beer-predictor" element={<SiteNotHosted />} />
            <Route path="/club-hub" element={<SiteNotHosted />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
