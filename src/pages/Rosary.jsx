import { Link } from "react-router-dom";

import "../App.css"; // ✅ 

export default function Rosary() {
  return (
    <div className="container">

      <h1 className="title">📿 Holy Rosary</h1>
      <p className="intro">
        The Rosary is a meditation on the life of Jesus and Mary.
      </p>

      <div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/2zE6cX0cV1E"
    title="Holy Rosary Prayer"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      {/* Joyful */}
      <section className="mystery">
        <h2>Joyful Mysteries</h2>
        <span className="day">Monday & Saturday</span>
        <ul>
          <li><strong>The Annunciation</strong><p>Mary is chosen to be the mother of Jesus.</p></li>
          <li><strong>The Visitation</strong><p>Elizabeth recognizes Mary as the mother of our Lord.</p></li>
          <li><strong>The Nativity</strong><p>Jesus is born and laid in a manger.</p></li>
          <li><strong>The Presentation</strong><p>Jesus is presented in the Temple.</p></li>
          <li><strong>Finding in the Temple</strong><p>Jesus is found discussing God's laws.</p></li>
        </ul>
      </section>

      {/* Sorrowful */}
      <section className="mystery">
        <h2>Sorrowful Mysteries</h2>
        <span className="day">Tuesday & Friday</span>
        <ul>
          <li><strong>Agony in the Garden</strong><p>Jesus prays before His suffering.</p></li>
          <li><strong>Scourging at the Pillar</strong><p>Jesus is whipped.</p></li>
          <li><strong>Crowning with Thorns</strong><p>Jesus is mocked.</p></li>
          <li><strong>Carrying the Cross</strong><p>Jesus carries our sins.</p></li>
          <li><strong>The Crucifixion</strong><p>Jesus dies to save mankind.</p></li>
        </ul>
      </section>

      {/* Glorious */}
      <section className="mystery">
        <h2>Glorious Mysteries</h2>
        <span className="day">Wednesday & Sunday</span>
        <ul>
          <li><strong>The Resurrection</strong><p>Jesus rises from the dead.</p></li>
          <li><strong>The Ascension</strong><p>Jesus returns to Heaven.</p></li>
          <li><strong>Pentecost</strong><p>The Holy Spirit descends.</p></li>
          <li><strong>The Assumption</strong><p>Mary is taken to Heaven.</p></li>
          <li><strong>The Coronation</strong><p>Mary is crowned Queen.</p></li>
        </ul>
      </section>

      {/* Luminous */}
      <section className="mystery">
        <h2>Luminous Mysteries</h2>
        <span className="day">Thursday</span>
        <ul>
          <li><strong>Baptism in the Jordan</strong><p>God reveals Jesus as His Son.</p></li>
          <li><strong>Wedding at Cana</strong><p>Jesus performs His first miracle.</p></li>
          <li><strong>Proclamation of the Kingdom</strong><p>Jesus calls us to repentance.</p></li>
          <li><strong>The Transfiguration</strong><p>Jesus reveals His glory.</p></li>
          <li><strong>Institution of the Eucharist</strong><p>Jesus gives His Body and Blood.</p></li>
        </ul>
      </section>

      <Link to="/">
        <button className="back-btn">⬅ Back Home</button>
      </Link>

    </div>
  );
}