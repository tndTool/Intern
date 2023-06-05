import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Header";
import Home from "./pages/Home";

import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
