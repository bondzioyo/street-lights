import React from "react";
import "../component_scss/ComparisionRport/ComparisionRaport.css";
import NightTime from "../data/NightTime.json";

import { Bar } from "react-chartjs-2";
import MoreThan20perc from "./MoreThan20perc";
import LessThan20perc from "./LessThan20perc";

const ComparisionRaport = ({ powerOfLamp, numberOfLamp, usedEnergy }) => {
  const groupBy = (items, key) =>
    items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {}
    );

  console.log();

  var stawka = 0.461;
  var numberFormat = new Intl.NumberFormat("pl");

  var data = NightTime.map((nt) => {
    return {
      month: nt.month,
      day: nt.day,
      powerConsumption: nt.night_time * powerOfLamp * numberOfLamp,
    };
  });

  console.log(
    NightTime.map((e) => e.night_time).reduce(function (a, b) {
      return a + b;
    }, 0)
  );

  var sumaNightTime = NightTime.map((e) => e.night_time).reduce(function (
    a,
    b
  ) {
    return a + b;
  },
  0);

  // console.log(usedEnergy*1000/(sumaNightTime*numberOfLamp))

  var praktycznaMocOprawy =
    (usedEnergy * 1000) / (sumaNightTime * numberOfLamp);

  var dataPraktyczne = NightTime.map((nt) => {
    return {
      month: nt.month,
      day: nt.day,
      powerConsumption: nt.night_time * praktycznaMocOprawy * numberOfLamp,
    };
  });

  var tab = [];
  var tab2 = [];
  var temporaryVar1 = 0;
  var temporaryVar2 = 0;
  // var miesiac_num = 0;
  for (var j = 1; j <= 12; j++) {
    temporaryVar1 = groupBy(dataPraktyczne, "month")
      [j].map((e) => e.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    tab[j - 1] = (temporaryVar1 / 1000).toFixed(2);

    temporaryVar2 = groupBy(data, "month")
      [j].map((e) => e.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    tab2[j - 1] = (temporaryVar2 / 1000).toFixed(2);
  }

  console.log(tab2);

  var consumptedPower =
    data
      .map((nt) => nt.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0) / 1000;

  var koszt = consumptedPower * stawka;

  var roznica = (usedEnergy / consumptedPower - 1) * 100;

  const dataChart = {
    labels: [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ],
    datasets: [
      {
        label: "Zuzycie energii [kWh]",
        data: tab,
        backgroundColor: "#f7e76a98",
        borderWidth: 1,
      },
      {
        label: "Zakładane zuzycie energii [kWh]",
        data: tab2,
        backgroundColor: "#f7a578",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
            // max: 500,
            stepSize: 100,
          },
        },
      ],
    },
  };

  var info;

  if (roznica > 20){
    info = <MoreThan20perc roznica={roznica}/>}
    else if(roznica > 0 && roznica< 20) {info = <LessThan20perc roznica={roznica}/>}
    else if(roznica < 0 && roznica > -20) {info = <LessThan20perc roznica={roznica}/>}

  

  return (
    <div className="raportfield">
      <div className="header">Raport porównawczy</div>
      <div className="data">
        <div className="chart">
          <h1 className="header-chart">Porównanie danych o zużyciu</h1>
          <Bar data={dataChart} options={options} />
        </div>
        <div className="details">
          <h1 className="header-details">Szczegółowe dane</h1>
          {/* <div className="detailInfo">
            Twoje zużycie jest o {roznica.toFixed(2)} % większe niz jego
            teoretyczna wartość {<br></br>}{" "}
            <span style={{ fontSize: 50 }}>⚠</span>
          </div> */}
          
          {info}
          
          
          {/* DETAIL 1 */}
          <div className="detail2">
            <li>Roczny koszt energii dla podanego zużycia energii:</li>
          </div>
          <div className="detail2value">
            {/* {numberFormat.format(koszt.toFixed(2))} */}
            {numberFormat.format((usedEnergy * stawka).toFixed(2))}
            {/* {numberFormat.format((usedEnergy*stawka).toFixed(3))} */}
          </div>
          <div className="detail2unit">zł</div>
          {/* DETAIL 2 */}
          <div className="detail3">
            <li>Przewidywany roczny koszt zużycia energii:</li>
          </div>
          <div className="detail3value">
            {numberFormat.format(koszt.toFixed(2))}
          </div>
          {/* <div className="detail3unit">kWh</div> */}
          {/* DETAIL 3 */}
          <div className="detail3unit">zł</div>
          <div className="detail4">
            <li>Przewidywane zużycie energii:</li>
          </div>
          <div className="detail4value">
            <div>{numberFormat.format(consumptedPower.toFixed(3))}</div>
          </div>
          <div className="detail4unit">kWh</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisionRaport;
