import React from "react";
import styles from "./Skill.module.scss";

const Skill = () => {
  const skills = [
    {
      category: "BackEnd",
      technologies: [
        "Java",
        "Groovy",
        "NodeJS",
        "Spring Web",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Spring Data JPA",
        "Querydsl",
        "MyBatis",
        "Redis",
        "JWT(JSON Web Token)",
        "WebSocket",
        "Hibernate",
        "Junit4/5",
        "Gradle",
        "Maven",
      ],
    },
    {
      category: "DevOps",
      technologies: [
        "MySQL",
        "MariaDB",
        "GithubAction",
        "AWS RDS",
        "AWS S3",
        "AWS EC2",
        "Docker",
      ],
    },
    {
      category: "FrontEnd",
      technologies: ["JavaScript", "HTML/CSS", "React.js", "SCSS"],
    },
  ];

  return (
    <div className={styles.overviewContainer}>
      <h1 className={styles.title}>Skill.</h1>
      <div className={styles.infoSection}>
        {skills.map((skillCategory, index) => (
          <div key={index} className={styles.column}>
            <h2>{skillCategory.category}</h2>
            <ul className={styles.skillList}>
              {skillCategory.technologies.map((tech, techIndex) => (
                <li key={techIndex} className={styles.skillItem}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
