import { BrowserRouter, Routes, Link, Router, Route } from "react-router-dom";
import { AuthProvicer } from "./contexts/Auth";
import { Home } from "./pages/Home/Home";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Register } from "./pages/Register/Register";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvicer>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvicer>
    </BrowserRouter>
  );
}
