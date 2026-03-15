import { useState } from "react";
import rosaryImage from "./assets/images-7.jpeg";
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

const fatimaPrayer = `
O my Jesus, forgive us our sins,
save us from the fires of hell,
lead all souls to heaven,
especially those in most need of Thy mercy.
Amen.
`;

const divineMercy = `
For the sake of His sorrowful Passion,
have mercy on us and on the whole world.
`;

const dailyReading = {
  title: "John 3:16",
  text: "For God so loved the world that He gave His only Son, that whoever believes in Him should not perish but have eternal life."
};

export default function App() {

  const [section, setSection] = useState("rosary");
  const [mystery, setMystery] = useState("Joyful");
  const [count, setCount] = useState(0);
  const [mercyCount, setMercyCount] = useState(0);

  return (
    <div className="container">

      <h1>📿 Catholic Prayer Companion</h1>

      <img
        src="/src/assets/images-7.jpeg"
        alt="Rosary"
        className="rosary-image"
      />

      {/* Navigation */}
      <div className="nav">
        <button onClick={() => setSection("rosary")}>Rosary</button>
        <button onClick={() => setSection("divine")}>Divine Mercy</button>
        <button onClick={() => setSection("fatima")}>Fatima Prayer</button>
        <button onClick={() => setSection("reading")}>Daily Reading</button>
      </div>

     {/* ROSARY SECTION */}
{section === "rosary" && (
  <>
    <img
      src={rosaryImage}
      alt="Holy Rosary"
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
      <button onClick={() => setCount(count + 1)}>
        Pray Hail Mary
      </button>
      <p>{count}</p>
    </div>
  </>
)}

      {/* DIVINE MERCY */}
      {section === "divine" && (
        <>
          <h2>✝️ Divine Mercy Chaplet</h2>

          <p>{divineMercy}</p>

          <div className="counter">
            <button onClick={() => setMercyCount(mercyCount + 1)}>
              Pray Chaplet
            </button>
            <p>{mercyCount}</p>
          </div>
        </>
      )}

      {/* FATIMA PRAYER */}
      {section === "fatima" && (
        <>
          <h2>🌹 Our Lady of Fatima Prayer</h2>

          <p>{fatimaPrayer}</p>
        </>
      )}

      {/* DAILY READING */}
      {section === "reading" && (
        <>
          <h2>📖 Daily Scripture</h2>

          <h3>{dailyReading.title}</h3>
          <p>{dailyReading.text}</p>
        </>
      )}

    </div>
  );
}