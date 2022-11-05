import { BrowserRouter,  Routes, Link, Router, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Register } from "./pages/Register/Register";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}