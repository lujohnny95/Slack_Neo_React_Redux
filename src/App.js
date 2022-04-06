import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact>
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
