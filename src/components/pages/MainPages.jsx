import React, { useState, useEffect } from "react";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import Intro from "./Intro";
import NavigationBar from "./NavigationBar";
import ScrollIndicator from "./ScrollIndicator";
import Introduce from "./Introduce";
import Skill from "./Skill";
import Project from "./Project";

const MainPages = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <ScrollIndicator />

      <Element name="intro" className="element">
        <Intro />
      </Element>

      <Element name="introduce" className="element">
        <Introduce />
      </Element>

      <Element name="skill" className="element">
        <Skill />
      </Element>

      <Element name="project" className="element">
        <Project />
      </Element>

      <Element name="screen5" className="element">
        <h1>Screen 5</h1>
      </Element>
    </>
  );
};

export default MainPages;
