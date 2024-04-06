import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute.jsx";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Provider } from 'react-redux'
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <MantineProvider>
      <Router>
        <Navbar />
        <AppRoute />
        <Footer />
      </Router>
    </MantineProvider>
    </Provider>
  </React.StrictMode>
);
