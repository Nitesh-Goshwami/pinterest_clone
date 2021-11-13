import React from "react";
import styles from "./about.module.css";
import { useHistory } from "react-router-dom";

const MiddleSection = () => {
  const history = useHistory();
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>When it comes to a great idea, you know it when you see it.</h1>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Join Pinterest
        </button>
      </div>
    </div>
  );
};

export default MiddleSection;
