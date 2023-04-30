import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:id" element={<Detail></Detail>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
