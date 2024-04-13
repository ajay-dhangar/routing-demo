import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Profile from "./pages/Dashboard/Profile";
import Settings from "./pages/Dashboard/Settings";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="container">
      <header className="app_header">
        <nav>
          <ul>
            <li>
              <Link to="/">Router App</Link>
              </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path={`/dashboard`} element={<Dashboard />} />
        <Route path={`/dashboard/profile`} element={<Profile />} />
        <Route path={`/dashboard/settings`} element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
