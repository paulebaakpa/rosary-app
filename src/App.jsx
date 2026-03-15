import { useState } from "react";
import "./App.css";

const mysteries = {
  Joyful: [
    "The Annunciation",
    "The Visitation",
    "The Nativity",
    "The Presentation",
    "The Finding in the Temple",
  ],
  Sorrowful: [
    "The Agony in the Garden",
    "The Scourging at the Pillar",
    "The Crowning with Thorns",
    "The Carrying of the Cross",
    "The Crucifixion",
  ],
  Glorious: [
    "The Resurrection",
    "The Ascension",
    "The Descent of the Holy Spirit",
    "The Assumption",
    "The Coronation of Mary",
  ],
};

export default function App() {
  const [mystery, setMystery] = useState("Joyful");
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>📿 Rosary Prayer App</h1>

      <img
        src="/src/assets/hero.png"
        alt="Rosary"
        className="rosary-image"
      />

      <h2>Select Mystery</h2>

      <div className="buttons">
        {Object.keys(mysteries).map((m) => (
          <button key={m} onClick={() => setMystery(m)}>
            {m}
          </button>
        ))}
      </div>

      <h3>{mystery} Mysteries</h3>

      <ul>
        {mysteries[mystery].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Hail Mary Counter</h2>

      <div className="counter">
        <button onClick={() => setCount(count + 1)}>Pray Hail Mary</button>
        <p>{count}</p>
      </div>
    </div>
  );
}