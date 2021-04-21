import React from "react";
import "../component_scss/Mainscreen/Mainscreen.css";
// import PredictionRaport from "./PredictionRaport";
import Rightfield from "./Rightfield";
// import AwesomeButton from "../react-awesome-button/src/components/AwesomeButton";
// import "../react-awesome-button/dist/themes/theme-amber.css";


const Mainscreen = ({
  setInputPolValue,
  // powerOfLamp,
  setPowerOfLamp,
  inputPolValue,
  setInputNolValue,
  setNumberOfLamp,
  inputNolValue, 
  setInputUsedenValue,
  setUsedEnergy,
  inputUsedenValue
}) => {
  const inputPolValueHandler = (e) => {
    // console.log(e.target.value);
    setInputPolValue(e.target.value);
  };


  const inputNolValueHandler = (e) => {
    setInputNolValue(e.target.value);
  }

  const inputUsedenValueHandler = (e) => {
    setInputUsedenValue(e.target.value);
  }

  const submitValuesHandler = (e) => {
    e.preventDefault();
    if(inputNolValue>=0 && inputPolValue >= 0){
    setPowerOfLamp(inputPolValue);
    setNumberOfLamp(inputNolValue);}
    if(inputUsedenValue!==''){
      setUsedEnergy(inputUsedenValue);
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
            <select className="inputselect">
              <option value="">Wybierz</option>
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
              *Podałem łączną moc dla wszystkich opraw
              <input className="checkmark" type="checkbox"></input>
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
              Wprowadź stawkę za energię lub wybierz dostawcę, który działa w
              Twoim regionie
            </div>
            <input
              className="inputvalue"
              type="number"
              placeholder="Stawka [zł/kWh]"
            ></input>
            <select className="inputselect" name="Dostawca" required>
              <option value="">Wybierz dostawcę</option>
              <option value="0.76">Innogy</option>
              <option value="0.78">Energa</option>
              <option value="0.70">Tauron</option>
              <option value="0.75">Tauron (Katowice/Gliwice)</option>
              <option value="0.69">Enea</option>
              <option value="0.74">PGE</option>
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
