import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Router />
  </HashRouter>
);