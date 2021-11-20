import React from "react";
import "../component_scss/Mainscreen/Mainscreen.css";
// import PredictionRaport from "./PredictionRaport";
import Rightfield from "./Rightfield";
// import AwesomeButton from "../react-awesome-button/src/components/AwesomeButton";
// import "../react-awesome-button/dist/themes/theme-amber.css";

var input = false;

const Mainscreen = ({
  setInputPolValue,
  setSelectPolValue,
  // powerOfLamp,
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
  setRate
}) => {

  

  const inputPolValueHandler = (e) => {
    // console.log(e.target.value);
    // input = true;
    // console.log(input)
    setInputPolValue(e.target.value);
  };

  const selectPolValueHandler = (e) => {
    // console.log(e.target.value);
    // input = false;
    // console.log(input)
    // setInputPolValue(e.target.value);
    setSelectPolValue(e.target.value);
    // setInputPolValue(e.target.value);
  };

  const inputNolValueHandler = (e) => {
    setInputNolValue(e.target.value);
  }

  const inputUsedenValueHandler = (e) => {
    setInputUsedenValue(e.target.value);
  }

const inputRateValueHandler = (e) => {
  setInputRateValue(e.target.value);
}

const selectRateValueHandler = (e) => {
  setSelectRateValue(e.target.value);
}

  const submitValuesHandler = (e) => {
    e.preventDefault();
    if(inputNolValue >= 0){
    setNumberOfLamp(inputNolValue);}
    if(inputPolValue != 0){
      setPowerOfLamp(inputPolValue);
    }
    else if(selectPolValue != 0){
      setPowerOfLamp(selectPolValue);
    }
    if(inputUsedenValue!==''){
      setUsedEnergy(inputUsedenValue);
    }
    if(inputRateValue != 0){
      setRate(inputRateValue);
    }
    else if(selectRateValue != 0){
      setRate(selectRateValue);
    }

  };

  return (
    <div>
      <main>
        <div className="leftfield">
          <div className="inputarea">
            <div className="inputdescription">
              Podaj moc oprawy* lub wybierz z listy
            </div>
            <input
              className="inputvalue"
              type="number"
              placeholder="Moc [W]"
              min="0"
              defaultValue={inputPolValue} //polvalue = power of lamp value
              onChange={inputPolValueHandler}
            ></input>
            <select className="inputselect" defaultValue="0" onChange={selectPolValueHandler}>
              <option value="">Wybierz</option>
              <option value="60">ALC LED 60W</option>
              <option value="90">ALC LED 90W</option>
              <option value="40">Brd CREE</option>
              <option value="50">Bridgelux IP65</option>
              <option value="33">Crown Basic LED 5050lm</option>
              <option value="62">Crown Basic LED 7800lm</option>
              <option value="50">Everon PLUS 100 50W</option>
              <option value="60">Everon PLUS 100 60W</option>
              <option value="140">Everon PLUS 200 140W</option>
              <option value="180">Everon PLUS 200 180W</option>
              <option value="30">Kepler LED IP66 30W</option>
              <option value="50">Majoris IP65</option>
              <option value="150">Malaga SGS102 Son-T150W</option>
              <option value="50">MZZ COB Epistar</option>
              <option value="100">Selenium SGP340 Son-T100W</option>
              <option value="40">Titan IP65</option>
              <option value="30">WHL COB Epistar</option>
              <option value="106">Urbano LED ED 11750lm</option>
              <option value="200">Urbano LED 200W</option>
            </select>
          </div>
          <div className="inputarea">
            <div className="inputdescription">Podaj ilość lamp</div>
            <input
              className="inputvalue"
              type="number"
              placeholder="Ilość lamp"
              min="1"
              value={inputNolValue}
              onChange={inputNolValueHandler}
            ></input>
            <div className="inputcheck">
              {/* *Podałem łączną moc dla wszystkich opraw */}
              {/* <input className="checkmark" type="checkbox"></input> */}
            </div>
          </div>
          <div className="inputarea">
            <div className="inputdescription">
              Wprowadź swoje zużycie energii w kWh
            </div>
            <input
              className="inputvalue"
              type="number"
              placeholder="Zużycie [kWh]"
              onChange={inputUsedenValueHandler}
            ></input>
            <div className="inputselect"></div>
          </div>
          <div className="inputarea">
            <div className="inputdescription">
              Wprowadź stawkę za energię lub wybierz sprzedawcę, który działa w
              Twoim regionie
            </div>
            <input
              className="inputvalue"
              type="number"
              placeholder="Stawka [zł/kWh]"
              defaultValue={inputRateValue} 
              onChange={inputRateValueHandler}
            ></input>
            <select className="inputselect" name="Dostawca" defaultValue={selectRateValue} onChange={selectRateValueHandler}>
              <option value="">Wybierz sprzedawcę</option>
              {/* <option value="0.76">Innogy</option> */}
              <option value="0.461">Energa</option>
              <option value="0.5839">Tauron</option>
              {/* <option value="0.75">Tauron (Katowice/Gliwice)</option> */}
              <option value="0.4119">Enea</option>
              <option value="0.3568">PGE</option>
            </select>
          </div>
          <div className="inputarea">
            <button className="findout" type="submit" onClick={submitValuesHandler}>
              SPRAWDŹ →
            </button>
            {/* <AwesomeButton type="primary" size="large" onClick={submitPolValueHandler, displayPredictionRaport}>
              SPRAWDŹ ➥ 
            </AwesomeButton> */}
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
