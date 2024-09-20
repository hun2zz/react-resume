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
import Skill from "./Skill";
import Project from "./Project";

const MainPages = () => {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <>
      <NavigationBar currentSection={currentSection}></NavigationBar>
      <ScrollIndicator />
      <Intro />
      <Introduce></Introduce>
      <Skill></Skill>
      <Project />
      <h1>Screen 5</h1>
    </>
  );
};

export default MainPages;
