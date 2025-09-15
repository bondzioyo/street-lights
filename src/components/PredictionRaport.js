import React from "react";
import "../component_scss/PredictionRaport/PredictionRaport.css";
import NightTime from "../data/NightTime.json";

import { Bar } from "react-chartjs-2";

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

const PredictionRaport = ({ powerOfLamp, numberOfLamp, rate }) => {
  const data = NightTime.map((nt) => {
    return {
      month: nt.month,
      day: nt.day,
      powerConsumption: nt.night_time * powerOfLamp * numberOfLamp,
    };
  });

  const stawka = rate;
  const numberFormat = new Intl.NumberFormat("en");

  const tablica = [];
  for (let i = 1; i < 365; i++) {
    tablica[i] = [
      "day: " + i,
      "pobranaMoc: " + data.map((e) => e.powerConsumption)[i],
    ];
  }

  const tab = [];
  const tab2 = [];
  let mostConsumpionMonth = 0;
  let temporaryVar1 = 0;
  // var i = 1;
  let miesiac_num = 0;
  for (let j = 1; j <= 12; j++) {
    // console.log(groupBy(test, 'month')[i].map(e => e.powerConsumption).reduce(function(a, b) {
    //   return a+b;
    // }, 0));
    temporaryVar1 = groupBy(data, "month")
      [j].map((e) => e.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    tab[j - 1] = temporaryVar1 / 1000;
    tab2[j - 1] = ((temporaryVar1 / 1000) * stawka).toFixed(2);

    if (temporaryVar1 > mostConsumpionMonth) {
      mostConsumpionMonth = temporaryVar1;
      miesiac_num = j;
    }
  }

  let miesiac_txt = "";
  switch (miesiac_num) {
    case 1:
      miesiac_txt = "January";
      break;
    case 2:
      miesiac_txt = "February";
      break;
    case 3:
      miesiac_txt = "March";
      break;
    case 4:
      miesiac_txt = "April";
      break;
    case 5:
      miesiac_txt = "May";
      break;
    case 6:
      miesiac_txt = "June";
      break;
    case 7:
      miesiac_txt = "July";
      break;
    case 8:
      miesiac_txt = "August";
      break;
    case 9:
      miesiac_txt = "September";
      break;
    case 10:
      miesiac_txt = "October";
      break;
    case 11:
      miesiac_txt = "November";
      break;
    case 12:
      miesiac_txt = "December";
      break;
    default:
      miesiac_txt = `*Month*`;
  }

  const consumptedPower =
    data
      .map((nt) => nt.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0) / 1000;

  const koszt = consumptedPower * stawka;

  const data2 = {
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
        // data: [1288, 19, 3, 5, 2, 3],
        data: tab,
        backgroundColor: "#f7e76a98",
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const data3 = {
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
        label: "Energy cost [PLN]",
        // data: [1288, 19, 3, 5, 2, 3],
        data: tab2,
        backgroundColor: "rgba(82, 70, 248, 0.829)",
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
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

  return (
    <div className="raportfield">
      <div className="data">
        <div className="chart-container">
          <div className="header">Forecast report</div>
          <div className="chart">
            <h1 className="header-chart">Consumption forecast</h1>
            <div className="chart1">
              <Bar data={data2} options={options} />
            </div>
            <div className="chart2">
              <Bar data={data3} options={options} />
            </div>
          </div>
        </div>
        <div className="details">
          <h1 className="header-details">Detailed data</h1>
          <div className="details-data-container">
            <div>Annual energy cost for the given installation power:</div>
            <div className="details-data-value">
              {numberFormat.format(koszt.toFixed(2))} PLN
            </div>
          </div>
          <div className="details-data-container">
            <div>Annual energy consumption:</div>
            <div className="details-data-value">
              {numberFormat.format(consumptedPower.toFixed(3))} kWh
            </div>
          </div>
          <div className="details-data-container">
            <div>Highest assumed consumption occurs in:</div>
            <div className="details-data-value">{miesiac_txt}</div>
          </div>
          <div className="details-data-container">
            <div>Consumption in that month:</div>
            <div className="details-data-value">
              {numberFormat.format((mostConsumpionMonth / 1000).toFixed(3))} kWh
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionRaport;
