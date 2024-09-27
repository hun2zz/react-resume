import React from "react";
import styles from "./NavigationBar.module.scss";
import profileImage from "../../assets/images/my.jpg";

const NavigationBar = ({
  currentSection,
  isYellowBackground,
  scrollInstance,
}) => {
  const navItems = [
    { name: "Intro", to: "intro" },
    { name: "Overview", to: "introduce" },
    { name: "Skill", to: "skill" },
    { name: "Project", to: "project" },
    { name: "Education", to: "education" },
  ];

  const handleNavigation = (id) => {
    console.log(id);

    if (scrollInstance) {
      // locomotive-scroll의 scrollTo 메서드를 사용하여 스크롤 이동
      scrollInstance.scrollTo(`#${id}`, {
        offset: 0,
        duration: 500, // 스크롤 이동 시간
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    }
  };

  return (
    <nav
      className={
        isYellowBackground
          ? `${styles.navbar} ${styles.lightSection}`
          : `${styles.navbar}`
      }
    >
      <div className={styles.logoContainer}>
        <p className={styles.profileImage}>
          <img src={profileImage} alt="프로필" />
        </p>
        <span className={styles.logoText}>SANGHUN</span>
      </div>
      <ul>
        {navItems.map((item) => (
          <li
            key={item.to}
            className={`${styles.navia} ${
              currentSection === item.to ? styles.active : ""
            }`}
            onClick={() => handleNavigation(item.to)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
