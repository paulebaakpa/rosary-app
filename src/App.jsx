// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import headerImage from "./assets/virgin-mary.jpeg";
import DivineMercy from "./DivineMercy";

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentBead, setCurrentBead] = useState(0);
  const [mystery, setMystery] = useState("");
  const [expanded, setExpanded] = useState({});

  const allMysteries = {
    Joyful: [
      "The Annunciation",
      "The Visitation",
      "The Nativity",
      "The Presentation",
      "The Finding in the Temple"
    ],
    Sorrowful: [
      "The Agony in the Garden",
      "The Scourging at the Pillar",
      "The Crowning with Thorns",
      "The Carrying of the Cross",
      "The Crucifixion"
    ],
    Glorious: [
      "The Resurrection",
      "The Ascension",
      "The Descent of the Holy Spirit",
      "The Assumption",
      "The Coronation of Mary"
    ],
    Luminous: [
      "The Baptism of Jesus",
      "The Wedding at Cana",
      "The Proclamation of the Kingdom",
      "The Transfiguration",
      "The Institution of the Eucharist"
    ]
  };

  useEffect(() => {
    const today = new Date().getDay();
    const weekdayMysteries = {
      0: "Glorious",
      1: "Joyful",
      2: "Sorrowful",
      3: "Glorious",
      4: "Luminous",
      5: "Sorrowful",
      6: "Joyful"
    };
    setMystery(weekdayMysteries[today]);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleBeadClick = (index) => setCurrentBead(index + 1);
  const resetBeads = () => setCurrentBead(0);
  const toggleAccordion = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>Holy Rosary App</h1>
            <p>Pray. Reflect. Grow closer to God.</p>
          </div>
          <img src={headerImage} alt="Virgin Mary" className="header-avatar" />
        </div>
      </header>

      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Link to="/divine-mercy">
            <button className="nav-button">Divine Mercy Chaplet</button>
          </Link>
        </div>

        <h2>📿 Today's Mystery</h2>
        <p style={{ textAlign: "center", marginBottom: "1rem" }}>
          {mystery} Mysteries
        </p>

        <h2>🟡 Rosary Beads</h2>
        <div className="beads">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`bead ${index < currentBead ? "active" : ""}`}
              onClick={() => handleBeadClick(index)}
            />
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button onClick={resetBeads}>Reset</button>
        </div>

        <h2>🙏 Daily Prayers</h2>
        <ul className="prayer-list">
          <li>Our Father</li>
          <li>Hail Mary</li>
          <li>Glory Be</li>
          <li>Apostles’ Creed</li>
          <li>Fatima Prayer</li>
        </ul>

        <h2>📖 All Mysteries</h2>
        {Object.entries(allMysteries).map(([key, list]) => (
          <div key={key} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(key)}
            >
              <h3>{key} Mysteries</h3>
              <span>{expanded[key] ? "−" : "+"}</span>
            </div>
            {expanded[key] && (
              <ul className="prayer-list accordion-body">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="toggle-container">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            id="darkModeToggle"
          />
          <label htmlFor="darkModeToggle">🌙 Dark Mode</label>
        </div>
      </div>

      <footer>
        ✝️ Built with devotion • Holy Rosary Meditation App
      </footer>
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/divine-mercy" element={<DivineMercy />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;