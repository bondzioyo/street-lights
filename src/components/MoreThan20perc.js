import React from 'react';
import "../component_scss/ComparisionRport/ComparisionRaport.css";
import InfoBaner from './InfoBaner';
// import InfoBaner from './InfoBaner';

const MoreThan20perc= ({roznica}) => {
    var x=0;
    var jeb;
    jeb = <div></div>;

const show = (e) => {
    e.preventDefault();
    console.log(x)
    x++;
    if (x>2){}
}



    return (
    <div className="detailInfo" style={{ background: 'rgba(248, 66, 66, 0.267)', color: 'red' }}>
      Twoje zużycie jest o {roznica.toFixed(2)} % większe niz jego teoretyczna
      wartość {<br></br>} <span style={{ fontSize: 50 }}>⚠</span>
      {/* <InfoBaner x={x}/> */}
      <div className="infotext" onClick={show}>i</div> 
    </div>);
  };

  export default MoreThan20perc;