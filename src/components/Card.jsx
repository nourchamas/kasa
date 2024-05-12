import React from "react";
import { Link } from "react-router-dom";
import "../assets/card.scss";

export default function Card({ card }) {
  return (
    <Link to={`/${card.id}`} className="card">
      <div className="card-content">
        <h3>{card.title}</h3>
      </div>
      <img src={card.cover} alt={card.title} />
    </Link>
  );
}
