import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import "modern-normalize";
import "./index.css";
import { App } from "./components/App/App";
import { render } from "react-dom";

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
