import React from "react";
import "../component_scss/PredictionRaport/PredictionRaport.css";
// import PowerOfLampComponent from "./PowerOfLampComponent";
import NightTime from "../data/NightTime.json";

import { Bar } from "react-chartjs-2";
// import { ResponsiveBar } from '@nivo/bar';

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

const PredictionRaport = ({ powerOfLamp, numberOfLamp }) => {
  // console.log(powerOfLamp.map);

  // var czasSwiecenia = NightTime.map((nt) => nt.night_time).reduce(
  //   (a, b) => a + b,
  //   0
  // );

  var data = NightTime.map((nt) => {
    return {
      month: nt.month,
      day: nt.day,
      powerConsumption: nt.night_time * powerOfLamp * numberOfLamp,
    };
  });

  var stawka = 0.4610;
  var numberFormat = new Intl.NumberFormat("pl");

  // console.log(data.map((e) => e.powerConsumption));
  // console.log(data.map((e) => e.day));
  // var x = [data.map((e) => e.day), data.map((e) => e.powerConsumption)];
  // console.log(data);
  // var x = [Array.from({length: 365}, (_, i) => i + 1), data.map((e) => e.powerConsumption)];

  // console.log(x);

  // console.log(data.map((nt) => nt.powerConsumption).reduce(function (a, b) {
  //     return a + b;
  //   }, 0));

  // console.log(groupBy(data, "month")[1].map((e) => e.powerConsumption).reduce(function (a, b) {
  //   return a + b;
  // }, 0));
  var tablica = [];
  for (var i = 1; i < 365; i++) {
    tablica[i] = [
      "day: " + i,
      "pobranaMoc: " + data.map((e) => e.powerConsumption)[i],
    ];
  }
  // console.log(tablica);
  // export const dataSource = tablica;

  // console.log(test);
  // console.log(groupBy(data, 'month')[1]);
  // console.log(groupBy(test, 'month')[5]);
  // console.log(groupBy(test, 'month')[5].map(e => e.powerConsumption).reduce(function(a, b) {
  //   return a+b;
  // }, 0));
  var tab =[];
  var tab2 =[];
  var mostConsumpionMonth = 0;
  var temporaryVar1 = 0;
  // var i = 1;
  var miesiac_num = 0;
  for (var j = 1; j <= 12; j++) {
    // console.log(groupBy(test, 'month')[i].map(e => e.powerConsumption).reduce(function(a, b) {
    //   return a+b;
    // }, 0));
    temporaryVar1 = groupBy(data, "month")
      [j].map((e) => e.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
      tab[j-1] = temporaryVar1/1000;
      tab2[j-1] = ((temporaryVar1/1000)*stawka).toFixed(2);

    if (temporaryVar1 > mostConsumpionMonth) {
      mostConsumpionMonth = temporaryVar1;
      miesiac_num = j;
    }
  }
//   console.log(numberFormat.format(((temporaryVar1/1000)*stawka).toFixed(2)))
// console.log(tab);

  var miesiac_txt = "";
  switch (miesiac_num) {
    case 1:
      miesiac_txt = "Styczeń";
      break;
    case 2:
      miesiac_txt = "Luty";
      break;
    case 3:
      miesiac_txt = "Marzec";
      break;
    case 4:
      miesiac_txt = "Kwiecień";
      break;
    case 5:
      miesiac_txt = "Maj";
      break;
    case 6:
      miesiac_txt = "Czerwiec";
      break;
    case 7:
      miesiac_txt = "Lipiec";
      break;
    case 8:
      miesiac_txt = "Sierpień";
      break;
    case 9:
      miesiac_txt = "Wrzesień";
      break;
    case 10:
      miesiac_txt = "Październik";
      break;
    case 11:
      miesiac_txt = "Listopad";
      break;
    case 12:
      miesiac_txt = "Grudzień";
      break;
    default:
      miesiac_txt = `*Miesiąc*`;
  }

  //     var lol[i] = groupBy(test, 'month')[5].map(e => e.powerConsumption).reduce(function(a, b) {
  //       return a+b;
  //     }, 0)
  // console.log(lol);

  // var zuzycie = (czasSwiecenia * powerOfLamp * numberOfLamp) / 1000;

  var consumptedPower =
    data
      .map((nt) => nt.powerConsumption)
      .reduce(function (a, b) {
        return a + b;
      }, 0) / 1000;

  
  // tab2 = tab;

  var koszt = consumptedPower * stawka;

  

  const data2 = {
    labels: ["Styczeń", 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    datasets: [
      {
        label: 'Zuzycie energii [kWh]', 
        // data: [1288, 19, 3, 5, 2, 3],
        data: tab,
        backgroundColor: '#f7e76a98',
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
  }
  
  const data3 = {
    labels: ["Styczeń", 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
    datasets: [
      {
        label: 'Koszt energii [zł]', 
        // data: [1288, 19, 3, 5, 2, 3],
        data: tab2,
        backgroundColor: 'rgba(82, 70, 248, 0.829)',
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
  }

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
  }

  return (
    <div className="raportfield">
      <div className="header">Raport prognozy</div>
      <div className="data">
        <div className="chart">
          <h1 className="header-chart">Prognoza zużycia</h1>
          <div className='chart1'>
          <Bar data={data2} options={options}/>
          </div>
          <div className='chart2'>
          <Bar data={data3} options={options}/>
          </div>
        </div>
        <div className="details">
          <h1 className="header-details">Szczegółowe dane</h1>
          {/* DETAIL 1 */}
          <div className="detail1">
            <li>Roczny koszt energii dla podanej mocy instalacji:</li>
          </div>
          <div className="detail1value">
            {numberFormat.format(koszt.toFixed(2))}
          </div>
          <div className="detail1unit">zł</div>
          {/* DETAIL 2 */}
          <div className="detail2">
            <li>Roczne zużycie energii:</li>
          </div>
          <div className="detail2value">
            {numberFormat.format(consumptedPower.toFixed(3))}
          </div>
          <div className="detail2unit">kWh</div>
          {/* DETAIL 3 */}
          <div className="detail3">
            <li>Najwyższe zakładane zużycie przypada na miesiąc:</li>
          </div>
          <div className="detail3month">{miesiac_txt}</div>
          {/* DETAIL 4 */}
          <div className="detail4">
            <li>W tym miesiącu zużycie wynosi:</li>
          </div>
          <div className="detail4value">
            <div>
              {numberFormat.format((mostConsumpionMonth / 1000).toFixed(3))}
            </div>
          </div>
          <div className="detail4unit">kWh</div>
        </div>
      </div>
    </div>
  );
};

export default PredictionRaport;
