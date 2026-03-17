import { Link } from "react-router-dom";

export default function Rosary() {
  return (
    <div className="container">

      <h2>📿 Holy Rosary</h2>

      <p>The Rosary is a meditation on the life of Jesus and Mary.</p>

      <Link to="/">
        <button>⬅ Back Home</button>
      </Link>

    </div>
  );
}