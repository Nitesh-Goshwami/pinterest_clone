import React from "react";
import Footer from "./Footer";
import MiddleSection from "./MiddleSection";
import styles from "./about.module.css";
import TopNav from "./TopNav";

const About = () => {
  return (
    <div className={styles.universalMargin}>
      <div className={styles.main}>
        <TopNav />
        <MiddleSection />
        <Footer />
      </div>
    </div>
  );
};

export default About;
