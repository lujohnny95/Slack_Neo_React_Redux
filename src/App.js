import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Header />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
