import React from "react";
import styles from "./NavigationBar.module.scss";
import profileImage from "../../assets/images/my.jpg"; // 이 경로를 실제 이미지 경로로 수정하세요

const NavigationBar = ({ currentSection }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <p className={styles.profileImage} >
        <img src={profileImage} alt="프로필"/>

        </p>
        <span className={styles.logoText}>SANGHUN</span>
      </div>
      <ul>
      <li
        className={`${styles.navia} ${
          currentSection === 0 ? styles.active : ""
        }`}
      >
        Intro
      </li>
      <li
        className={`${styles.navia} ${
          currentSection === 1 ? styles.active : ""
        }`}
      >
        OverView
      </li>
      <li
        className={`${styles.navia} ${
          currentSection === 2 ? styles.active : ""
        }`}
      >
        Skill
      </li>
      <li
        className={`${styles.navia} ${
          currentSection === 3 ? styles.active : ""
        }`}
      >
        Project
      </li>
      <li
        className={`${styles.navia} ${
          currentSection === 4 ? styles.active : ""
        }`}
      >
        Education
      </li>
      </ul>
     
    </nav>
  );
};

export default NavigationBar;
