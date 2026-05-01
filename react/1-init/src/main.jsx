import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Food from "./Food.jsx";
import Test from "./Test.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Food></Food>
    <Test></Test>
  </StrictMode>
);
