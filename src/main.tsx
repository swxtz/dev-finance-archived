import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./LandingPage";
import "./css/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
