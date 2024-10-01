import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Project.module.scss";
import gwatingImage from "../../assets/images/gwating.png";
import dockr from "../../assets/images/myAss.png";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "3on3",
      description: "대학생들의 소개팅을 위한 플랫폼",
      image: gwatingImage,
      skills: ["Web design", "Webmaster", "Animator", "Motion design"],
    },
    // 추가 프로젝트...
  ];

  useEffect(() => {
    const container = containerRef.current;
    const projectElements = projectRefs.current;

    ScrollTrigger.create({
      trigger: container,
      start: "center center",
      end: `+=${projects.length * 100}%`,
      pin: true,
      pinSpacing: true,
      markers: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectWrapper}>
        <div className={styles.projectHeader}>
          <h1 className={styles.title}>PROJECT.</h1>
        </div>
        <div className={styles.projectCardContainer} ref={containerRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className={styles.projectInfo}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <ul className={styles.skillsList}>
                  {project.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
                <button className={styles.exploreButton}>Explore</button>
              </div>
              <div className={styles.projectImageWrapper}>
                <div className={styles.projectImageFrame}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
