import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Page d'Accueil 🏠</p>
      <Link to="/about">A propos</Link>
    </div>
  );
}
export default Home;
