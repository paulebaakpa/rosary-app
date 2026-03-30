import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Rosary() {
  const [open, setOpen] = useState(null);
  const contentRefs = useRef({});

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  // Set max-height dynamically for smooth transition
  useEffect(() => {
    Object.keys(contentRefs.current).forEach((key) => {
      const el = contentRefs.current[key];
      if (el) {
        el.style.maxHeight = open === key ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [open]);

  const mysteries = [
    {
      key: "joyful",
      icon: "🌸",
      title: "Joyful Mysteries",
      day: "Monday & Saturday",
      items: [
        "The Annunciation|Mary is chosen to be the mother of Jesus.",
        "The Visitation|Elizabeth recognizes Mary as the mother of our Lord.",
        "The Nativity|Jesus is born and laid in a manger.",
        "The Presentation|Jesus is presented in the Temple.",
        "Finding in the Temple|Jesus is found discussing God's laws.",
      ],
    },
    {
      key: "sorrowful",
      icon: "😢",
      title: "Sorrowful Mysteries",
      day: "Tuesday & Friday",
      items: [
        "Agony in the Garden|Jesus prays before His suffering.",
        "Scourging at the Pillar|Jesus is whipped.",
        "Crowning with Thorns|Jesus is mocked.",
        "Carrying the Cross|Jesus carries our sins.",
        "The Crucifixion|Jesus dies to save mankind.",
      ],
    },
    {
      key: "glorious",
      icon: "✨",
      title: "Glorious Mysteries",
      day: "Wednesday & Sunday",
      items: [
        "The Resurrection|Jesus rises from the dead.",
        "The Ascension|Jesus returns to Heaven.",
        "Pentecost|The Holy Spirit descends.",
        "The Assumption|Mary is taken to Heaven.",
        "The Coronation|Mary is crowned Queen.",
      ],
    },
    {
      key: "luminous",
      icon: "🌟",
      title: "Luminous Mysteries",
      day: "Thursday",
      items: [
        "Baptism in the Jordan|God reveals Jesus as His Son.",
        "Wedding at Cana|Jesus performs His first miracle.",
        "Proclamation of the Kingdom|Jesus calls us to repentance.",
        "The Transfiguration|Jesus reveals His glory.",
        "Institution of the Eucharist|Jesus gives His Body and Blood.",
      ],
    },
  ];

  return (
    <div
  className="container"
  style={{
    backgroundImage: `url(${import.meta.env.BASE_URL}sky.jpeg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
    color: "#fff",
  }}
>
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(15, 23, 42, 0.85)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
        <div className="hero-container">
          <h1 className="title">📿 Holy Rosary</h1>
          <p className="intro">
            The Rosary is a meditation on the life of Jesus and Mary.
          </p>
        </div>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/EMFXQA4qXs0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "400px", borderRadius: "12px" }}
          ></iframe>
        </div>

        {mysteries.map((mystery) => (
          <section
            key={mystery.key}
            className="mystery"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h2
              onClick={() => toggle(mystery.key)}
              className={`accordion-title ${
                open === mystery.key ? "active" : ""
              }`}
            >
              {open === mystery.key ? "▼" : "▶"} {mystery.icon} {mystery.title}
            </h2>
            <span className="day">{mystery.day}</span>

            <ul
              ref={(el) => (contentRefs.current[mystery.key] = el)}
              style={{
                overflow: "hidden",
                maxHeight: "0px",
                transition: "max-height 0.5s ease",
              }}
            >
              {mystery.items.map((item, i) => {
                const [title, desc] = item.split("|");
                return (
                  <li key={i}>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <Link to="/">
          <button className="back-btn">⬅ Back Home</button>
        </Link>
      </div>
    </div>
  );
}