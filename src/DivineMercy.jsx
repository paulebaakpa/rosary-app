// DivineMercy.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import divineImage from "./assets/divinemercy.jpeg"; // make sure image is in assets
import "./App.css";

function DivineMercy() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      {/* Divine Mercy Image */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={divineImage}
          alt="Divine Mercy"
          className="divinemercy" // updated class
        />
      </div>

      <h1 style={{ textAlign: "center", color: "#8b0000", fontFamily: "Georgia, serif", marginBottom: "1rem" }}>
        Divine Mercy Chaplet
      </h1>

      <h3>Sign of the Cross ✝️</h3>

      <h3>Opening Prayer</h3>
      <p>
        You expired, Jesus, but the source of life gushed forth for souls,
        and the ocean of mercy opened up for the whole world...
      </p>

      <h3>Our Father</h3>
      <p>Our Father, who art in heaven...</p>

      <h3>Hail Mary</h3>
      <p>Hail Mary, full of grace...</p>

      <h3>Apostles’ Creed</h3>
      <p>I believe in God, the Father Almighty...</p>

      <h3>On the Large Beads</h3>
      <p>
        Eternal Father, I offer You the Body and Blood, Soul and Divinity
        of Your dearly beloved Son, Our Lord Jesus Christ,
        in atonement for our sins and those of the whole world.
      </p>

      <h3>On the Small Beads (10x)</h3>
      <p>
        For the sake of His sorrowful Passion,
        have mercy on us and on the whole world.
      </p>

      <h3>Concluding Prayer (3x)</h3>
      <p>
        Holy God, Holy Mighty One, Holy Immortal One,
        have mercy on us and on the whole world.
      </p>

      <h3>Closing Prayer</h3>
      <p>
        Eternal God, in whom mercy is endless and the treasury of compassion
        inexhaustible, look kindly upon us...
      </p>

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/">
          <button>⬅ Back to Rosary</button>
        </Link>
      </div>
    </motion.div>
  );
}

export default DivineMercy;