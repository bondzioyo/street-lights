import React from "react";
import "../component_scss/ComparisionRport/ComparisionRaport.css";
import NightTime from "../data/NightTime.json";

import { Bar } from "react-chartjs-2";
import MoreThan20perc from "./MoreThan20perc";
import LessThan20perc from "./LessThan20perc";

const ComparisionRaport = ({ powerOfLamp, numberOfLamp, usedEnergy, rate }) => {
  const groupBy = (items, key) =>
    items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {}
    );

  const stawka = rate;
  const numberFormat = new Intl.NumberFormat("en");

  const data = NightTime.map((nt) => {
    return {
      month: nt.month,
      day: nt.day,
      powerConsumption: nt.night_time * powerOfLamp * numberOfLamp,
    };
  });

  const sumaNightTime = NightTime.map((e) => e.night_time).reduce(function (
    a,
    b
  ) {
    return a + b;
  },
  0);

  // console.log(usedEnergy*1000/(sumaNightTime*numberOfLamp))

  const praktycznaMocOprawy =
    (usedEnergy * 1000) / (sumaNightTime * numberOfLamp);

  const dataPraktyczne = NightTime.map((nt) => {
    return {
      month: nt.month,
      day: nt.day,
      powerConsumption: nt.night_time * praktycznaMocOprawy * numberOfLamp,
    };
  });

  const tab = [];
  const tab2 = [];
  let temporaryVar1 = 0;
  let temporaryVar2 = 0;
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

  const consumptedPower =
    data
      .map((nt) => nt.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0) / 1000;

  const koszt = consumptedPower * stawka;

  const roznica = (usedEnergy / consumptedPower - 1) * 100;

  const dataChart = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Energy consumption [kWh]",
        data: tab,
        backgroundColor: "#f7e76a98",
        borderWidth: 1,
      },
      {
        label: "Estimated energy consumption [kWh]",
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
    responsive: true,
    maintainAspectRatio: false,
  };

  let info;

  if (roznica > 20) {
    info = <MoreThan20perc roznica={roznica} />;
  } else if (roznica > 0 && roznica < 20) {
    info = <LessThan20perc roznica={roznica} />;
  } else if (roznica < 0 && roznica > -20) {
    info = <LessThan20perc roznica={roznica} />;
  }

  return (
    <div className="raportfield">
      <div className="data">
        <div className="chart-container">
          <div className="header">Comparison report</div>
          <div className="chart">
            <h1 className="header-chart">Consumption data comparison</h1>
            <div className="chart3">
              <Bar data={dataChart} options={options} />
            </div>
          </div>
        </div>
        {info}
        <div className="details">
          <h1 className="header-details">Detailed data</h1>
          <div className="details-data-container">
            <div>Annual energy cost for the entered consumption:</div>
            <div className="details-data-value">
              {numberFormat.format((usedEnergy * stawka).toFixed(2))} PLN
            </div>
          </div>
          <div className="details-data-container">
            <div>Estimated annual energy cost:</div>
            <div className="details-data-value">
              {numberFormat.format(koszt.toFixed(2))} PLN
            </div>
          </div>
          <div className="details-data-container">
            <div>Estimated energy consumption:</div>
            <div className="details-data-value">
              {numberFormat.format(consumptedPower.toFixed(3))} kWh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisionRaport;
