import React from "react";
import "../component_scss/ComparisionRport/ComparisionRaport.css";

const LessThan20perc = ({ roznica }) => {
  return (
    <div
      className="detailInfo"
      style={{ background: "rgba(43, 250, 36, 0.397)", color: "green" }}
    >
      The difference in energy consumption is {roznica.toFixed(2)}% and is
      within tolerance.
    </div>
  );
};

export default LessThan20perc;
