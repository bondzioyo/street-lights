import React from 'react';
import "../component_scss/ComparisionRport/ComparisionRaport.css";

const LessThan20perc= ({roznica}) => {
    return (
    <div className="detailInfo" style={{ background: 'rgba(43, 250, 36, 0.397)', color: 'green' }}>
      Różnica w zużyciu energii wynosi {roznica.toFixed(2)} % i jej wartość mieści się w normie.
    </div>);
  };

  export default LessThan20perc;