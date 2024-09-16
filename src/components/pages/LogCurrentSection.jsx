import React, { useContext, useEffect } from "react";
import { FullpageContext } from "@ap.cx/react-fullpage";

const LogCurrentSection = ({ setCurrentSection }) => {
  const { number, count } = useContext(FullpageContext);

  useEffect(() => {
    console.log(`Current section: ${number + 1}`);
    setCurrentSection(number); // 섹션 번호 상태 업데이트
  }, [number, setCurrentSection]);

  return null;
};

export default LogCurrentSection;
