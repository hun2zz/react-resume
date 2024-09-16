import {
  Fullpage,
  FullpageNavigation,
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import React from "react";
import styles from "./MainPages.module.scss";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";

const MainPages = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Fullpage goto={() => console.log("Hola")}>
        <FullpageNavigation className={styles.navi} />
        <FullPageSections style={{ backgroupColor: "green" }}>
          <FullpageSection className={`${styles.main} ${styles.section1}`}>
            <Intro />
          </FullpageSection>
          <FullpageSection className={styles.main}>
            <h1>Screen 2</h1>
          </FullpageSection>
          <FullpageSection className={styles.main}>
            <h1>Screen 3</h1>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default MainPages;
