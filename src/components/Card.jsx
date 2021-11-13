import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card_bh">
      <div className="card_image_bh">
        <img
          src="https://i.pinimg.com/564x/f7/37/10/f737108876e32beb16554d48dbd882ad.jpg"
          alt="loading"
        />
      </div>

      <div className="card_text_bh">
        <h2>Beginner Tips</h2>
        <h1>Get Back Into A Workout Routine</h1>
      </div>
    </div>
  );
}

export default Card;
