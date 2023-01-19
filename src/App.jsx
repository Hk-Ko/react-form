import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RouteGuard from "./components/RouteGuard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <Dashboard />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
};

export default App;
