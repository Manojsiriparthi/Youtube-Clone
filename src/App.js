import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css';
import RecommendedVideo from "./RecommendedVideo";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
            <div className="app__page">
              <Sidebar />
              <RecommendedVideo />
            </div>
    </div>
  );
}

export default App;
