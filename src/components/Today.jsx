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
          <img
            src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008958.png?token=exp=1636486324~hmac=b56c533190a8fd1fa91ce59f2acf7b83"
            alt="loading"
          />
          <p>That's all for today!</p>
          <h2>Come back tomorrow for more inspiration</h2>
          <button>Go to home feed</button>
        </div>
      </div>
    </div>
  );
}

export default Today;
