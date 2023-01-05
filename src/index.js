import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; 
 

import Calendar from "./scenes/calendar/calendar";
import UserLogin from "./components/auth/Login";
import Registration from "./components/Registration";
import Profile from "./Profile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
  </React.StrictMode>
);
