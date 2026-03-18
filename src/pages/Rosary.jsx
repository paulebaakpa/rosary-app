import { Link } from "react-router-dom";

export default function Rosary() {
  return (
    <div className="container">

      <h2>📿 Holy Rosary</h2>

      <p>The Rosary is a meditation on the life of Jesus and Mary.</p>
        <h2>Joyful Mystery of the Rosary</h2>
        <ul>
            <li>Monday & Saturday</li>
       
            <li>The Annunciation of the Lord to Mary</li>
                <p>Mary is chosen to be the mother of Jesus.</p>
            <li>The Visitation of Mary to Elizabeth</li>
                <p>Elizabeth recognizes Mary as the mother of our Lord.</p>
                <li>The Nativity of our Lord Jesus Christ</li>
                <p>Jesus is born and laid in a manger.</p>
                <li>The Presentation of our Lord</li>
                <p>Jesus is presented in the Temple of Jerusalem.</p>
                <li>Finding Jesus in the Temple at age 12</li>
                <p>Jesus is found discussing God's laws in the temple.</p>

        
        </ul>
        <h2>Sorrowful Mystery of the Rosary</h2>
        <ul>
          <li>Tuesday & Friday</li>
          <li>The Agony of Jesus in the Garden</li>
          <p>Jesus prays when confronted with the sins of the world.</p>
          <li>The Scourging at the Pillar</li>
          <p>Jesus is whipped before His execution.</p>
          <li>Jesus is Crowned with Thorns</li>
          <p>Jesus is mocked with a painful crown of thorns.</p>
          <li>Jesus Carried the Cross</li>
          <p>Jesus carries the weight of our sins to His crucifixion.</p>
          <li>The Crucifixion of our Lord</li>
          <p>Jesus Christ dies to save all mankind.</p>
          
        </ul>
        <h2>Glorious Mystery of the Rosary</h2>
        <ul>
          <li>Wednesday & Sunday</li>
          <li>The Resurrection of Jesus Christ</li>
          <p>Jesus rises triumphant over death.</p>
          <li>The Ascension of Jesus to Heaven</li>
          <p>As Jesus ascends, He gives us a special task.</p>
          <li>The Descent of the Holy Ghost</li>
          <p>At Pentecost the Church is born.</p>
          <li>The Assumption of Mary into Heaven</li>
          <p>The Virgin Mary is gloriously assumed into heaven.</p>
          <li>Mary is Crowned as Queen of Heaven and Earth</li>
          <p>Mary is honored above all creatures.</p>
        </ul>

        <h2>Luminous Mystery of the Rosary</h2>
        <ul>Thursday</ul>
        <li>The Baptism in the Jordan</li>
        <p>God proclaims Jesus is His Son.</p>
        <li>The Wedding at Cana</li>
        <p>Jesus performs a surprising miracle at a wedding.</p>
        <li>The Proclamation of the Kingdom</li>
        <p>Jesus calls us to do something important.</p>
        <li>The Transfiguration</li>
        <p>Jesus is gloriously transformed.</p>
        <li>The Institution of the Eucharist</li>
        <p>Jesus shares His Body and Blood for our salvation.</p>

      <Link to="/">
        <button>⬅ Back Home</button>
      </Link>

    </div>
  );
}