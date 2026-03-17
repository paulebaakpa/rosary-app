import React, { useState } from "react";


export default function DivineMercyReminder() {
  const [enabled, setEnabled] = useState(false);

  function enableNotifications() {
    // Check for notification permission
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          setEnabled(true);
          alert("✅ Divine Mercy Reminder enabled! You will get a 3 PM notification.");
        } else {
          alert("⚠️ Notification permission denied.");
        }
      });
    }
  }

  return (
    <div className="divine-reminder-container">
      {!enabled ? (
        <button
          className="enable-reminder-btn"
          onClick={enableNotifications}
        >
          Enable 3 PM Divine Mercy Reminder 🔔
        </button>
      ) : (
        <p className="reminder-enabled-text">
          ✅ Divine Mercy Reminder is active
        </p>
      )}
    </div>
  );
}