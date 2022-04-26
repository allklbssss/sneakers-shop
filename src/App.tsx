import React from "react";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SalesPage } from "./pages/SalesPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SalesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
