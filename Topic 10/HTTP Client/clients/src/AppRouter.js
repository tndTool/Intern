import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import Add from "./components/Add";
import Update from "./components/Update";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="create" element={<Add />} />
        <Route path="update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
