import { useState } from "react";
import topImage from "./assets/virgin-mary.jpeg";
import "./App.css";

/* Prayer data for each mystery */
const prayers = {
  Joyful: [
    "The Annunciation: Hail Mary...",
    "The Visitation: Hail Mary...",
    "The Nativity: Hail Mary...",
    "The Presentation: Hail Mary...",
    "The Finding of Jesus in the Temple: Hail Mary..."
  ],
  Sorrowful: [
    "The Agony in the Garden: Hail Mary...",
    "The Scourging at the Pillar: Hail Mary...",
    "The Crowning with Thorns: Hail Mary...",
    "The Carrying of the Cross: Hail Mary...",
    "The Crucifixion: Hail Mary..."
  ],
  Glorious: [
    "The Resurrection: Hail Mary...",
    "The Ascension: Hail Mary...",
    "The Descent of the Holy Spirit: Hail Mary...",
    "The Assumption of Mary: Hail Mary...",
    "The Coronation of Mary: Hail Mary..."
  ],
  Luminous: [
    "The Baptism of Jesus: Hail Mary...",
    "The Wedding at Cana: Hail Mary...",
    "The Proclamation of the Kingdom: Hail Mary...",
    "The Transfiguration: Hail Mary...",
    "The Institution of the Eucharist: Hail Mary..."
  ]
};

function App() {
  const [section, setSection] = useState("rosary");
  const [count, setCount] = useState(0);
  const [decade, setDecade] = useState(1);
  const [mystery, setMystery] = useState("Joyful");

  const handlePray = () => {
    if (decade === 5 && count === 9) return;

    if (count < 9) {
      setCount(prev => prev + 1);
    } else {
      setCount(0);
      setDecade(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
    setDecade(1);
  };

  const totalBeads = 50;
  const currentBead = (decade - 1) * 10 + (count + 1);
  const progressPercent = Math.min(
    Math.round((currentBead / totalBeads) * 100),
    100
  );

  return (
    <div className="container">
      <img src={topImage} alt="Rosary Banner" className="top-image" />

      <h1>Rosary Prayer App 🙏🏽</h1>

      {/* Navigation */}
      <div className="nav-buttons">
        <button onClick={() => setSection("rosary")}>Rosary</button>
        <button onClick={() => setSection("daily")}>Daily Prayers</button>
        <button onClick={() => setSection("mercy")}>Divine Mercy</button>
        <button onClick={() => setSection("bible")}>Bible</button>
      </div>

      {/* ROSARY SECTION */}
      {section === "rosary" && (
        <>
          <h3>Select Mystery:</h3>
          <select
            value={mystery}
            onChange={(e) => {
              setMystery(e.target.value);
              handleReset();
            }}
          >
            <option>Joyful</option>
            <option>Sorrowful</option>
            <option>Glorious</option>
            <option>Luminous</option>
          </select>

          <h2>{mystery} Mystery</h2>
          <h3>Decade: {decade} / 5</h3>
          <h3>Hail Mary: {count + 1} / 10</h3>

          <p className="prayer-text">
            {prayers[mystery][decade - 1]}
          </p>

          <button onClick={handlePray}>Pray Hail Mary</button>
          <button onClick={handleReset} className="reset-btn">
            Reset Rosary
          </button>

          {decade === 5 && count === 9 && (
            <h2 className="complete">🎉 You completed the Rosary!</h2>
          )}

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p>{progressPercent}% completed</p>
        </>
      )}

      {/* DAILY PRAYERS */}
      {section === "daily" && (
        <>
          <h2>Daily Prayers</h2>
          <p>Our Father, who art in heaven, hallowed be thy name...</p>
          <p>Hail Mary, full of grace, the Lord is with thee...</p>
        </>
      )}

      {/* DIVINE MERCY */}
      {section === "mercy" && (
        <>
          <h2>Divine Mercy Chaplet</h2>
          <p>Eternal Father, I offer you the Body and Blood...</p>
        </>
      )}

      {/* BIBLE */}
      {section === "bible" && (
        <>
          <h2>Bible Passage</h2>
          <p>John 3:16 — For God so loved the world...</p>
        </>
      )}
    </div>
  );
}

export default App;