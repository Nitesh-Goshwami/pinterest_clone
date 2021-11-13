import React from "react";
import "./TodayPage.css";
import Card from "./Card";
import { Navbar } from "./Navbar";

function Today() {
  return (
    <div>
      <div className="navSignedNew">
        <Navbar />
      </div>
      <div className="heading">
        <div className="date_bh">
          <h3>November 9, 2021</h3>
        </div>
        <div className="title_bh">
          <h1>Stay Inspired</h1>
        </div>
        <div className="card_container_bh">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <h2>November 8, 2021</h2>
        <div className="card_container_bh">
          <Card />
          <Card />
          <Card />
        </div>

        <h2>November 7, 2021</h2>
        <div className="card_container_bh">
          <Card />
          <Card />
          <Card />
        </div>

        <div className="lower_info_bh">
          <svg
            class="gUZ pBj U9O kVc"
            height="30"
            width="30"
            viewBox="0 0 24 24"
            aria-label="End of Today tab feed"
            role="img"
          >
            <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zM6.37 11.61a1.25 1.25 0 0 1 1.76 0l2.37 2.36 5.37-5.35a1.25 1.25 0 0 1 1.76 1.76L10.5 17.5l-4.13-4.13a1.25 1.25 0 0 1 0-1.76z"></path>
          </svg>

          <p>That's all for today!</p>
          <h2>Come back tomorrow for more inspiration</h2>
          <button>Go to home feed</button>
        </div>
      </div>
    </div>
  );
}

export default Today;
