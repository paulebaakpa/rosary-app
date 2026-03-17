import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rosary from "./pages/Rosary";
import Fatima from "./pages/Fatima";
import DailyReading from "./pages/DailyReading";
import DivineMercyReminder from "./components/DivineMercyReminder";
import Agony from "./pages/Agony";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rosary" element={<Rosary />} />
      <Route path="/fatima" element={<Fatima />} />
      <Route path="/reading" element={<DailyReading />} />
      <Route path="/divine-mercy" element={<DivineMercyReminder />} />
      <Route path="/agony" element={<Agony />} />
    </Routes>
  );
}