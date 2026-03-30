import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DivineMercy() {
  const [reminderOn, setReminderOn] = useState(false);

  const enableReminder = () => {
    setReminderOn(true);
    alert("3PM Divine Mercy reminder enabled 🙏");
  };

  return (
    <div className="container">

      <h1 className="title">✝️ Divine Mercy Chaplet</h1>

      <p className="intro">
        The Divine Mercy devotion was revealed to Saint Faustina as a message of
        God's infinite love and forgiveness. It is especially prayed at 3:00 PM,
        the Hour of Mercy.
      </p>

      {/* Reminder */}
      <div className="divine-reminder-container">
        {!reminderOn ? (
          <button className="enable-reminder-btn" onClick={enableReminder}>
            🔔 Enable 3PM Reminder
          </button>
        ) : (
          <p className="reminder-enabled-text">
            🔔 Reminder Enabled for 3PM
          </p>
        )}
      </div>

      {/* Opening Prayer */}
      <div className="prayer-block">
        <h3>Opening Prayer</h3>
        <p>
          You expired, Jesus, but the source of life gushed forth for souls,
          and the ocean of mercy opened up for the whole world.
          O Fount of Life, unfathomable Divine Mercy,
          envelop the whole world and empty Yourself out upon us.
        </p>
      </div>

      {/* Chaplet Steps */}
      <div className="prayer-block">
        <h3>Chaplet of Divine Mercy</h3>

        <p><strong>On the Our Father beads:</strong></p>
        <p>
          Eternal Father, I offer you the Body and Blood, Soul and Divinity
          of Your dearly beloved Son, our Lord Jesus Christ,
          in atonement for our sins and those of the whole world.
        </p>

        <p><strong>On the Hail Mary beads:</strong></p>
        <p>
          For the sake of His sorrowful Passion,
          have mercy on us and on the whole world.
        </p>
      </div>

      {/* Closing Prayer */}
      <div className="prayer-block">
        <h3>Closing Prayer</h3>
        <p>
          Holy God, Holy Mighty One, Holy Immortal One,
          have mercy on us and on the whole world. (Repeat 3 times)
        </p>
      </div>

      {/* 3PM Meaning */}
      <div className="prayer-block">
        <h3>Why 3:00 PM?</h3>
        <p>
          At 3:00 PM, we remember the hour Jesus died on the Cross.
          It is the Hour of Mercy — a time to ask for grace,
          forgiveness, and mercy for the whole world.
        </p>
      </div>

      {/* Intention */}
      <div className="prayer-block">
        <h3>Set Your Intention</h3>
        <select>
          <option>For myself</option>
          <option>For my family</option>
          <option>For the sick</option>
          <option>For the world</option>
        </select>
      </div>

      {/* Back Button */}
      <Link to="/">
        <button className="back-btn">⬅ Back Home</button>
      </Link>

    </div>
  );
}