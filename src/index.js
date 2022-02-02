import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/Main.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Watch from "./pages/Watch/Watch";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="watch" element={<Watch />} />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
