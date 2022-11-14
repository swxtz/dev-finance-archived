import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Link,
  Router,
  Route,
  Navigate
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Register } from "./pages/Register/Register";
import { PrivateProps } from "./types/AuthTypes";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
