(this["webpackJsonpstreet-lights"]=this["webpackJsonpstreet-lights"]||[]).push([[0],{158:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),h=i(47),m=i.n(h),o=(i(52),i(2)),d=(i(53),i(54),i(55),i(56),i.p+"static/media/street-light.284f8f9a.svg"),c=i(0),g=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:d,alt:"Logo"})})},y=function(t){var e=t.setInputPolValue,i=t.setSelectPolValue,n=t.setPowerOfLamp,a=t.inputPolValue,h=t.selectPolValue,m=t.setInputNolValue,o=t.setNumberOfLamp,d=t.inputNolValue,y=t.setInputUsedenValue,s=t.setUsedEnergy,r=t.inputUsedenValue,_=t.inputRateValue,l=t.setInputRateValue,u=t.selectRateValue,j=t.setSelectRateValue,b=t.setRate;return Object(c.jsx)("div",{children:Object(c.jsxs)("main",{children:[Object(c.jsxs)("div",{className:"leftfield",children:[Object(c.jsxs)("div",{className:"inputarea",children:[Object(c.jsx)("div",{className:"inputdescription",children:"Podaj moc oprawy* lub wybierz z listy"}),Object(c.jsx)("input",{className:"inputvalue",type:"number",placeholder:"Moc [W]",min:"0",defaultValue:a,onChange:function(t){e(t.target.value)}}),Object(c.jsxs)("select",{className:"inputselect",defaultValue:"0",onChange:function(t){i(t.target.value)},children:[Object(c.jsx)("option",{value:"",children:"Wybierz"}),Object(c.jsx)("option",{value:"60",children:"ALC LED 60W"}),Object(c.jsx)("option",{value:"90",children:"ALC LED 90W"}),Object(c.jsx)("option",{value:"40",children:"Brd CREE"}),Object(c.jsx)("option",{value:"50",children:"Bridgelux IP65"}),Object(c.jsx)("option",{value:"33",children:"Crown Basic LED 5050lm"}),Object(c.jsx)("option",{value:"62",children:"Crown Basic LED 7800lm"}),Object(c.jsx)("option",{value:"50",children:"Everon PLUS 100 50W"}),Object(c.jsx)("option",{value:"60",children:"Everon PLUS 100 60W"}),Object(c.jsx)("option",{value:"140",children:"Everon PLUS 200 140W"}),Object(c.jsx)("option",{value:"180",children:"Everon PLUS 200 180W"}),Object(c.jsx)("option",{value:"30",children:"Kepler LED IP66 30W"}),Object(c.jsx)("option",{value:"50",children:"Majoris IP65"}),Object(c.jsx)("option",{value:"150",children:"Malaga SGS102 Son-T150W"}),Object(c.jsx)("option",{value:"50",children:"MZZ COB Epistar"}),Object(c.jsx)("option",{value:"100",children:"Selenium SGP340 Son-T100W"}),Object(c.jsx)("option",{value:"40",children:"Titan IP65"}),Object(c.jsx)("option",{value:"30",children:"WHL COB Epistar"}),Object(c.jsx)("option",{value:"106",children:"Urbano LED ED 11750lm"}),Object(c.jsx)("option",{value:"200",children:"Urbano LED 200W"})]})]}),Object(c.jsxs)("div",{className:"inputarea",children:[Object(c.jsx)("div",{className:"inputdescription",children:"Podaj ilo\u015b\u0107 lamp"}),Object(c.jsx)("input",{className:"inputvalue",type:"number",placeholder:"Ilo\u015b\u0107 lamp",min:"1",value:d,onChange:function(t){m(t.target.value)}}),Object(c.jsx)("div",{className:"inputcheck"})]}),Object(c.jsxs)("div",{className:"inputarea",children:[Object(c.jsx)("div",{className:"inputdescription",children:"Wprowad\u017a swoje zu\u017cycie energii w kWh"}),Object(c.jsx)("input",{className:"inputvalue",type:"number",placeholder:"Zu\u017cycie [kWh]",onChange:function(t){y(t.target.value)}}),Object(c.jsx)("div",{className:"inputselect"})]}),Object(c.jsxs)("div",{className:"inputarea",children:[Object(c.jsx)("div",{className:"inputdescription",children:"Wprowad\u017a stawk\u0119 za energi\u0119 lub wybierz sprzedawc\u0119, kt\xf3ry dzia\u0142a w Twoim regionie"}),Object(c.jsx)("input",{className:"inputvalue",type:"number",placeholder:"Stawka [z\u0142/kWh]",defaultValue:_,onChange:function(t){l(t.target.value)}}),Object(c.jsxs)("select",{className:"inputselect",name:"Dostawca",defaultValue:u,onChange:function(t){j(t.target.value)},children:[Object(c.jsx)("option",{value:"",children:"Wybierz sprzedawc\u0119"}),Object(c.jsx)("option",{value:"0.461",children:"Energa"}),Object(c.jsx)("option",{value:"0.5839",children:"Tauron"}),Object(c.jsx)("option",{value:"0.4119",children:"Enea"}),Object(c.jsx)("option",{value:"0.3568",children:"PGE"})]})]}),Object(c.jsx)("div",{className:"inputarea",children:Object(c.jsx)("button",{className:"findout",type:"submit",onClick:function(t){t.preventDefault(),d>=0&&o(d),0!=a?n(a):0!=h&&n(h),""!==r&&s(r),0!=_?b(_):0!=u&&b(u)},children:"SPRAWD\u0179 \u2192"})})]}),Object(c.jsx)("div",{className:"rightfield",children:Object(c.jsx)(g,{})})]})})},s=i(7),r=i(21),_=i(8),l=(i(58),i(6)),u=i(12),j=function(t,e){return t.reduce((function(t,i){return Object(_.a)(Object(_.a)({},t),{},Object(s.a)({},i[e],[].concat(Object(r.a)(t[i[e]]||[]),[i])))}),{})},b=function(t){for(var e=t.powerOfLamp,i=t.numberOfLamp,n=t.rate,a=l.map((function(t){return{month:t.month,day:t.day,powerConsumption:t.night_time*e*i}})),h=n,m=new Intl.NumberFormat("pl"),o=[],d=1;d<365;d++)o[d]=["day: "+d,"pobranaMoc: "+a.map((function(t){return t.powerConsumption}))[d]];for(var g=[],y=[],s=0,r=0,_=0,b=1;b<=12;b++)r=j(a,"month")[b].map((function(t){return t.powerConsumption})).reduce((function(t,e){return t+e}),0),g[b-1]=r/1e3,y[b-1]=(r/1e3*h).toFixed(2),r>s&&(s=r,_=b);var p="";switch(_){case 1:p="Stycze\u0144";break;case 2:p="Luty";break;case 3:p="Marzec";break;case 4:p="Kwiecie\u0144";break;case 5:p="Maj";break;case 6:p="Czerwiec";break;case 7:p="Lipiec";break;case 8:p="Sierpie\u0144";break;case 9:p="Wrzesie\u0144";break;case 10:p="Pa\u017adziernik";break;case 11:p="Listopad";break;case 12:p="Grudzie\u0144";break;default:p="*Miesi\u0105c*"}var O=a.map((function(t){return t.powerConsumption})).reduce((function(t,e){return t+e}),0)/1e3,v=O*h,x={labels:["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],datasets:[{label:"Zuzycie energii [kWh]",data:g,backgroundColor:"#f7e76a98",borderWidth:1}]},f={labels:["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],datasets:[{label:"Koszt energii [z\u0142]",data:y,backgroundColor:"rgba(82, 70, 248, 0.829)",borderWidth:1}]},z={scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,stepSize:100}}]},responsive:!0,maintainAspectRatio:!1};return Object(c.jsx)("div",{className:"raportfield",children:Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("div",{className:"chart-container",children:[Object(c.jsx)("div",{className:"header",children:"Raport prognozy"}),Object(c.jsxs)("div",{className:"chart",children:[Object(c.jsx)("h1",{className:"header-chart",children:"Prognoza zu\u017cycia"}),Object(c.jsx)("div",{className:"chart1",children:Object(c.jsx)(u.Bar,{data:x,options:z})}),Object(c.jsx)("div",{className:"chart2",children:Object(c.jsx)(u.Bar,{data:f,options:z})})]})]}),Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("h1",{className:"header-details",children:"Szczeg\xf3\u0142owe dane"}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"Roczny koszt energii dla podanej mocy instalacji:"}),Object(c.jsxs)("div",{className:"details-data-value",children:[m.format(v.toFixed(2))," z\u0142"]})]}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"Roczne zu\u017cycie energii:"}),Object(c.jsxs)("div",{className:"details-data-value",children:[m.format(O.toFixed(3))," kWh"]})]}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"Najwy\u017csze zak\u0142adane zu\u017cycie przypada na miesi\u0105c:"}),Object(c.jsx)("div",{className:"details-data-value",children:p})]}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"W tym miesi\u0105cu zu\u017cycie wynosi:"}),Object(c.jsxs)("div",{className:"details-data-value",children:[m.format((s/1e3).toFixed(3))," kWh"]})]})]})]})})},p=(i(19),function(t){var e=t.roznica,i=0;return Object(c.jsxs)("div",{className:"detailInfo",style:{background:"rgba(248, 66, 66, 0.267)",color:"red"},children:["Twoje zu\u017cycie jest o ",e.toFixed(2)," % wi\u0119ksze niz jego teoretyczna warto\u015b\u0107 ",Object(c.jsx)("br",{})," ",Object(c.jsx)("span",{style:{fontSize:50},children:"\u26a0"}),Object(c.jsx)("div",{className:"infotext",onClick:function(t){t.preventDefault(),console.log(i),i++},children:"i"})]})}),O=function(t){var e=t.roznica;return Object(c.jsxs)("div",{className:"detailInfo",style:{background:"rgba(43, 250, 36, 0.397)",color:"green"},children:["R\xf3\u017cnica w zu\u017cyciu energii wynosi ",e.toFixed(2)," % i jej warto\u015b\u0107 mie\u015bci si\u0119 w normie."]})},v=function(t){var e=t.powerOfLamp,i=t.numberOfLamp,n=t.usedEnergy,a=t.rate,h=function(t,e){return t.reduce((function(t,i){return Object(_.a)(Object(_.a)({},t),{},Object(s.a)({},i[e],[].concat(Object(r.a)(t[i[e]]||[]),[i])))}),{})};console.log();var m=a,o=new Intl.NumberFormat("pl"),d=l.map((function(t){return{month:t.month,day:t.day,powerConsumption:t.night_time*e*i}}));console.log(l.map((function(t){return t.night_time})).reduce((function(t,e){return t+e}),0));for(var g=1e3*n/(l.map((function(t){return t.night_time})).reduce((function(t,e){return t+e}),0)*i),y=l.map((function(t){return{month:t.month,day:t.day,powerConsumption:t.night_time*g*i}})),j=[],b=[],v=0,x=0,f=1;f<=12;f++)v=h(y,"month")[f].map((function(t){return t.powerConsumption})).reduce((function(t,e){return t+e}),0),j[f-1]=(v/1e3).toFixed(2),x=h(d,"month")[f].map((function(t){return t.powerConsumption})).reduce((function(t,e){return t+e}),0),b[f-1]=(x/1e3).toFixed(2);console.log(b);var z,N=d.map((function(t){return t.powerConsumption})).reduce((function(t,e){return t+e}),0)/1e3,w=N*m,k=100*(n/N-1),S={labels:["Stycze\u0144","Luty","Marzec","Kwiecie\u0144","Maj","Czerwiec","Lipiec","Sierpie\u0144","Wrzesie\u0144","Pa\u017adziernik","Listopad","Grudzie\u0144"],datasets:[{label:"Zuzycie energii [kWh]",data:j,backgroundColor:"#f7e76a98",borderWidth:1},{label:"Zak\u0142adane zuzycie energii [kWh]",data:b,backgroundColor:"#f7a578",borderWidth:1}]};return k>20?z=Object(c.jsx)(p,{roznica:k}):(k>0&&k<20||k<0&&k>-20)&&(z=Object(c.jsx)(O,{roznica:k})),Object(c.jsx)("div",{className:"raportfield",children:Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("div",{className:"chart-container",children:[Object(c.jsx)("div",{className:"header",children:"Raport por\xf3wnawczy"}),Object(c.jsxs)("div",{className:"chart",children:[Object(c.jsx)("h1",{className:"header-chart",children:"Por\xf3wnanie danych o zu\u017cyciu"}),Object(c.jsx)("div",{className:"chart3",children:Object(c.jsx)(u.Bar,{data:S,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,stepSize:100}}]},responsive:!0,maintainAspectRatio:!1}})})]})]}),z,Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("h1",{className:"header-details",children:"Szczeg\xf3\u0142owe dane"}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"Roczny koszt energii dla podanego zu\u017cycia energii:"}),Object(c.jsxs)("div",{className:"details-data-value",children:[o.format((n*m).toFixed(2))," z\u0142"]})]}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"Przewidywany roczny koszt zu\u017cycia energii:"}),Object(c.jsxs)("div",{className:"details-data-value",children:[o.format(w.toFixed(2))," z\u0142"]})]}),Object(c.jsxs)("div",{className:"details-data-container",children:[Object(c.jsx)("div",{children:"Przewidywane zu\u017cycie energii:"}),Object(c.jsxs)("div",{className:"details-data-value",children:[o.format(N.toFixed(3))," kWh"]})]})]})]})})};var x=function(){var t,e=Object(n.useState)(""),i=Object(o.a)(e,2),a=i[0],h=i[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),g=d[0],s=d[1],r=Object(n.useState)(""),_=Object(o.a)(r,2),l=_[0],u=_[1],j=Object(n.useState)(""),p=Object(o.a)(j,2),O=p[0],x=p[1],f=Object(n.useState)(""),z=Object(o.a)(f,2),N=z[0],w=z[1],k=Object(n.useState)(""),S=Object(o.a)(k,2),L=S[0],C=S[1],W=Object(n.useState)(""),P=Object(o.a)(W,2),V=P[0],E=P[1],R=Object(n.useState)(""),I=Object(o.a)(R,2),F=I[0],M=I[1],D=Object(n.useState)(""),U=Object(o.a)(D,2),B=U[0],A=U[1],T=Object(n.useState)(""),Z=Object(o.a)(T,2),G=Z[0],K=Z[1];return 0!=V&&0!=l?t=Object(c.jsx)(v,{powerOfLamp:l,numberOfLamp:N,usedEnergy:V,rate:G}):0==V&&0!=l?t=Object(c.jsx)(b,{powerOfLamp:l,numberOfLamp:N,rate:G}):0===V&&0===l&&0===N&&(t=Object(c.jsx)("div",{})),Object(c.jsxs)("div",{children:[Object(c.jsx)(y,{inputPolValue:a,selectPolValue:g,setInputPolValue:h,setSelectPolValue:s,setPowerOfLamp:u,inputNolValue:O,setInputNolValue:x,setNumberOfLamp:w,inputUsedenValue:L,setInputUsedenValue:C,setUsedEnergy:E,inputRateValue:F,setInputRateValue:M,selectRateValue:B,setSelectRateValue:A,setRate:K}),t]})},f=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,159)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,h=e.getLCP,m=e.getTTFB;i(t),n(t),a(t),h(t),m(t)}))};m.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()},19:function(t,e,i){},52:function(t,e,i){},55:function(t,e,i){},56:function(t,e,i){},58:function(t,e,i){},6:function(t){t.exports=JSON.parse('[{"month":1,"day":1,"night_time":16},{"month":1,"day":2,"night_time":15.983},{"month":1,"day":3,"night_time":15.958},{"month":1,"day":4,"night_time":15.933},{"month":1,"day":5,"night_time":15.908},{"month":1,"day":6,"night_time":15.883},{"month":1,"day":7,"night_time":15.854},{"month":1,"day":8,"night_time":15.825},{"month":1,"day":9,"night_time":15.792},{"month":1,"day":10,"night_time":15.762},{"month":1,"day":11,"night_time":15.729},{"month":1,"day":12,"night_time":15.692},{"month":1,"day":13,"night_time":15.658},{"month":1,"day":14,"night_time":15.621},{"month":1,"day":15,"night_time":15.583},{"month":1,"day":16,"night_time":15.542},{"month":1,"day":17,"night_time":15.5},{"month":1,"day":18,"night_time":15.458},{"month":1,"day":19,"night_time":15.417},{"month":1,"day":20,"night_time":15.371},{"month":1,"day":21,"night_time":15.325},{"month":1,"day":22,"night_time":15.279},{"month":1,"day":23,"night_time":15.229},{"month":1,"day":24,"night_time":15.183},{"month":1,"day":25,"night_time":15.133},{"month":1,"day":26,"night_time":15.083},{"month":1,"day":27,"night_time":15.033},{"month":1,"day":28,"night_time":14.979},{"month":1,"day":29,"night_time":14.929},{"month":1,"day":30,"night_time":14.875},{"month":1,"day":31,"night_time":14.82},{"month":2,"day":1,"night_time":14.765},{"month":2,"day":2,"night_time":14.708},{"month":2,"day":3,"night_time":14.65},{"month":2,"day":4,"night_time":14.596},{"month":2,"day":5,"night_time":14.537},{"month":2,"day":6,"night_time":14.483},{"month":2,"day":7,"night_time":14.425},{"month":2,"day":8,"night_time":14.367},{"month":2,"day":9,"night_time":14.304},{"month":2,"day":10,"night_time":14.246},{"month":2,"day":11,"night_time":14.187},{"month":2,"day":12,"night_time":14.125},{"month":2,"day":13,"night_time":14.07},{"month":2,"day":14,"night_time":14.004},{"month":2,"day":15,"night_time":13.942},{"month":2,"day":16,"night_time":13.88},{"month":2,"day":17,"night_time":13.82},{"month":2,"day":18,"night_time":13.758},{"month":2,"day":19,"night_time":13.694},{"month":2,"day":20,"night_time":13.63},{"month":2,"day":21,"night_time":13.568},{"month":2,"day":22,"night_time":13.505},{"month":2,"day":23,"night_time":13.441},{"month":2,"day":24,"night_time":13.378},{"month":2,"day":25,"night_time":13.313},{"month":2,"day":26,"night_time":13.25},{"month":2,"day":27,"night_time":13.187},{"month":2,"day":28,"night_time":13.123},{"month":3,"day":1,"night_time":13.058},{"month":3,"day":2,"night_time":12.996},{"month":3,"day":3,"night_time":12.929},{"month":3,"day":4,"night_time":12.867},{"month":3,"day":5,"night_time":12.8},{"month":3,"day":6,"night_time":12.737},{"month":3,"day":7,"night_time":12.671},{"month":3,"day":8,"night_time":12.608},{"month":3,"day":9,"night_time":12.542},{"month":3,"day":10,"night_time":12.479},{"month":3,"day":11,"night_time":12.413},{"month":3,"day":12,"night_time":12.346},{"month":3,"day":13,"night_time":12.283},{"month":3,"day":14,"night_time":12.217},{"month":3,"day":15,"night_time":12.15},{"month":3,"day":16,"night_time":12.088},{"month":3,"day":17,"night_time":12.021},{"month":3,"day":18,"night_time":11.954},{"month":3,"day":19,"night_time":11.888},{"month":3,"day":20,"night_time":11.825},{"month":3,"day":21,"night_time":11.758},{"month":3,"day":22,"night_time":11.692},{"month":3,"day":23,"night_time":11.629},{"month":3,"day":24,"night_time":11.563},{"month":3,"day":25,"night_time":11.496},{"month":3,"day":26,"night_time":11.433},{"month":3,"day":27,"night_time":11.367},{"month":3,"day":28,"night_time":11.304},{"month":3,"day":29,"night_time":11.238},{"month":3,"day":30,"night_time":11.175},{"month":3,"day":31,"night_time":11.108},{"month":4,"day":1,"night_time":11.042},{"month":4,"day":2,"night_time":10.979},{"month":4,"day":3,"night_time":10.913},{"month":4,"day":4,"night_time":10.85},{"month":4,"day":5,"night_time":10.788},{"month":4,"day":6,"night_time":10.721},{"month":4,"day":7,"night_time":10.658},{"month":4,"day":8,"night_time":10.592},{"month":4,"day":9,"night_time":10.529},{"month":4,"day":10,"night_time":10.467},{"month":4,"day":11,"night_time":10.4},{"month":4,"day":12,"night_time":10.338},{"month":4,"day":13,"night_time":10.275},{"month":4,"day":14,"night_time":10.213},{"month":4,"day":15,"night_time":10.15},{"month":4,"day":16,"night_time":10.088},{"month":4,"day":17,"night_time":10.025},{"month":4,"day":18,"night_time":9.963},{"month":4,"day":19,"night_time":9.9},{"month":4,"day":20,"night_time":9.836},{"month":4,"day":21,"night_time":9.775},{"month":4,"day":22,"night_time":9.717},{"month":4,"day":23,"night_time":9.654},{"month":4,"day":24,"night_time":9.596},{"month":4,"day":25,"night_time":9.533},{"month":4,"day":26,"night_time":9.475},{"month":4,"day":27,"night_time":9.417},{"month":4,"day":28,"night_time":9.354},{"month":4,"day":29,"night_time":9.296},{"month":4,"day":30,"night_time":9.238},{"month":5,"day":1,"night_time":9.179},{"month":5,"day":2,"night_time":9.121},{"month":5,"day":3,"night_time":9.067},{"month":5,"day":4,"night_time":9.008},{"month":5,"day":5,"night_time":8.954},{"month":5,"day":6,"night_time":8.898},{"month":5,"day":7,"night_time":8.842},{"month":5,"day":8,"night_time":8.79},{"month":5,"day":9,"night_time":8.737},{"month":5,"day":10,"night_time":8.683},{"month":5,"day":11,"night_time":8.631},{"month":5,"day":12,"night_time":8.579},{"month":5,"day":13,"night_time":8.529},{"month":5,"day":14,"night_time":8.479},{"month":5,"day":15,"night_time":8.429},{"month":5,"day":16,"night_time":8.38},{"month":5,"day":17,"night_time":8.333},{"month":5,"day":18,"night_time":8.288},{"month":5,"day":19,"night_time":8.242},{"month":5,"day":20,"night_time":8.196},{"month":5,"day":21,"night_time":8.153},{"month":5,"day":22,"night_time":8.109},{"month":5,"day":23,"night_time":8.069},{"month":5,"day":24,"night_time":8.028},{"month":5,"day":25,"night_time":7.988},{"month":5,"day":26,"night_time":7.95},{"month":5,"day":27,"night_time":7.913},{"month":5,"day":28,"night_time":7.877},{"month":5,"day":29,"night_time":7.842},{"month":5,"day":30,"night_time":7.808},{"month":5,"day":31,"night_time":7.775},{"month":6,"day":1,"night_time":7.746},{"month":6,"day":2,"night_time":7.717},{"month":6,"day":3,"night_time":7.688},{"month":6,"day":4,"night_time":7.663},{"month":6,"day":5,"night_time":7.633},{"month":6,"day":6,"night_time":7.613},{"month":6,"day":7,"night_time":7.588},{"month":6,"day":8,"night_time":7.567},{"month":6,"day":9,"night_time":7.546},{"month":6,"day":10,"night_time":7.529},{"month":6,"day":11,"night_time":7.513},{"month":6,"day":12,"night_time":7.5},{"month":6,"day":13,"night_time":7.483},{"month":6,"day":14,"night_time":7.475},{"month":6,"day":15,"night_time":7.463},{"month":6,"day":16,"night_time":7.454},{"month":6,"day":17,"night_time":7.446},{"month":6,"day":18,"night_time":7.442},{"month":6,"day":19,"night_time":7.436},{"month":6,"day":20,"night_time":7.437},{"month":6,"day":21,"night_time":7.438},{"month":6,"day":22,"night_time":7.437},{"month":6,"day":23,"night_time":7.435},{"month":6,"day":24,"night_time":7.446},{"month":6,"day":25,"night_time":7.45},{"month":6,"day":26,"night_time":7.458},{"month":6,"day":27,"night_time":7.467},{"month":6,"day":28,"night_time":7.479},{"month":6,"day":29,"night_time":7.492},{"month":6,"day":30,"night_time":7.504},{"month":7,"day":1,"night_time":7.521},{"month":7,"day":2,"night_time":7.538},{"month":7,"day":3,"night_time":7.558},{"month":7,"day":4,"night_time":7.578},{"month":7,"day":5,"night_time":7.6},{"month":7,"day":6,"night_time":7.623},{"month":7,"day":7,"night_time":7.648},{"month":7,"day":8,"night_time":7.675},{"month":7,"day":9,"night_time":7.703},{"month":7,"day":10,"night_time":7.732},{"month":7,"day":11,"night_time":7.763},{"month":7,"day":12,"night_time":7.793},{"month":7,"day":13,"night_time":7.825},{"month":7,"day":14,"night_time":7.86},{"month":7,"day":15,"night_time":7.896},{"month":7,"day":16,"night_time":7.93},{"month":7,"day":17,"night_time":7.971},{"month":7,"day":18,"night_time":8.008},{"month":7,"day":19,"night_time":8.05},{"month":7,"day":20,"night_time":8.092},{"month":7,"day":21,"night_time":8.132},{"month":7,"day":22,"night_time":8.175},{"month":7,"day":23,"night_time":8.22},{"month":7,"day":24,"night_time":8.263},{"month":7,"day":25,"night_time":8.308},{"month":7,"day":26,"night_time":8.357},{"month":7,"day":27,"night_time":8.404},{"month":7,"day":28,"night_time":8.452},{"month":7,"day":29,"night_time":8.5},{"month":7,"day":30,"night_time":8.55},{"month":7,"day":31,"night_time":8.6},{"month":8,"day":1,"night_time":8.654},{"month":8,"day":2,"night_time":8.704},{"month":8,"day":3,"night_time":8.758},{"month":8,"day":4,"night_time":8.813},{"month":8,"day":5,"night_time":8.867},{"month":8,"day":6,"night_time":8.921},{"month":8,"day":7,"night_time":8.975},{"month":8,"day":8,"night_time":9.029},{"month":8,"day":9,"night_time":9.088},{"month":8,"day":10,"night_time":9.142},{"month":8,"day":11,"night_time":9.2},{"month":8,"day":12,"night_time":9.254},{"month":8,"day":13,"night_time":9.313},{"month":8,"day":14,"night_time":9.371},{"month":8,"day":15,"night_time":9.429},{"month":8,"day":16,"night_time":9.488},{"month":8,"day":17,"night_time":9.55},{"month":8,"day":18,"night_time":9.608},{"month":8,"day":19,"night_time":9.666},{"month":8,"day":20,"night_time":9.729},{"month":8,"day":21,"night_time":9.788},{"month":8,"day":22,"night_time":9.85},{"month":8,"day":23,"night_time":9.908},{"month":8,"day":24,"night_time":9.971},{"month":8,"day":25,"night_time":10.033},{"month":8,"day":26,"night_time":10.092},{"month":8,"day":27,"night_time":10.154},{"month":8,"day":28,"night_time":10.217},{"month":8,"day":29,"night_time":10.279},{"month":8,"day":30,"night_time":10.342},{"month":8,"day":31,"night_time":10.404},{"month":9,"day":1,"night_time":10.467},{"month":9,"day":2,"night_time":10.528},{"month":9,"day":3,"night_time":10.592},{"month":9,"day":4,"night_time":10.654},{"month":9,"day":5,"night_time":10.717},{"month":9,"day":6,"night_time":10.781},{"month":9,"day":7,"night_time":10.844},{"month":9,"day":8,"night_time":10.908},{"month":9,"day":9,"night_time":10.971},{"month":9,"day":10,"night_time":11.035},{"month":9,"day":11,"night_time":11.1},{"month":9,"day":12,"night_time":11.163},{"month":9,"day":13,"night_time":11.227},{"month":9,"day":14,"night_time":11.292},{"month":9,"day":15,"night_time":11.354},{"month":9,"day":16,"night_time":11.42},{"month":9,"day":17,"night_time":11.483},{"month":9,"day":18,"night_time":11.548},{"month":9,"day":19,"night_time":11.612},{"month":9,"day":20,"night_time":11.675},{"month":9,"day":21,"night_time":11.74},{"month":9,"day":22,"night_time":11.804},{"month":9,"day":23,"night_time":11.868},{"month":9,"day":24,"night_time":11.933},{"month":9,"day":25,"night_time":11.996},{"month":9,"day":26,"night_time":12.062},{"month":9,"day":27,"night_time":12.125},{"month":9,"day":28,"night_time":12.19},{"month":9,"day":29,"night_time":12.254},{"month":9,"day":30,"night_time":12.318},{"month":10,"day":1,"night_time":12.383},{"month":10,"day":2,"night_time":12.446},{"month":10,"day":3,"night_time":12.513},{"month":10,"day":4,"night_time":12.575},{"month":10,"day":5,"night_time":12.642},{"month":10,"day":6,"night_time":12.704},{"month":10,"day":7,"night_time":12.767},{"month":10,"day":8,"night_time":12.833},{"month":10,"day":9,"night_time":12.896},{"month":10,"day":10,"night_time":12.958},{"month":10,"day":11,"night_time":13.025},{"month":10,"day":12,"night_time":13.088},{"month":10,"day":13,"night_time":13.15},{"month":10,"day":14,"night_time":13.213},{"month":10,"day":15,"night_time":13.275},{"month":10,"day":16,"night_time":13.338},{"month":10,"day":17,"night_time":13.404},{"month":10,"day":18,"night_time":13.467},{"month":10,"day":19,"night_time":13.529},{"month":10,"day":20,"night_time":13.588},{"month":10,"day":21,"night_time":13.65},{"month":10,"day":22,"night_time":13.713},{"month":10,"day":23,"night_time":13.775},{"month":10,"day":24,"night_time":13.838},{"month":10,"day":25,"night_time":13.896},{"month":10,"day":26,"night_time":13.958},{"month":10,"day":27,"night_time":14.017},{"month":10,"day":28,"night_time":14.079},{"month":10,"day":29,"night_time":14.138},{"month":10,"day":30,"night_time":14.196},{"month":10,"day":31,"night_time":14.258},{"month":11,"day":1,"night_time":14.313},{"month":11,"day":2,"night_time":14.373},{"month":11,"day":3,"night_time":14.42},{"month":11,"day":4,"night_time":14.488},{"month":11,"day":5,"night_time":14.545},{"month":11,"day":6,"night_time":14.6},{"month":11,"day":7,"night_time":14.657},{"month":11,"day":8,"night_time":14.716},{"month":11,"day":9,"night_time":14.767},{"month":11,"day":10,"night_time":14.821},{"month":11,"day":11,"night_time":14.875},{"month":11,"day":12,"night_time":14.927},{"month":11,"day":13,"night_time":14.979},{"month":11,"day":14,"night_time":15.031},{"month":11,"day":15,"night_time":15.081},{"month":11,"day":16,"night_time":15.131},{"month":11,"day":17,"night_time":15.18},{"month":11,"day":18,"night_time":15.228},{"month":11,"day":19,"night_time":15.275},{"month":11,"day":20,"night_time":15.321},{"month":11,"day":21,"night_time":15.367},{"month":11,"day":22,"night_time":15.411},{"month":11,"day":23,"night_time":15.454},{"month":11,"day":24,"night_time":15.496},{"month":11,"day":25,"night_time":15.538},{"month":11,"day":26,"night_time":15.577},{"month":11,"day":27,"night_time":15.617},{"month":11,"day":28,"night_time":15.653},{"month":11,"day":29,"night_time":15.689},{"month":11,"day":30,"night_time":15.725},{"month":12,"day":1,"night_time":15.758},{"month":12,"day":2,"night_time":15.792},{"month":12,"day":3,"night_time":15.821},{"month":12,"day":4,"night_time":15.854},{"month":12,"day":5,"night_time":15.879},{"month":12,"day":6,"night_time":15.908},{"month":12,"day":7,"night_time":15.933},{"month":12,"day":8,"night_time":15.954},{"month":12,"day":9,"night_time":15.975},{"month":12,"day":10,"night_time":15.996},{"month":12,"day":11,"night_time":16.017},{"month":12,"day":12,"night_time":16.033},{"month":12,"day":13,"night_time":16.046},{"month":12,"day":14,"night_time":16.063},{"month":12,"day":15,"night_time":16.071},{"month":12,"day":16,"night_time":16.083},{"month":12,"day":17,"night_time":16.092},{"month":12,"day":18,"night_time":16.096},{"month":12,"day":19,"night_time":16.104},{"month":12,"day":20,"night_time":16.106},{"month":12,"day":21,"night_time":16.108},{"month":12,"day":22,"night_time":16.107},{"month":12,"day":23,"night_time":16.105},{"month":12,"day":24,"night_time":16.1},{"month":12,"day":25,"night_time":16.096},{"month":12,"day":26,"night_time":16.088},{"month":12,"day":27,"night_time":16.075},{"month":12,"day":28,"night_time":16.067},{"month":12,"day":29,"night_time":16.054},{"month":12,"day":30,"night_time":16.038},{"month":12,"day":31,"night_time":16.036}]')}},[[158,1,2]]]);
//# sourceMappingURL=main.68e3d08e.chunk.js.map