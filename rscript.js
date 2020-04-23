var statusone = 0;
var statustwo = 0;
var statusthree = 0;
var statusfour = 0;
var statusall = (statusone == 0 && statustwo == 0);

var defaultLegendClickHandler = Chart.defaults.global.legend.onClick;
var removeTogether = function (e, legendItem){
  var index= legendItem.datasetIndex;
  if (index == 0) {
       // Do the original logic
       let ci = this.chart;
       [
           ci.getDatasetMeta(0),
           ci.getDatasetMeta(1),
           ci.getDatasetMeta(2)
       ].forEach(function(meta) {
           meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
       });
        ci.update();
   } else if (index == 3){
     let ci = this.chart;
     [
         ci.getDatasetMeta(3),
         ci.getDatasetMeta(4),
         ci.getDatasetMeta(5)
     ].forEach(function(meta) {
         meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
     });
      ci.update();
   } else if (index == 6){
     let ci = this.chart;
     [
         ci.getDatasetMeta(6),
         ci.getDatasetMeta(7),
         ci.getDatasetMeta(8)
     ].forEach(function(meta) {
         meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
     });
      ci.update();
   } else if (index == 9){
     let ci = this.chart;
     [
         ci.getDatasetMeta(9),
         ci.getDatasetMeta(10),
         ci.getDatasetMeta(11)
     ].forEach(function(meta) {
         meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
     });
      ci.update();
   }
   else if (index == 12){
     let ci = this.chart;
     [
         ci.getDatasetMeta(12),
         ci.getDatasetMeta(13),
         ci.getDatasetMeta(14)
     ].forEach(function(meta) {
         meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
     });
      ci.update();
   }

    else {
      defaultLegendClickHandler(e, legendItem);

   }
};

var chart = new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
      datasets: [
        {
          label: "Great Barrier Reef",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#36A8B0",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#36A8B0",
          data: [25.29,23.97,23.86,24.30,25.05,24.80,25.05,24.8,25.45,24.85,24.85,24.7,24.98,25.7,24.5,24.9,25.1,24.9,25.25,26.00,26.61,26.86,26.27,24.43],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Acidity Change of GBR",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#36A8B0",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#36A8B0",
          data: [8.092,8.091,8.089,8.087,8.085,8.084,8.081,8.079,8.077,8.075,8.074,8.07,8.069,8.067,8.065,8.063,8.061,8.060,8.058,8.056,8.055,8.055],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Coral Growth of GBR",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#36A8B0",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#36A8B0",
          data: [23.8,22,20,21,17,16,19,17,17,17,16.8,15.8,12,11,15,16,16,24,22,16,16,16],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        }  ,
        {
          label: "Mount Everest",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#56769D",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#56769D",
          pointBorderColor: "#fff",
          data: [17.7, 17.7,18.0,17.7,17.7,17.8,17.9,18.5,18.0,18.0,18.4,18.7,17.8,18.3,18.0,18.1,18.4,18.8,18.5,18.5,18.6,18.6],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "ME2",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#56769D",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#56769D",
          pointBorderColor: "#fff",
          data: [3.3,3.4,4.1,4.6,4.4,4.0,4.0,4.1,4.4,4.8,5.2,5.7,5.5,5.4,5.7,7.2,8.8,8.9,8.5,8.2,8.6,9.2],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "ME3",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#56769D",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#56769D",
          pointBorderColor: "#fff",
          data: [4,2,5,3,4,7,6,11,7,1,5,3,4,10,8,17,14,5,6,5,11,15],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Mauna Loa Volcano",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#FCC842",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#FCC842",
          pointBorderColor: "#fff",
          data: [3.68,3.69,3.71,3.73,3.75,3.77,3.78,3.81,3.83,3.85,3.87,3.88,3.91,3.93,3.95,3.97,3.99,4.02,4.06,4.07,4.11,4.13],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "MLV2",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#FCC842",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#FCC842",
          pointBorderColor: "#fff",
          data: [6.7,6.8,7.0,7.4,8.0,7.2,7.5,7.4,7.4,6.9,7.4,8.5,7.2,7.6,7.5,7.9,8.3,7.8,7.8,7.8,7.8,7.9,7.9],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "MVL3",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#FCC842",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#FCC842",
          pointBorderColor: "#fff",
          data: [43,40,37.5,38,44,40,40,41,40.5,39,38,45,41.5,42,41,40.5,40,41,42,38,39.5,38],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Sahara Desert",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#E15026",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#E15026",
          pointBorderColor: "#fff",
          data: [6,14,6,24,14,22,18,12,10,10,10,20,20,23,25,27,28,27,27,29,34,37],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "SD2",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#E15026",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#E15026",
          pointBorderColor: "#fff",
          data: [1.85,-.6,-.8,-1.8,1.1,-1.5,-.5,-.7,-1.3,.5,.1,1.2,-1.4,1.4,-.3,-.4,1.95,1.1,-.1,-1.2,-1.4,.1],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "SD3",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#E15026",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#E15026",
          pointBorderColor: "#fff",
          data: [7.0,8.2,8.3,7.7,6.7,7.7,6.9,6.6,7.6,7.7,7.4,6.7,7.8,7.1,7.6,7.4,7.3,7.3,7.3,7.3,7.3,7.3],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Amazon Rainforest",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#74B471",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#74B471",
          pointBorderColor: "#fff",
          data: [4.81,5.07,5.26,5.61,5.8,5.98,6.19,6.52,6.48,6.73,6.66,6.68,6.68,6.8,6.86,6.93,7.01,7.01,7.09,7.19],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "AR2",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#74B471",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#74B471",
          pointBorderColor: "#fff",
          data: [36.2,36.0,35.9,35.7,35.4,35.7,35.4,35.2,35.0,34.8,34.5,34.5,34.3,34.3,34.3,34.3,34.3,34.2,34.1,34,33.9,33.8,33.8],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "AR3",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#74B471",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#74B471",
          pointBorderColor: "#fff",
          data: [4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0,5.1,5.2,5.3,5.4,5.5,5.6,5.7,5.8,5.9,6.0,6.1,6.2],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Data & Your Choices'
      },
      scale: {
         ticks: {
            display: false,
            maxTicksLimit: 5,
         },
         gridLines: {
         circular: true,
       },
      },
     legend:{
       // position: 'right',
       onClick: removeTogether,
       labels: {
           usePointStyle: true,
           filter: function(item, chart) {
          // Logic to remove a particular legend item goes here
          return item.text.includes('Great Barrier Reef') || item.text.includes('Mount Everest') || item.text.includes('Mauna Loa Volcano') || item.text.includes('Amazon Rainforest') || item.text.includes('Sahara Desert')
           ;}
        },
          display: true,
     },

    }
});
  //
  // var index= chart.datasetIndex;
//
// varoneforeachbutton
//
// varjusthastoknowifthebuttonisonoroff
//
// whenbuttonischeck

document.getElementById('addData1').addEventListener('click', function() {

    if (chart.data.datasets.length > 0) {
      if (statusone == 0 && statustwo == 0) {chart.data.labels.push('3000');}
      chart.data.datasets.forEach(function(datasets,index) {

        if (statusall == true) {
          if (index == 4 && statusone == 0) { datasets.data.push(100);}
          if (index == 3 && statusone == 0) {datasets.data.push(250);}
        }
        else{
        if (index == 4 && statusone == 0) {datasets.data.pop (); datasets.data.push(100);}
      if (index == 3 && statusone == 0) {datasets.data.pop ();datasets.data.push(250);}}
    });
  statusone = 1;
  statustwo = 0;
  statusall = false;
    ;
      window.chart.update();
    }
  });

  document.getElementById('addData2').addEventListener('click', function() {
      if (chart.data.datasets.length > 0) {
        // var month = MONTHS[config.data.labels.length % MONTHS.length];
        if (statustwo == 0 && statusone == 0) {chart.data.labels.push('3000');}
        chart.data.datasets.forEach(function(datasets,index) {

          if (statusall == true){
            if (index == 4 && statustwo == 0) {datasets.data.push(40);}
            if (index == 3 && statustwo == 0 ) {datasets.data.push(60);}
          }
          else{
        if (index == 4 && statustwo == 0) {datasets.data.pop (); datasets.data.push(100);}
        if (index == 3 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(60);}}
      });
        statustwo = 1;
        statusone = 0;
        statusall = false;
      ;
        window.chart.update();
      }
    });
// function removeTogether() {
//
//   click=chart.data.datasets[0]
//
//   hidden= true for chart.data.datasets[0] and chart.data.datasets[1]
// }
//
function updatechart() {
  // chart.data.datasets[0].data = [41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62];
  chart.update();
}