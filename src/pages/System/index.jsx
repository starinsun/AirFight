import React, { useEffect } from "react";
import { stats } from "../Canvas";

const System = () => {
  useEffect(() => {
    stats.domElement.style.cssText = "display: none";
  }, []);
  return (
    <div>
      123
      <div>1234</div>
    </div>
  );
};
export default System;
