import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import './App.css';
import RecommendedVideo from "./RecommendedVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/search/:searchTerm" element={
            <div className="app__page">
              <Sidebar/>
              <SearchPage/>
            </div>
          } />
          <Route exact path="/" element={<div className="app__page">
            <Sidebar/>
            <RecommendedVideo/>
          </div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
