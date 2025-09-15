import "../component_scss/ComparisionRport/ComparisionRaport.css";

const MoreThan20perc = ({ roznica }) => {
  let x = 0;

  const show = (e) => {
    e.preventDefault();
    console.log(x);
    x++;
    if (x > 2) {
    }
  };

  return (
    <div
      className="detailInfo"
      style={{ background: "rgba(248, 66, 66, 0.267)", color: "red" }}
    >
      Your consumption is {roznica.toFixed(2)}% higher than theoretical value
      {<br></br>} <span style={{ fontSize: 50 }}>⚠</span>
      <div className="infotext" onClick={show}>
        i
      </div>
    </div>
  );
};

export default MoreThan20perc;
