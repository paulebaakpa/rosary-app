import { useState, useEffect } from "react";
import "./App.css";
import rosaryImage from "./assets/virginmary.jpeg";
import joyful from "./assets/blackman.jpeg";
import sorrowful from "./assets/Agony.jpeg";
import glorious from "./assets/Amen.jpeg";
import luminous from "./assets/bible.jpeg";
import divineMercyImg from "./assets/images-7.jpeg";
import fatimaImg from "./assets/fatima.jpeg";
import bibleImg from "./assets/book.jpeg";

// Rosary Mysteries
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

// Rosary Prayers
const prayers = {
  apostlesCreed: `I believe in God, the Father Almighty, Creator of heaven and earth…`,
  ourFather: `Our Father, who art in heaven, hallowed be thy name…`,
  hailMary: `Hail Mary, full of grace, the Lord is with thee…`,
  gloryBe: `Glory be to the Father, and to the Son, and to the Holy Spirit…`,
  fatima: `O my Jesus, forgive us our sins, save us from the fires of hell…`,
  divineMercy: `For the sake of His sorrowful Passion, have mercy on us and on the whole world.`,
};

export default function App() {
  const [section, setSection] = useState("rosary");
  const [mystery, setMystery] = useState("Joyful");
  const [hailCount, setHailCount] = useState(0);
  const [mercyCount, setMercyCount] = useState(0);
  const [dailyReading, setDailyReading] = useState({ title: "", text: "" });

  // Fetch Daily Bible Reading (example: John 3:16)
  useEffect(() => {
    fetch("https://bible-api.com/john%203:16")
      .then((res) => res.json())
      .then((data) =>
        setDailyReading({ title: data.reference, text: data.text })
      )
      .catch(() =>
        setDailyReading({
          title: "Daily Reading",
          text: "Unable to fetch reading today.",
        })
      );
  }, []);

  // Divine Mercy 3PM Notification
  useEffect(() => {
    const now = new Date();
    const threePM = new Date();
    threePM.setHours(15, 0, 0, 0);
    const delay = threePM.getTime() - now.getTime();

    if (delay > 0 && "Notification" in window) {
      setTimeout(() => {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("🙏 Divine Mercy Reminder", {
              body: "It’s 3 PM! Time to pray the Divine Mercy Chaplet.",
            });
          }
        });
      }, delay);
    }
  }, []);

  return (
    <div className="container">
      <h1>📿 Catholic Prayer Companion</h1>

      {/* Top Rosary Image */}
      <img src={rosaryImage} alt="Holy Rosary" className="rosary-image" />


      {/* Prayer Sections */}

      <div className="cards">
      <div className="prayer-card">
  <img src={maryImg} alt="Virgin Mary" />
  <h3>Rosary</h3>
</div>

<div className="prayer-card">
  <img src={fatimaImg} alt="Fatima Prayer" />
  <h3>Fatima Prayer</h3>
</div>

<div className="prayer-card">
  <img src={bibleImg} alt="Daily Reading" />
  <h3>Daily Reading</h3>
</div>

<div className="prayer-card">
  <img src={mercyImg} alt="Divine Mercy" />
  <h3>Divine Mercy</h3>
</div>

<div className="prayer-card">
  <img src={agonyImg} alt="Agony Prayer" />
  <h3>Agony Prayer</h3>
</div>
</div>
    

      {/* ROSARY SECTION */}
      {section === "rosary" && (
        <>
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

          <h2>Prayers</h2>
          <p><strong>Apostles Creed:</strong> {prayers.apostlesCreed}</p>
          <p><strong>Our Father:</strong> {prayers.ourFather}</p>
          <p><strong>Hail Mary:</strong> {prayers.hailMary}</p>
          <p><strong>Glory Be:</strong> {prayers.gloryBe}</p>
          <p><strong>Fatima Prayer:</strong> {prayers.fatima}</p>

          <h2>Hail Mary Counter</h2>
          <div className="counter">
            <button onClick={() => setHailCount(hailCount + 1)}>
              Pray Hail Mary
            </button>
            <p>{hailCount}</p>
          </div>
        </>
      )}

      {/* DIVINE MERCY */}
      {section === "divine" && (
        <>
          <h2>✝️ Divine Mercy Chaplet</h2>
          <p>{prayers.divineMercy}</p>
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
          <p>{prayers.fatima}</p>
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