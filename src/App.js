import "./App.css";
import Mainscreen from "./components/Mainscreen";
import PredictionRaport from "./components/PredictionRaport";
import ComparisionRaport from "./components/ComparisionRaport";
import { useRef, useState } from "react";

function App() {
  const [inputPolValue, setInputPolValue] = useState(""); //PolValue - power of lamp value
  const [selectPolValue, setSelectPolValue] = useState(""); //PolValue - power of lamp value
  const [powerOfLamp, setPowerOfLamp] = useState("");
  const [inputNolValue, setInputNolValue] = useState(""); // NolValue - number of lamp value
  const [numberOfLamp, setNumberOfLamp] = useState("");
  const [inputUsedenValue, setInputUsedenValue] = useState(""); // Useden - used energy
  const [usedEnergy, setUsedEnergy] = useState("");
  const [inputRateValue, setInputRateValue] = useState("");
  const [selectRateValue, setSelectRateValue] = useState("");
  const [rate, setRate] = useState("");

  let raport;
  const reportRef = useRef(null);
  const scrollToReport = () => {
    if (reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const numericUsedEnergy = Number(usedEnergy) || 0;
  const numericPower = Number(powerOfLamp) || 0;
  const showComparison = numericUsedEnergy !== 0 && numericPower !== 0;
  const showForecast = numericUsedEnergy === 0 && numericPower !== 0;

  if (numericUsedEnergy !== 0 && numericPower !== 0) {
    raport = (
      <ComparisionRaport
        powerOfLamp={powerOfLamp}
        numberOfLamp={numberOfLamp}
        usedEnergy={usedEnergy}
        rate={rate}
      />
    );
  } else if (numericUsedEnergy === 0 && numericPower !== 0) {
    raport = (
      <PredictionRaport
        powerOfLamp={powerOfLamp}
        numberOfLamp={numberOfLamp}
        rate={rate}
      />
    );
  } else if (
    numericUsedEnergy === 0 &&
    numericPower === 0 &&
    (Number(numberOfLamp) || 0) === 0
  ) {
    raport = <div></div>;
  }

  return (
    <div>
      <Mainscreen
        //Power of lamp
        inputPolValue={inputPolValue}
        selectPolValue={selectPolValue}
        setInputPolValue={setInputPolValue}
        setSelectPolValue={setSelectPolValue}
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
        inputRateValue={inputRateValue}
        setInputRateValue={setInputRateValue}
        selectRateValue={selectRateValue}
        setSelectRateValue={setSelectRateValue}
        setRate={setRate}
        showForecast={showForecast}
        showComparison={showComparison}
        onScrollToReport={scrollToReport}
      />
      <div ref={reportRef}>{raport}</div>
    </div>
  );
}

export default App;
