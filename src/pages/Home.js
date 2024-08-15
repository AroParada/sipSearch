import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "../pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
