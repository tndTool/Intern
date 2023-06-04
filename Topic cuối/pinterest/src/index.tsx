import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Profile from "./pages/Profile";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./sass/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
