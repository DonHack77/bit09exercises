import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Exercises } from "./Exercises";
import { Introduction } from "./Introduction";
import { Start } from "./Start";

export const Navegation = () => {
  return (
    <BrowserRouter>
      <h1>Example React</h1>
      <hr />
      <nav>
        <Link to="/">Start</Link>
        <Link to="/Introduction">Introduction</Link>
        <Link to="/Exercises">Exercises</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/Introduction" element={<Introduction />}></Route>
        <Route path="/Exercises" element={<Exercises />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
