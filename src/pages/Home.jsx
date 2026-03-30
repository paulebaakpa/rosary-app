import { Link } from "react-router-dom";

import rosaryImage from "../assets/Amen.jpeg";;
import maryImg from "../assets/virginmary.jpeg";
import fatimaImg from "../assets/fatima.jpeg";
import bibleImg from "../assets/bible.jpeg";
import mercyImg from "../assets/images-7.jpeg";
import agonyImg from "../assets/Agony.jpeg";

export default function Home() {
  return (
    <div className="container">

      <h1>📿 Catholic Prayer Companion</h1>

      <img src={rosaryImage} alt="Rosary" className="rosary-image" />

      <div className="cards">

        <Link to="/rosary" className="prayer-card">
          <img src={maryImg} alt="Rosary"/>
          <h3>Rosary</h3>
        </Link>

        <Link to="/fatima" className="prayer-card">
          <img src={fatimaImg} alt="Fatima"/>
          <h3>Fatima Prayer</h3>
        </Link>

        <Link to="/reading" className="prayer-card">
          <img src={bibleImg} alt="Reading"/>
          <h3>Daily Reading</h3>
        </Link>

        <Link to="/divine-mercy" className="prayer-card">
          <img src={mercyImg} alt="Mercy"/>
          <h3>Divine Mercy</h3>
        </Link>

        <Link to="/agony" className="prayer-card">
          <img src={agonyImg} alt="Agony"/>
          <h3>Agony Prayer</h3>
        </Link>

        <Link to="/stations">
          <button>✝️ Stations of the Cross</button>
       </Link>

      </div>

    </div>
  );
}