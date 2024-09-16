import React from "react";
import styles from "./NavigationBar.module.scss";
import profileImage from "../../assets/images/my.jpg"; // 이 경로를 실제 이미지 경로로 수정하세요

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={profileImage} alt="프로필" className={styles.profileImage} />
        <span className={styles.logoText}>SANGHUN</span>
      </div>
      <div className={styles.navia}>GitHub</div>
      <div className={styles.navia}>Blog</div>
      <div className={styles.navia}>Email</div>
    </nav>
  );
};

export default NavigationBar;
