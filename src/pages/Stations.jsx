import React, { useState } from "react";
import "../App.css";

const stations = [
  "Jesus is condemned to death",
  "Jesus takes up His cross",
  "Jesus falls the first time",
  "Jesus meets His mother",
  "Simon helps Jesus carry the cross",
  "Veronica wipes the face of Jesus",
  "Jesus falls the second time",
  "Jesus meets the women of Jerusalem",
  "Jesus falls the third time",
  "Jesus is stripped of His garments",
  "Jesus is nailed to the cross",
  "Jesus dies on the cross",
  "Jesus is taken down from the cross",
  "Jesus is laid in the tomb"
];

export default function Stations() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < stations.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="rosary-container">
      
      {/* Header */}
      <img src="/cross.jpeg" alt="Cross" className="header-img" />

      <h2 className="mystery-title">Stations of the Cross</h2>

      <p className="mystery-sub">
        Station {current + 1} of 14
      </p>

      {/* Station Text */}
      <div className="prayer-box">
        <p>{stations[current]}</p>
      </div>

      {/* Progress Dots */}
      <div className="beads">
        {stations.map((_, i) => (
          <span
            key={i}
            className={i === current ? "bead active" : "bead"}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={prev}>◀ Prev</button>
        <button onClick={next}>Next ▶</button>
      </div>
    </div>
  );
}