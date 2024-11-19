// Création de la page Accommodation
import { useParams } from "react-router-dom";
import FullCard from "../../components/FullCard";
import React from "react";

function Accommodation() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
      <FullCard />
    </div>
  );
}
export default Accommodation;
