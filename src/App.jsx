import { useState } from "react";
import topImage from "./assets/virgin-mary.jpeg"; 

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
    if (decade > 5) return;
    if (count < 9) {
      setCount(count + 1);
    } else {
      if (decade < 5) {
        setCount(0);
        setDecade(decade + 1);
      } else {
        setCount(9);
      }
    }
  };

  const handleReset = () => {
    setCount(0);
    setDecade(1);
  };

  const totalBeads = 50;
  const currentBead = (decade - 1) * 10 + (count + 1);
  const progressPercent = (currentBead / totalBeads) * 100;

  return (
    <div className="container">

    <img
  src={topImage}
  alt="Rosary Banner"
  style={{
    width: "200px",
    height: "200px",
    borderRadius: "50%",            // circular
    objectFit: "cover",
    display: "block",
    margin: "20px auto",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    border: "3px solid gold",
    transition: "transform 0.3s, box-shadow 0.3s", // smooth transition
    cursor: "pointer"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.1)"; // slightly bigger
    e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,215,0,0.7)"; // glowing gold
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";  // back to normal
    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)"; // original shadow
  }}
/>

      <h1>Rosary Prayer App 🙏🏽</h1>

      {/* Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSection("rosary")}>Rosary</button>
        <button onClick={() => setSection("daily")}>Daily Prayers</button>
        <button onClick={() => setSection("mercy")}>Divine Mercy</button>
        <button onClick={() => setSection("bible")}>Bible</button>
      </div>

      {/* ROSARY SECTION */}
      {section === "rosary" && (
        <>
          <h3>Select Mystery:</h3>
          <select value={mystery} onChange={(e) => setMystery(e.target.value)}>
            <option>Joyful</option>
            <option>Sorrowful</option>
            <option>Glorious</option>
            <option>Luminous</option>
          </select>

          <h2>{mystery} Mystery</h2>
          <h2>Decade: {decade} / 5</h2>
          <h2>Hail Mary: {count + 1} / 10</h2>

          <h3>Prayer for this Decade:</h3>
          <p>{prayers[mystery][decade - 1]}</p>

          <button onClick={handlePray}>Pray Hail Mary</button>
          <br /><br />
          <button onClick={handleReset}>Reset Rosary</button>

          {decade === 5 && count === 9 && (
            <h2>🎉 You completed the Rosary!</h2>
          )}

          <div style={{
            marginTop: "30px",
            height: "20px",
            width: "100%",
            backgroundColor: "#ddd",
            borderRadius: "10px"
          }}>
            <div style={{
              height: "100%",
              width: `${progressPercent}%`,
              backgroundColor: "gold",
              borderRadius: "10px",
              transition: "width 0.3s"
            }} />
          </div>
          <p>{Math.round(progressPercent)}% completed</p>
        </>
      )}

      {/* DAILY PRAYERS SECTION */}
      {section === "daily" && (
        <>
          <h2>Daily Prayers</h2>
          <p>Our Father, who art in heaven, hallowed be thy name...</p>
          <p>Hail Mary, full of grace, the Lord is with thee...</p>
        </>
      )}

      {/* DIVINE MERCY SECTION */}
      {section === "mercy" && (
        <>
          <h2>Divine Mercy Chaplet</h2>
          <p>Eternal Father, I offer you the Body and Blood...</p>
        </>
      )}

      {/* BIBLE SECTION */}
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