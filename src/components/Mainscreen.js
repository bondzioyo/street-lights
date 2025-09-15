import React from "react";
import "../component_scss/Mainscreen/Mainscreen.css";
import Rightfield from "./Rightfield";
import InputField from "./ui/InputField";
import SelectField from "./ui/SelectField";

const Mainscreen = ({
  setInputPolValue,
  setSelectPolValue,

  setPowerOfLamp,
  inputPolValue,
  selectPolValue,
  setInputNolValue,
  setNumberOfLamp,
  inputNolValue,
  setInputUsedenValue,
  setUsedEnergy,
  inputUsedenValue,
  inputRateValue,
  setInputRateValue,
  selectRateValue,
  setSelectRateValue,
  setRate,
  showForecast,
  showComparison,
  onScrollToReport,
}) => {
  const inputPolValueHandler = (e) => {
    setInputPolValue(e.target.value);
  };

  const selectPolValueHandler = (e) => {
    setSelectPolValue(e.target.value);
  };

  const inputNolValueHandler = (e) => {
    setInputNolValue(e.target.value);
  };

  const inputUsedenValueHandler = (e) => {
    setInputUsedenValue(e.target.value);
  };

  const inputRateValueHandler = (e) => {
    setInputRateValue(e.target.value);
  };

  const selectRateValueHandler = (e) => {
    setSelectRateValue(e.target.value);
  };

  const submitValuesHandler = (e) => {
    e.preventDefault();
    if (Number(inputNolValue) >= 0) {
      setNumberOfLamp(inputNolValue);
    }
    if (Number(inputPolValue) !== 0) {
      setPowerOfLamp(inputPolValue);
    } else if (Number(selectPolValue) !== 0) {
      setPowerOfLamp(selectPolValue);
    }
    if (inputUsedenValue !== "") {
      setUsedEnergy(inputUsedenValue);
    }
    if (Number(inputRateValue) !== 0) {
      setRate(inputRateValue);
    } else if (Number(selectRateValue) !== 0) {
      setRate(selectRateValue);
    }
  };

  const lampOptions = [
    { value: "60", label: "ALC LED 60W" },
    { value: "90", label: "ALC LED 90W" },
    { value: "40", label: "Brd CREE" },
    { value: "50", label: "Bridgelux IP65" },
    { value: "33", label: "Crown Basic LED 5050lm" },
    { value: "62", label: "Crown Basic LED 7800lm" },
    { value: "50", label: "Everon PLUS 100 50W" },
    { value: "60", label: "Everon PLUS 100 60W" },
    { value: "140", label: "Everon PLUS 200 140W" },
    { value: "180", label: "Everon PLUS 200 180W" },
    { value: "30", label: "Kepler LED IP66 30W" },
    { value: "50", label: "Majoris IP65" },
    { value: "150", label: "Malaga SGS102 Son-T150W" },
    { value: "50", label: "MZZ COB Epistar" },
    { value: "100", label: "Selenium SGP340 Son-T100W" },
    { value: "40", label: "Titan IP65" },
    { value: "30", label: "WHL COB Epistar" },
    { value: "106", label: "Urbano LED ED 11750lm" },
    { value: "200", label: "Urbano LED 200W" },
  ];

  const rateOptions = [
    { value: "0.461", label: "Energa" },
    { value: "0.5839", label: "Tauron" },
    { value: "0.4119", label: "Enea" },
    { value: "0.3568", label: "PGE" },
  ];

  return (
    <div>
      <main>
        <div className="leftfield">
          <InputField
            label="Enter fixture power or choose from the list"
            placeholder="Power [W]"
            min="0"
            defaultValue={inputPolValue}
            onChange={inputPolValueHandler}
          />
          <SelectField
            placeholder="Choose"
            defaultValue="0"
            options={lampOptions}
            onChange={selectPolValueHandler}
          />
          <InputField
            label="Enter number of lamps"
            placeholder="Number of lamps"
            min="1"
            value={inputNolValue}
            onChange={inputNolValueHandler}
          />
          <InputField
            label="Enter your energy consumption in kWh"
            placeholder="Consumption [kWh]"
            onChange={inputUsedenValueHandler}
          />
          <InputField
            label="Enter energy rate or choose your provider"
            placeholder="Rate [PLN/kWh]"
            defaultValue={inputRateValue}
            onChange={inputRateValueHandler}
          />
          <SelectField
            placeholder="Choose provider"
            defaultValue={selectRateValue}
            options={rateOptions}
            onChange={selectRateValueHandler}
          />
          <div className="inputarea" style={{ gap: 12 }}>
            <button
              className="findout"
              type="submit"
              onClick={(e) => {
                submitValuesHandler(e);
                onScrollToReport();
              }}
            >
              CHECK →
            </button>
            {showForecast && (
              <button
                className="findout"
                type="button"
                onClick={onScrollToReport}
                style={{ width: "20%" }}
              >
                Forecast
              </button>
            )}
            {showComparison && (
              <button
                className="findout"
                type="button"
                onClick={onScrollToReport}
                style={{ width: "20%" }}
              >
                Comparison
              </button>
            )}
          </div>
        </div>
        <div className="rightfield">
          <Rightfield />
        </div>
      </main>
    </div>
  );
};

export default Mainscreen;
