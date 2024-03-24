import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute.jsx";
import { MantineProvider } from "@mantine/core";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>

    
    <Router>
      <AppRoute />
    </Router>
    </MantineProvider>

  </React.StrictMode>
);
