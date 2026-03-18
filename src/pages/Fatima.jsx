import { useState } from "react";
import "./FatimaPrayer.css";
import rose from "../assets/rose.jpeg";

export default function FatimaPrayer() {
  const [playing, setPlaying] = useState(false);
  const [intention, setIntention] = useState("All souls");

  const playAudio = () => {
    const audio = new Audio("/fatima.mp3"); // place file in /public
    audio.play();
    setPlaying(true);

    audio.onended = () => setPlaying(false);
  };

  return (
    <div className="fatima-container">

       <img src={rose} alt="Rose" className="prayer-rose" />

      <h2>🙏 Fatima Prayer</h2>

      {/* Intention */}
      <div className="intention">
        <label>Offer this prayer for:</label>
        <select onChange={(e) => setIntention(e.target.value)}>
          <option>All souls</option>
          <option>Sinners</option>
          <option>The sick</option>
          <option>Family</option>
          <option>Souls in purgatory</option>
        </select>
      </div>

      {/* Prayer */}
      <p className="prayer-text">
        O my Jesus, forgive us our sins, save us from the fires of hell,
        lead all souls to Heaven, especially those in most need of Thy mercy.
      </p>

      {/* Audio */}
      <button onClick={playAudio} className="audio-btn">
        {playing ? "🔊 Playing..." : "▶ Play Prayer"}
      </button>

      {/* Reflection */}
      <div className="reflection">
        <h4>🧠 Reflection</h4>
        <p>
          Lord, help me turn away from sin and be an instrument of Your mercy today.
        </p>
      </div>

      {/* Scripture */}
      <div className="scripture">
        <h4>📖 Scripture</h4>
        <p>
          “God desires all men to be saved and to come to the knowledge of the truth.”
          — 1 Timothy 2:4
        </p>
      </div>

      {/* Silent pause */}
      <div className="silence">
        <p>🕯️ Take a moment of silence...</p>
      </div>

      {/* Action */}
      <div className="action">
        <p>
          ❤️ Today’s act: Show mercy by forgiving someone or helping someone in need.
        </p>
      </div>

    </div>
  );
}