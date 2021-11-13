import React from "react";
import "./TodayPage.css";
import Card from "./Card";

function Today() {
  return (
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
        <img
          src="https://cdn-icons-png.flaticon.com/512/711/711239.png"
          alt="loading"
        />
        <p>That's all for today!</p>
        <h2>Come back tomorrow for more inspiration</h2>
        <button>Go to home feed</button>
      </div>
    </div>
  );
}

export default Today;
