import React from "react";
import { Link } from "react-scroll";
import styles from "./NavigationBar.module.scss";
import profileImage from "../../assets/images/my.jpg";

const NavigationBar = ({ currentSection }) => {
  const navItems = [
    { name: "Intro", to: "intro" },
    { name: "OverView", to: "introduce" },
    { name: "Skill", to: "skill" },
    { name: "Project", to: "project" },
    { name: "Screen 5", to: "screen5" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <p className={styles.profileImage}>
          <img src={profileImage} alt="프로필" />
        </p>
        <span className={styles.logoText}>SANGHUN</span>
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li key={item.to}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass={styles.active}
              className={styles.navia}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
