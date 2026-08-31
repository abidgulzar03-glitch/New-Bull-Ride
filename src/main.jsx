import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "icofont/dist/icofont.min.css";
import "aos/dist/aos.css";
import "./index.css";
import AOS from "aos";

import App from "./App.jsx";

AOS.init({
  duration: 1500,
  once: false,       // re-animate every time it enters viewport
  mirror: true,       // also animate when scrolling back UP past it
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);