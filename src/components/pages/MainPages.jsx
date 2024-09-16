import {
  Fullpage,
  FullpageCount,
  FullpageNavigation,
  FullpageNumber,
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import React, { useState } from "react";
import styles from "./MainPages.module.scss";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import ScrollIndicator from "./ScrollIndicator";
import Introduce from "./Introduce";
import LogCurrentSection from "./LogCurrentSection";

const MainPages = () => {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <>
      <NavigationBar currentSection={currentSection}></NavigationBar>
      <ScrollIndicator />
      <Fullpage>
        <LogCurrentSection setCurrentSection={setCurrentSection} />
        <FullpageNavigation className={styles.navi} />
        <FullPageSections>
          <FullpageSection className={`${styles.main} ${styles.section1}`}>
            <Intro />
          </FullpageSection>
          <FullpageSection className={styles.main}>
            <Introduce></Introduce>
          </FullpageSection>
          <FullpageSection className={styles.main}>
            <h1>Screen 3</h1>
          </FullpageSection>
          <FullpageSection className={styles.main}>
            <h1>Screen 4</h1>
          </FullpageSection>
          <FullpageSection className={styles.main}>
            <h1>Screen 5</h1>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default MainPages;
