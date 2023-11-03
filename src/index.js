import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home.1";
import Cadastro from "./pages/cadastro/cadastro";
import Editar from "./pages/editar/editar";
import reportWebVitals from "./reportWebVitals";
// import Test from "./pages/teste";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" index={true} element={<Home />} />
        <Route path="/cadastro" children={true} element={<Cadastro />} />
        <Route
          path="/editar"
          children={true}
          element={<Editar />}
        />
        {/* <Route path="/test" children={true} element={<Test />} /> */}
        <Route path="/notFound" element={<noFound />} />
        <Route
          path="*"
          errorElement={true}
          element={<Navigate to="/notFound" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
