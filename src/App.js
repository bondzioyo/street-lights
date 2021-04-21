import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
// import logo from "./img/street-light.svg";
import "./App.css";
import Mainscreen from "./components/Mainscreen";
import PredictionRaport from "./components/PredictionRaport";
import ComparisionRaport from "./components/ComparisionRaport";
import { useState } from "react";
// import reactDom from "react-dom";

function App() {
  const [inputPolValue, setInputPolValue] = useState(""); //PolValue - power of lamp value
  const [powerOfLamp, setPowerOfLamp] = useState("");
  const [inputNolValue, setInputNolValue] = useState(""); // NolValue - number of lamp value
  const [numberOfLamp, setNumberOfLamp] = useState("");
  const [inputUsedenValue, setInputUsedenValue] = useState(""); // Useden - used energy
  const [usedEnergy, setUsedEnergy] = useState("");
  // const [numberOfLamp, setNumberOfLamp] = useState("");

  var raport;
  // if ((powerOfLamp !== "" && usedEnergy === "") || usedEnergy === 0) {
  //   predictionRaport = <PredictionRaport powerOfLamp={powerOfLamp} numberOfLamp={numberOfLamp} />;
  // }
  if ( usedEnergy != 0 && powerOfLamp != 0) {
    raport = (
      <ComparisionRaport
        powerOfLamp={powerOfLamp}
        numberOfLamp={numberOfLamp}
        usedEnergy={usedEnergy}
      />
    );
  }
  else if (usedEnergy == 0 && powerOfLamp != 0){
    raport = <PredictionRaport powerOfLamp={powerOfLamp} numberOfLamp={numberOfLamp} />;
  }
  else if (usedEnergy === 0 && powerOfLamp === 0 && numberOfLamp === 0){raport = <div></div>;}

  return (
    <div>
      <Mainscreen
        //Power of lamp
        inputPolValue={inputPolValue}
        setInputPolValue={setInputPolValue}
        setPowerOfLamp={setPowerOfLamp}
        // powerOfLamp={powerOfLamp}
        //Number of lamp
        inputNolValue={inputNolValue}
        setInputNolValue={setInputNolValue}
        setNumberOfLamp={setNumberOfLamp}
        // numberOfLamp={numberOfLamp}
        inputUsedenValue={inputUsedenValue}
        setInputUsedenValue={setInputUsedenValue}
        setUsedEnergy={setUsedEnergy}
      />
      {/* <PredictionRaport powerOfLamp={powerOfLamp} numberOfLamp={numberOfLamp} /> */}
      {/* <ComparisionRaport powerOfLamp={powerOfLamp} numberOfLamp={numberOfLamp} usedEnergy={usedEnergy}/> */}
      {raport}
      {/* {comparisionRaport} */}
    </div>
  );
}

export default App;
