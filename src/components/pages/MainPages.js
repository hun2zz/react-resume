import {
  Fullpage,
  FullpageNavigation,
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import React from "react";
import styles from "./MainPages.module.scss";

const MainPages = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className={`${styles.main} ${styles.section1}`}>
          <h1>Screen 1</h1>
        </FullpageSection>
        <FullpageSection className={styles.main}>
          <h1>Screen 2</h1>
        </FullpageSection>
        <FullpageSection className={styles.main}>
          <h1>Screen 3</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default MainPages;
