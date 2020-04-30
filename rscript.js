$(function () {
    var used_numbers = new Array();
    showQ();
    showA();
    /* var todo = setInterval(showQuotes, 10000); */

    function showQ() {
        used_numbers.splice(0, used_numbers.length);
        $('.ran').hide();
        $('.question').hide();
        for (var inc = 0; inc < 1; inc++) {
            var random = get_random_number();
            $('.ran:eq(' + random + ')').show();
            $('.question:eq(' + random + ')').show();
        }
        /* $('.quotes').delay(6000).fadeOut(3000); */
    }
    // function showA() {
    //     used_numbers.splice(0, used_numbers.length);
    //     $('.ran').hide();
    //     for (var inc = 0; inc < 1; inc++) {
    //         var random = get_random_number();
    //         $('.ran:eq(' + random + ')').show();
    //     }
    //     /* $('.quotes').delay(6000).fadeOut(3000); */
    // }

    function get_random_number() {
        var number = randomFromTo(0, 4);
        if ($.inArray(number, used_numbers) != -1) {
            return get_random_number();
        } else {
            used_numbers.push(number);
            return number;
        }
    }
    function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }



    // function get_random_number() {
    //     var number = randomFromTo(0, 4);
    //     if ($.inArray(number, used_numbers) != -1) {
    //         return get_random_number();
    //     } else {
    //         used_numbers.push(number);
    //         return number;
    //     }
    // }
    // function randomFromTo(from, to) {
    //     return Math.floor(Math.random() * (to - from + 1) + from);
    // }
});

// $(function () {
//     var used_numbers = new Array();
//     showQ();
//     /* var todo = setInterval(showQuotes, 10000); */
//
//     function showQ() {
//         used_numbers.splice(0, used_numbers.length);
//         $('.ran').hide();
//         for (var inc = 0; inc < 1; inc++) {
//             var random = get_random_number();
//             $('.ran:eq(' + random + ')').show();
//         }
//         /* $('.quotes').delay(6000).fadeOut(3000); */
//     }
//
//     function get_random_number() {
//         var number = randomFromTo(0, 20);
//         if ($.inArray(number, used_numbers) != -1) {
//             return get_random_number();
//         } else {
//             used_numbers.push(number);
//             return number;
//         }
//     }
//     function randomFromTo(from, to) {
//         return Math.floor(Math.random() * (to - from + 1) + from);
//     }
// });


Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 50;
};

var statusone = 0;
var statustwo = 0;
var statusthree = 0;
var statusfour = 0;
var statusall = (statusone == 0 && statustwo == 0 && statusthree ==0);

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
          label: "Amazon Rainforest",
          name: "Deforestation",
          place: "Amazon Rainforest",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#74B471",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#74B471",
          pointBorderColor: "#fff",
          data: [4.81,5.07,5.26,5.61,5.8,5.98,6.19,6.52,6.48,6.73,6.66,6.68,6.68,6.8,6.86,6.93,7.01,7.01,7.09,7.19,7,7.2],
          pointStyle: 'line',
          hidden: false,
          notes: ["x10^5 km2 Deforestation","x10^5 km2 Deforestation","x10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation","10^5 km2 Deforestation",]
        },
        {
          label: "AR2",
          name: "Forest Coverage",
          place: "Amazon Rainforest",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#74B471",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#74B471",
          pointBorderColor: "#fff",
          data: [36.2,36.0,35.9,35.7,35.4,35.7,35.4,35.2,35.0,34.8,34.5,34.5,34.3,34.3,34.3,34.3,34.3,34.2,34.1,33.9,33.8,33.8],
          pointStyle: 'line',
          hidden: false,
          notes: ["(10^6 sq.km)","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover","x10^6 km2 Forest Cover",]
        },
        {
          label: "AR3",
          name: "Forest Fires",
          place: "Amazon Rainforest",
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
        },
        {
          label: "Great Barrier Reef",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(179,181,198,0)",
          borderColor: "#36A8B0",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#36A8B0",
          data: [25.29,23.97,23.86,24.30,25.05,24.80,25.05,24.8,25.45,24.85,24.85,24.7,24.98,25.7,24.5,24.9,25.1,24.9,25.25,26.00,26.86,24.43],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Acidity Change of GBR",
          name: "NAME",
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
          name: "NAME",
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
          label: "Mauna Loa Volcano",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#E15026",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#E15026",
          pointBorderColor: "#fff",
          data: [3.68,3.69,3.71,3.73,3.75,3.77,3.78,3.81,3.83,3.85,3.87,3.88,3.91,3.93,3.95,3.97,3.99,4.02,4.06,4.07,4.11,4.13],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "MLV2",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#E15026",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#E15026",
          pointBorderColor: "#fff",
          data: [6.7,6.8,7.0,7.4,8.0,7.2,7.5,7.4,6.9,7.4,8.5,7.2,7.6,7.5,7.9,8.3,7.8,7.8,7.8,7.8,7.9,7.9],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "MVL3",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#E15026",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#E15026",
          pointBorderColor: "#fff",
          data: [43,40,37.5,38,44,40,40,41,40.5,39,38,45,41.5,42,41,40.5,40,41,42,38,39.5,38],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "Mount Everest",
          name: "NAME",
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
          name: "NAME",
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
          name: "NAME",
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
          label: "Sahara Desert",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#FCC842",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#FCC842",
          pointBorderColor: "#fff",
          data: [6,14,6,24,14,22,18,12,10,10,10,20,20,23,25,27,28,27,27,29,34,37],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "SD2",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#FCC842",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#FCC842",
          pointBorderColor: "#fff",
          data: [1.85,-.6,-.8,-1.8,1.1,-1.5,-.5,-.7,-1.3,.5,.1,1.2,-1.4,1.4,-.3,-.4,1.95,1.1,-.1,-1.2,-1.4,.1],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        },
        {
          label: "SD3",
          name: "NAME",
          fill: true,
          backgroundColor: "rgba(255,99,132,0)",
          borderColor: "#FCC842",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#FCC842",
          pointBorderColor: "#fff",
          data: [7.0,8.2,8.3,7.7,6.7,7.7,6.9,6.6,7.6,7.7,7.4,6.7,7.8,7.1,7.6,7.4,7.3,7.3,7.3,7.3,7.3,7.3],
          pointStyle: 'line',
          hidden: false,
          notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
        }
      ]
    },
    options: {
      tooltips: {
        custom: function(tooltip) {
		        if (!tooltip) return;
		        // disable displaying the color box;
		        tooltip.displayColors = false;
		      },
        enable:true,
        // mode:'datasets',
        //Newtitle+years
        //Datapoint+Notes
        callbacks:{
          title: function(tooltipItem, data){
         var titlename = chart.data.datasets[tooltipItem[0].index].name;
         var titleyear = chart.data.labels[tooltipItem[0].index];
         return titlename + " || " + titleyear ;},
         // footer: function (tooltipItem, data){
         //   var place =chart.data.datasets[tooltipItem[0].index].place;
         //   var titleyear = chart.data.labels[tooltipItem[0].index];
         //   return place + " || " + titleyear ;},

         label: function(tooltipItem, data){
        var labelnumber = chart.data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
        var labelnotes = chart.data.datasets[tooltipItem.datasetIndex].notes[tooltipItem.index];
        return  labelnumber+ " " + labelnotes ;},
          // label: function(tooltipItems) {
          //       return data.datasets[tooltipItems.datasetIndex].data + data.datasets[tooltipItems.datasetIndex].notes;
          //     },
        }
      },
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
    layout: {
      padding: {
        top:0,
        right:400,}
    },
     legend:{
       position: 'top',
       align:'middle',
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

//DATA 1
document.getElementById('addData1').addEventListener('click', function() {

    if (chart.data.datasets.length > 0) {
      if (statusone == 0 && statustwo == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
      chart.data.datasets.forEach(function(datasets,index) {

        if (statusall == true) {
          if (index == 0 && statusone == 0) {datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) { datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) { datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.push(8);}
          if (index == 5 && statusone == 0) { datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) { datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.push(34);}
          if (index == 9 && statusone == 0) { datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) { datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.push(37);}
          if (index == 13 && statusone == 0) { datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.push(7.5);}

        }
        else{
          if (index == 0 && statusone == 0) {datasets.data.pop ();datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) {datasets.data.pop (); datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.pop (); datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) {datasets.data.pop ();datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.pop ();datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.pop (); datasets.data.push(34);}
          if (index == 9 && statusone == 0) {datasets.data.pop ();datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.pop ();datasets.data.push(37);}
          if (index == 13 && statusone == 0) {datasets.data.pop (); datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.pop (); datasets.data.push(7.5);}

        }

    });
  statusone = 1;
  statustwo = 0;
  statusthree = 0;
  statusfour = 0;
  statusall = false;
    ;
      window.chart.update();
    }
  });

  document.getElementById('addData2').addEventListener('click', function() {
      if (chart.data.datasets.length > 0) {
        // var month = MONTHS[config.data.labels.length % MONTHS.length];
        if (statustwo == 0 && statusone == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
        chart.data.datasets.forEach(function(datasets,index) {

          if (statusall == true){
            if (index == 0 && statustwo == 0) {datasets.data.push(6.8);}
            if (index == 1 && statustwo == 0 ) {datasets.data.push(34.5);}
            if (index == 2 && statustwo == 0) {datasets.data.push(5.8);}
            if (index == 3 && statustwo == 0 ) {datasets.data.push(25);}
            if (index == 4 && statustwo == 0) {datasets.data.push(8);}
            if (index == 5 && statustwo == 0 ) {datasets.data.push(18.5);}
            if (index == 6 && statustwo == 0) {datasets.data.push(4);}
            if (index == 7 && statustwo == 0 ) {datasets.data.push(7.5);}
            if (index == 8 && statustwo == 0) {datasets.data.push(18.2);}
            if (index == 9 && statustwo == 0 ) {datasets.data.push(8.8);}
            if (index == 10 && statustwo == 0) {datasets.data.push(9);}
            if (index == 11 && statustwo == 0 ) {datasets.data.push(34);}
            if (index == 12 && statustwo == 0) {datasets.data.push(0);}
            if (index == 13 && statustwo == 0 ) {datasets.data.push(60);}
            if (index == 14 && statustwo == 0) {datasets.data.push(7.2);}

          }
          else{
        if (index == 0 && statustwo == 0) {datasets.data.pop (); datasets.data.push(6.8);}
        if (index == 1 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34.5);}
        if (index == 2 && statustwo == 0) {datasets.data.pop (); datasets.data.push(5.8);}
        if (index == 3 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(25);}
        if (index == 4 && statustwo == 0) {datasets.data.pop (); datasets.data.push(8);}
        if (index == 5 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(18.5);}
        if (index == 6 && statustwo == 0) {datasets.data.pop (); datasets.data.push(4);}
        if (index == 7 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
        if (index == 8 && statustwo == 0) {datasets.data.pop (); datasets.data.push(18.2);}
        if (index == 9 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(8.8);}
        if (index == 10 && statustwo == 0) {datasets.data.pop (); datasets.data.push(9);}
        if (index == 11 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34);}
        if (index == 12 && statustwo == 0) {datasets.data.pop (); datasets.data.push(0);}
        if (index == 13&& statustwo == 0 ) {datasets.data.pop ();datasets.data.push(60);}
        if (index == 14 && statustwo == 0) {datasets.data.pop (); datasets.data.push(7.2);}


      }
      });
        statustwo = 1;
        statusone = 0;
        statusthree = 0;
        statusfour = 0;
        statusall = false;
      ;
        window.chart.update();
      }
    });

    document.getElementById('addData3').addEventListener('click', function() {
        if (chart.data.datasets.length > 0) {
          // var month = MONTHS[config.data.labels.length % MONTHS.length];
          if (statusfour == 0 && statusthree == 0 && statusone == 0 && statustwo == 0) {chart.data.labels.push('2021');}
          chart.data.datasets.forEach(function(datasets,index) {

            if (statusall == true){
              if (index == 0 && statusthree == 0) {datasets.data.push(6.5);}
              if (index == 1 && statusthree == 0 ) {datasets.data.push(34.7);}
              if (index == 2 && statusthree == 0) {datasets.data.push(6);}
              if (index == 3 && statusthree == 0 ) {datasets.data.push(24);}
              if (index == 4 && statusthree == 0) {datasets.data.push(8);}
              if (index == 5 && statusthree == 0 ) {datasets.data.push(17.);}
              if (index == 6 && statusthree == 0) {datasets.data.push(4);}
              if (index == 7 && statusthree == 0 ) {datasets.data.push(7.5);}
              if (index == 8 && statusthree == 0) {datasets.data.push(18.0);}
              if (index == 9 && statusthree == 0 ) {datasets.data.push(9);}
              if (index == 10 && statusthree == 0) {datasets.data.push(9);}
              if (index == 11 && statusthree == 0 ) {datasets.data.push(34.2);}
              if (index == 12 && statusthree == 0) {datasets.data.push(0);}
              if (index == 13 && statusthree == 0 ) {datasets.data.push(62);}
              if (index == 14 && statusthree == 0) {datasets.data.push(7.2);}

            }
            else{
          if (index == 0 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6.5);}
          if (index == 1 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.7);}
          if (index == 2 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6);}
          if (index == 3 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(24);}
          if (index == 4 && statusthree == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(17.0);}
          if (index == 6 && statusthree == 0) {datasets.data.pop (); datasets.data.push(4);}
          if (index == 7 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
          if (index == 8 && statusthree == 0) {datasets.data.pop (); datasets.data.push(18.0);}
          if (index == 9 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(9);}
          if (index == 10 && statusthree == 0) {datasets.data.pop (); datasets.data.push(9);}
          if (index == 11 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.2);}
          if (index == 12 && statusthree == 0) {datasets.data.pop (); datasets.data.push(0);}
          if (index == 13 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(62);}
          if (index == 14 && statusthree == 0) {datasets.data.pop (); datasets.data.push(7.2);}



        }
        });
          statusthree = 1;
          statusone = 0;
          statustwo = 0;
          statusfour = 0;
          statusall = false;
        ;
          window.chart.update();
        }
      });

      document.getElementById('addData4').addEventListener('click', function() {
          if (chart.data.datasets.length > 0) {
            // var month = MONTHS[config.data.labels.length % MONTHS.length];
            if (statusfour == 0 && statusone == 0 && statustwo == 0 && statusthree == 0) {chart.data.labels.push('2021');}
            chart.data.datasets.forEach(function(datasets,index) {

              if (statusall == true){
                if (index == 0 && statusfour == 0) {datasets.data.push(7.4);}
                if (index == 1 && statusfour == 0) { datasets.data.push(30);}
                if (index == 2 && statusfour == 0) {datasets.data.push(6.8);}
                if (index == 3 && statusfour == 0) { datasets.data.push(23);}
                if (index == 4 && statusfour == 0) {datasets.data.push(8);}
                if (index == 5 && statusfour == 0) { datasets.data.push(12);}
                if (index == 6 && statusfour == 0) {datasets.data.push(4.5);}
                if (index == 7 && statusfour == 0) { datasets.data.push(8.3);}
                if (index == 8 && statusfour == 0) {datasets.data.push(34);}
                if (index == 9 && statusfour == 0) { datasets.data.push(19);}
                if (index == 10 && statusfour == 0) {datasets.data.push(8.8);}
                if (index == 11 && statusfour == 0) { datasets.data.push(12);}
                if (index == 12 && statusfour == 0) {datasets.data.push(37);}
                if (index == 13 && statusfour == 0) { datasets.data.push(-1);}
                if (index == 14 && statusfour == 0) {datasets.data.push(7.5);}

              }
              else{
            if (index == 0 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.4);}
            if (index == 1 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(30);}
            if (index == 2 && statusfour == 0) {datasets.data.pop (); datasets.data.push(6.8);}
            if (index == 3 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(23);}
            if (index == 4 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8);}
            if (index == 5 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 6 && statusfour == 0) {datasets.data.pop (); datasets.data.push(4.5);}
            if (index == 7 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(8.3);}
            if (index == 8 && statusfour == 0) {datasets.data.pop (); datasets.data.push(34);}
            if (index == 9 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(19);}
            if (index == 10 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8.8);}
            if (index == 11 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 12 && statusfour == 0) {datasets.data.pop (); datasets.data.push(37);}
            if (index == 13 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(-1);}
            if (index == 14 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.5);}

          }
          });
            statusfour = 1;
            statusone = 0;
            statustwo = 0;
            statusthree = 0;
            statusall = false;
          ;
            window.chart.update();
          }
        });
//DATA@
document.getElementById('addDatb1').addEventListener('click', function() {

    if (chart.data.datasets.length > 0) {
      if (statusone == 0 && statustwo == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
      chart.data.datasets.forEach(function(datasets,index) {

        if (statusall == true) {
          if (index == 0 && statusone == 0) {datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) { datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) { datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.push(8);}
          if (index == 5 && statusone == 0) { datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) { datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.push(34);}
          if (index == 9 && statusone == 0) { datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) { datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.push(37);}
          if (index == 13 && statusone == 0) { datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.push(7.5);}

        }
        else{
          if (index == 0 && statusone == 0) {datasets.data.pop ();datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) {datasets.data.pop (); datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.pop (); datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) {datasets.data.pop ();datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.pop ();datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.pop (); datasets.data.push(34);}
          if (index == 9 && statusone == 0) {datasets.data.pop ();datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.pop ();datasets.data.push(37);}
          if (index == 13 && statusone == 0) {datasets.data.pop (); datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.pop (); datasets.data.push(7.5);}

        }

    });
  statusone = 1;
  statustwo = 0;
  statusthree = 0;
  statusfour = 0;
  statusall = false;
    ;
      window.chart.update();
    }
  });

  document.getElementById('addDatb2').addEventListener('click', function() {
      if (chart.data.datasets.length > 0) {
        // var month = MONTHS[config.data.labels.length % MONTHS.length];
        if (statustwo == 0 && statusone == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
        chart.data.datasets.forEach(function(datasets,index) {

          if (statusall == true){
            if (index == 0 && statustwo == 0) {datasets.data.push(6.8);}
            if (index == 1 && statustwo == 0 ) {datasets.data.push(34.5);}
            if (index == 2 && statustwo == 0) {datasets.data.push(5.8);}
            if (index == 3 && statustwo == 0 ) {datasets.data.push(25);}
            if (index == 4 && statustwo == 0) {datasets.data.push(8);}
            if (index == 5 && statustwo == 0 ) {datasets.data.push(18.5);}
            if (index == 6 && statustwo == 0) {datasets.data.push(4);}
            if (index == 7 && statustwo == 0 ) {datasets.data.push(7.5);}
            if (index == 8 && statustwo == 0) {datasets.data.push(18.2);}
            if (index == 9 && statustwo == 0 ) {datasets.data.push(8.8);}
            if (index == 10 && statustwo == 0) {datasets.data.push(9);}
            if (index == 11 && statustwo == 0 ) {datasets.data.push(34);}
            if (index == 12 && statustwo == 0) {datasets.data.push(0);}
            if (index == 13 && statustwo == 0 ) {datasets.data.push(60);}
            if (index == 14 && statustwo == 0) {datasets.data.push(7.2);}

          }
          else{
        if (index == 0 && statustwo == 0) {datasets.data.pop (); datasets.data.push(6.8);}
        if (index == 1 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34.5);}
        if (index == 2 && statustwo == 0) {datasets.data.pop (); datasets.data.push(5.8);}
        if (index == 3 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(25);}
        if (index == 4 && statustwo == 0) {datasets.data.pop (); datasets.data.push(8);}
        if (index == 5 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(18.5);}
        if (index == 6 && statustwo == 0) {datasets.data.pop (); datasets.data.push(4);}
        if (index == 7 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
        if (index == 8 && statustwo == 0) {datasets.data.pop (); datasets.data.push(18.2);}
        if (index == 9 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(8.8);}
        if (index == 10 && statustwo == 0) {datasets.data.pop (); datasets.data.push(9);}
        if (index == 11 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34);}
        if (index == 12 && statustwo == 0) {datasets.data.pop (); datasets.data.push(0);}
        if (index == 13&& statustwo == 0 ) {datasets.data.pop ();datasets.data.push(60);}
        if (index == 14 && statustwo == 0) {datasets.data.pop (); datasets.data.push(7.2);}


      }
      });
        statustwo = 1;
        statusone = 0;
        statusthree = 0;
        statusfour = 0;
        statusall = false;
      ;
        window.chart.update();
      }
    });

    document.getElementById('addDatb3').addEventListener('click', function() {
        if (chart.data.datasets.length > 0) {
          // var month = MONTHS[config.data.labels.length % MONTHS.length];
          if (statusfour == 0 && statusthree == 0 && statusone == 0 && statustwo == 0) {chart.data.labels.push('2021');}
          chart.data.datasets.forEach(function(datasets,index) {

            if (statusall == true){
              if (index == 0 && statusthree == 0) {datasets.data.push(6.5);}
              if (index == 1 && statusthree == 0 ) {datasets.data.push(34.7);}
              if (index == 2 && statusthree == 0) {datasets.data.push(6);}
              if (index == 3 && statusthree == 0 ) {datasets.data.push(24);}
              if (index == 4 && statusthree == 0) {datasets.data.push(8);}
              if (index == 5 && statusthree == 0 ) {datasets.data.push(17.);}
              if (index == 6 && statusthree == 0) {datasets.data.push(4);}
              if (index == 7 && statusthree == 0 ) {datasets.data.push(7.5);}
              if (index == 8 && statusthree == 0) {datasets.data.push(18.0);}
              if (index == 9 && statusthree == 0 ) {datasets.data.push(9);}
              if (index == 10 && statusthree == 0) {datasets.data.push(9);}
              if (index == 11 && statusthree == 0 ) {datasets.data.push(34.2);}
              if (index == 12 && statusthree == 0) {datasets.data.push(0);}
              if (index == 13 && statusthree == 0 ) {datasets.data.push(62);}
              if (index == 14 && statusthree == 0) {datasets.data.push(7.2);}

            }
            else{
          if (index == 0 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6.5);}
          if (index == 1 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.7);}
          if (index == 2 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6);}
          if (index == 3 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(24);}
          if (index == 4 && statusthree == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(17.0);}
          if (index == 6 && statusthree == 0) {datasets.data.pop (); datasets.data.push(4);}
          if (index == 7 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
          if (index == 8 && statusthree == 0) {datasets.data.pop (); datasets.data.push(18.0);}
          if (index == 9 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(9);}
          if (index == 10 && statusthree == 0) {datasets.data.pop (); datasets.data.push(9);}
          if (index == 11 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.2);}
          if (index == 12 && statusthree == 0) {datasets.data.pop (); datasets.data.push(0);}
          if (index == 13 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(62);}
          if (index == 14 && statusthree == 0) {datasets.data.pop (); datasets.data.push(7.2);}



        }
        });
          statusthree = 1;
          statusone = 0;
          statustwo = 0;
          statusfour = 0;
          statusall = false;
        ;
          window.chart.update();
        }
      });

      document.getElementById('addDatb4').addEventListener('click', function() {
          if (chart.data.datasets.length > 0) {
            // var month = MONTHS[config.data.labels.length % MONTHS.length];
            if (statusfour == 0 && statusone == 0 && statustwo == 0 && statusthree == 0) {chart.data.labels.push('2021');}
            chart.data.datasets.forEach(function(datasets,index) {

              if (statusall == true){
                if (index == 0 && statusfour == 0) {datasets.data.push(7.4);}
                if (index == 1 && statusfour == 0) { datasets.data.push(30);}
                if (index == 2 && statusfour == 0) {datasets.data.push(6.8);}
                if (index == 3 && statusfour == 0) { datasets.data.push(23);}
                if (index == 4 && statusfour == 0) {datasets.data.push(8);}
                if (index == 5 && statusfour == 0) { datasets.data.push(12);}
                if (index == 6 && statusfour == 0) {datasets.data.push(4.5);}
                if (index == 7 && statusfour == 0) { datasets.data.push(8.3);}
                if (index == 8 && statusfour == 0) {datasets.data.push(34);}
                if (index == 9 && statusfour == 0) { datasets.data.push(19);}
                if (index == 10 && statusfour == 0) {datasets.data.push(8.8);}
                if (index == 11 && statusfour == 0) { datasets.data.push(12);}
                if (index == 12 && statusfour == 0) {datasets.data.push(37);}
                if (index == 13 && statusfour == 0) { datasets.data.push(-1);}
                if (index == 14 && statusfour == 0) {datasets.data.push(7.5);}

              }
              else{
            if (index == 0 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.4);}
            if (index == 1 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(30);}
            if (index == 2 && statusfour == 0) {datasets.data.pop (); datasets.data.push(6.8);}
            if (index == 3 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(23);}
            if (index == 4 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8);}
            if (index == 5 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 6 && statusfour == 0) {datasets.data.pop (); datasets.data.push(4.5);}
            if (index == 7 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(8.3);}
            if (index == 8 && statusfour == 0) {datasets.data.pop (); datasets.data.push(34);}
            if (index == 9 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(19);}
            if (index == 10 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8.8);}
            if (index == 11 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 12 && statusfour == 0) {datasets.data.pop (); datasets.data.push(37);}
            if (index == 13 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(-1);}
            if (index == 14 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.5);}

          }
          });
            statusfour = 1;
            statusone = 0;
            statustwo = 0;
            statusthree = 0;
            statusall = false;
          ;
            window.chart.update();
          }
        });
//DATA3
        document.getElementById('addDatc1').addEventListener('click', function() {

            if (chart.data.datasets.length > 0) {
              if (statusone == 0 && statustwo == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
              chart.data.datasets.forEach(function(datasets,index) {

                if (statusall == true) {
                  if (index == 0 && statusone == 0) {datasets.data.push(7.4);}
                  if (index == 1 && statusone == 0) { datasets.data.push(30);}
                  if (index == 2 && statusone == 0) {datasets.data.push(6.8);}
                  if (index == 3 && statusone == 0) { datasets.data.push(23);}
                  if (index == 4 && statusone == 0) {datasets.data.push(8);}
                  if (index == 5 && statusone == 0) { datasets.data.push(12);}
                  if (index == 6 && statusone == 0) {datasets.data.push(4.5);}
                  if (index == 7 && statusone == 0) { datasets.data.push(8.3);}
                  if (index == 8 && statusone == 0) {datasets.data.push(34);}
                  if (index == 9 && statusone == 0) { datasets.data.push(19);}
                  if (index == 10 && statusone == 0) {datasets.data.push(8.8);}
                  if (index == 11 && statusone == 0) { datasets.data.push(12);}
                  if (index == 12 && statusone == 0) {datasets.data.push(37);}
                  if (index == 13 && statusone == 0) { datasets.data.push(-1);}
                  if (index == 14 && statusone == 0) {datasets.data.push(7.5);}

                }
                else{
                  if (index == 0 && statusone == 0) {datasets.data.pop ();datasets.data.push(7.4);}
                  if (index == 1 && statusone == 0) {datasets.data.pop (); datasets.data.push(30);}
                  if (index == 2 && statusone == 0) {datasets.data.pop (); datasets.data.push(6.8);}
                  if (index == 3 && statusone == 0) {datasets.data.pop ();datasets.data.push(23);}
                  if (index == 4 && statusone == 0) {datasets.data.pop (); datasets.data.push(8);}
                  if (index == 5 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
                  if (index == 6 && statusone == 0) {datasets.data.pop ();datasets.data.push(4.5);}
                  if (index == 7 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.3);}
                  if (index == 8 && statusone == 0) {datasets.data.pop (); datasets.data.push(34);}
                  if (index == 9 && statusone == 0) {datasets.data.pop ();datasets.data.push(19);}
                  if (index == 10 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.8);}
                  if (index == 11 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
                  if (index == 12 && statusone == 0) {datasets.data.pop ();datasets.data.push(37);}
                  if (index == 13 && statusone == 0) {datasets.data.pop (); datasets.data.push(-1);}
                  if (index == 14 && statusone == 0) {datasets.data.pop (); datasets.data.push(7.5);}

                }

            });
          statusone = 1;
          statustwo = 0;
          statusthree = 0;
          statusfour = 0;
          statusall = false;
            ;
              window.chart.update();
            }
          });

          document.getElementById('addDatc2').addEventListener('click', function() {
              if (chart.data.datasets.length > 0) {
                // var month = MONTHS[config.data.labels.length % MONTHS.length];
                if (statustwo == 0 && statusone == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
                chart.data.datasets.forEach(function(datasets,index) {

                  if (statusall == true){
                    if (index == 0 && statustwo == 0) {datasets.data.push(6.8);}
                    if (index == 1 && statustwo == 0 ) {datasets.data.push(34.5);}
                    if (index == 2 && statustwo == 0) {datasets.data.push(5.8);}
                    if (index == 3 && statustwo == 0 ) {datasets.data.push(25);}
                    if (index == 4 && statustwo == 0) {datasets.data.push(8);}
                    if (index == 5 && statustwo == 0 ) {datasets.data.push(18.5);}
                    if (index == 6 && statustwo == 0) {datasets.data.push(4);}
                    if (index == 7 && statustwo == 0 ) {datasets.data.push(7.5);}
                    if (index == 8 && statustwo == 0) {datasets.data.push(18.2);}
                    if (index == 9 && statustwo == 0 ) {datasets.data.push(8.8);}
                    if (index == 10 && statustwo == 0) {datasets.data.push(9);}
                    if (index == 11 && statustwo == 0 ) {datasets.data.push(34);}
                    if (index == 12 && statustwo == 0) {datasets.data.push(0);}
                    if (index == 13 && statustwo == 0 ) {datasets.data.push(60);}
                    if (index == 14 && statustwo == 0) {datasets.data.push(7.2);}

                  }
                  else{
                if (index == 0 && statustwo == 0) {datasets.data.pop (); datasets.data.push(6.8);}
                if (index == 1 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34.5);}
                if (index == 2 && statustwo == 0) {datasets.data.pop (); datasets.data.push(5.8);}
                if (index == 3 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(25);}
                if (index == 4 && statustwo == 0) {datasets.data.pop (); datasets.data.push(8);}
                if (index == 5 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(18.5);}
                if (index == 6 && statustwo == 0) {datasets.data.pop (); datasets.data.push(4);}
                if (index == 7 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
                if (index == 8 && statustwo == 0) {datasets.data.pop (); datasets.data.push(18.2);}
                if (index == 9 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(8.8);}
                if (index == 10 && statustwo == 0) {datasets.data.pop (); datasets.data.push(9);}
                if (index == 11 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34);}
                if (index == 12 && statustwo == 0) {datasets.data.pop (); datasets.data.push(0);}
                if (index == 13&& statustwo == 0 ) {datasets.data.pop ();datasets.data.push(60);}
                if (index == 14 && statustwo == 0) {datasets.data.pop (); datasets.data.push(7.2);}


              }
              });
                statustwo = 1;
                statusone = 0;
                statusthree = 0;
                statusfour = 0;
                statusall = false;
              ;
                window.chart.update();
              }
            });

            document.getElementById('addDatc3').addEventListener('click', function() {
                if (chart.data.datasets.length > 0) {
                  // var month = MONTHS[config.data.labels.length % MONTHS.length];
                  if (statusfour == 0 && statusthree == 0 && statusone == 0 && statustwo == 0) {chart.data.labels.push('2021');}
                  chart.data.datasets.forEach(function(datasets,index) {

                    if (statusall == true){
                      if (index == 0 && statusthree == 0) {datasets.data.push(6.5);}
                      if (index == 1 && statusthree == 0 ) {datasets.data.push(34.7);}
                      if (index == 2 && statusthree == 0) {datasets.data.push(6);}
                      if (index == 3 && statusthree == 0 ) {datasets.data.push(24);}
                      if (index == 4 && statusthree == 0) {datasets.data.push(8);}
                      if (index == 5 && statusthree == 0 ) {datasets.data.push(17.);}
                      if (index == 6 && statusthree == 0) {datasets.data.push(4);}
                      if (index == 7 && statusthree == 0 ) {datasets.data.push(7.5);}
                      if (index == 8 && statusthree == 0) {datasets.data.push(18.0);}
                      if (index == 9 && statusthree == 0 ) {datasets.data.push(9);}
                      if (index == 10 && statusthree == 0) {datasets.data.push(9);}
                      if (index == 11 && statusthree == 0 ) {datasets.data.push(34.2);}
                      if (index == 12 && statusthree == 0) {datasets.data.push(0);}
                      if (index == 13 && statusthree == 0 ) {datasets.data.push(62);}
                      if (index == 14 && statusthree == 0) {datasets.data.push(7.2);}

                    }
                    else{
                  if (index == 0 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6.5);}
                  if (index == 1 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.7);}
                  if (index == 2 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6);}
                  if (index == 3 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(24);}
                  if (index == 4 && statusthree == 0) {datasets.data.pop (); datasets.data.push(8);}
                  if (index == 5 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(17.0);}
                  if (index == 6 && statusthree == 0) {datasets.data.pop (); datasets.data.push(4);}
                  if (index == 7 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
                  if (index == 8 && statusthree == 0) {datasets.data.pop (); datasets.data.push(18.0);}
                  if (index == 9 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(9);}
                  if (index == 10 && statusthree == 0) {datasets.data.pop (); datasets.data.push(9);}
                  if (index == 11 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.2);}
                  if (index == 12 && statusthree == 0) {datasets.data.pop (); datasets.data.push(0);}
                  if (index == 13 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(62);}
                  if (index == 14 && statusthree == 0) {datasets.data.pop (); datasets.data.push(7.2);}



                }
                });
                  statusthree = 1;
                  statusone = 0;
                  statustwo = 0;
                  statusfour = 0;
                  statusall = false;
                ;
                  window.chart.update();
                }
              });

              document.getElementById('addDatc4').addEventListener('click', function() {
                  if (chart.data.datasets.length > 0) {
                    // var month = MONTHS[config.data.labels.length % MONTHS.length];
                    if (statusfour == 0 && statusone == 0 && statustwo == 0 && statusthree == 0) {chart.data.labels.push('2021');}
                    chart.data.datasets.forEach(function(datasets,index) {

                      if (statusall == true){
                        if (index == 0 && statusfour == 0) {datasets.data.push(7.4);}
                        if (index == 1 && statusfour == 0) { datasets.data.push(30);}
                        if (index == 2 && statusfour == 0) {datasets.data.push(6.8);}
                        if (index == 3 && statusfour == 0) { datasets.data.push(23);}
                        if (index == 4 && statusfour == 0) {datasets.data.push(8);}
                        if (index == 5 && statusfour == 0) { datasets.data.push(12);}
                        if (index == 6 && statusfour == 0) {datasets.data.push(4.5);}
                        if (index == 7 && statusfour == 0) { datasets.data.push(8.3);}
                        if (index == 8 && statusfour == 0) {datasets.data.push(34);}
                        if (index == 9 && statusfour == 0) { datasets.data.push(19);}
                        if (index == 10 && statusfour == 0) {datasets.data.push(8.8);}
                        if (index == 11 && statusfour == 0) { datasets.data.push(12);}
                        if (index == 12 && statusfour == 0) {datasets.data.push(37);}
                        if (index == 13 && statusfour == 0) { datasets.data.push(-1);}
                        if (index == 14 && statusfour == 0) {datasets.data.push(7.5);}

                      }
                      else{
                    if (index == 0 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.4);}
                    if (index == 1 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(30);}
                    if (index == 2 && statusfour == 0) {datasets.data.pop (); datasets.data.push(6.8);}
                    if (index == 3 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(23);}
                    if (index == 4 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8);}
                    if (index == 5 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
                    if (index == 6 && statusfour == 0) {datasets.data.pop (); datasets.data.push(4.5);}
                    if (index == 7 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(8.3);}
                    if (index == 8 && statusfour == 0) {datasets.data.pop (); datasets.data.push(34);}
                    if (index == 9 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(19);}
                    if (index == 10 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8.8);}
                    if (index == 11 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
                    if (index == 12 && statusfour == 0) {datasets.data.pop (); datasets.data.push(37);}
                    if (index == 13 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(-1);}
                    if (index == 14 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.5);}

                  }
                  });
                    statusfour = 1;
                    statusone = 0;
                    statustwo = 0;
                    statusthree = 0;
                    statusall = false;
                  ;
                    window.chart.update();
                  }
                });

//DATA4
document.getElementById('addDatd1').addEventListener('click', function() {

    if (chart.data.datasets.length > 0) {
      if (statusone == 0 && statustwo == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
      chart.data.datasets.forEach(function(datasets,index) {

        if (statusall == true) {
          if (index == 0 && statusone == 0) {datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) { datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) { datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.push(8);}
          if (index == 5 && statusone == 0) { datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) { datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.push(34);}
          if (index == 9 && statusone == 0) { datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) { datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.push(37);}
          if (index == 13 && statusone == 0) { datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.push(7.5);}

        }
        else{
          if (index == 0 && statusone == 0) {datasets.data.pop ();datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) {datasets.data.pop (); datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.pop (); datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) {datasets.data.pop ();datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.pop ();datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.pop (); datasets.data.push(34);}
          if (index == 9 && statusone == 0) {datasets.data.pop ();datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.pop ();datasets.data.push(37);}
          if (index == 13 && statusone == 0) {datasets.data.pop (); datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.pop (); datasets.data.push(7.5);}

        }

    });
  statusone = 1;
  statustwo = 0;
  statusthree = 0;
  statusfour = 0;
  statusall = false;
    ;
      window.chart.update();
    }
  });

  document.getElementById('addDatd2').addEventListener('click', function() {
      if (chart.data.datasets.length > 0) {
        // var month = MONTHS[config.data.labels.length % MONTHS.length];
        if (statustwo == 0 && statusone == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
        chart.data.datasets.forEach(function(datasets,index) {

          if (statusall == true){
            if (index == 0 && statustwo == 0) {datasets.data.push(6.8);}
            if (index == 1 && statustwo == 0 ) {datasets.data.push(34.5);}
            if (index == 2 && statustwo == 0) {datasets.data.push(5.8);}
            if (index == 3 && statustwo == 0 ) {datasets.data.push(25);}
            if (index == 4 && statustwo == 0) {datasets.data.push(8);}
            if (index == 5 && statustwo == 0 ) {datasets.data.push(18.5);}
            if (index == 6 && statustwo == 0) {datasets.data.push(4);}
            if (index == 7 && statustwo == 0 ) {datasets.data.push(7.5);}
            if (index == 8 && statustwo == 0) {datasets.data.push(18.2);}
            if (index == 9 && statustwo == 0 ) {datasets.data.push(8.8);}
            if (index == 10 && statustwo == 0) {datasets.data.push(9);}
            if (index == 11 && statustwo == 0 ) {datasets.data.push(34);}
            if (index == 12 && statustwo == 0) {datasets.data.push(0);}
            if (index == 13 && statustwo == 0 ) {datasets.data.push(60);}
            if (index == 14 && statustwo == 0) {datasets.data.push(7.2);}

          }
          else{
        if (index == 0 && statustwo == 0) {datasets.data.pop (); datasets.data.push(6.8);}
        if (index == 1 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34.5);}
        if (index == 2 && statustwo == 0) {datasets.data.pop (); datasets.data.push(5.8);}
        if (index == 3 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(25);}
        if (index == 4 && statustwo == 0) {datasets.data.pop (); datasets.data.push(8);}
        if (index == 5 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(18.5);}
        if (index == 6 && statustwo == 0) {datasets.data.pop (); datasets.data.push(4);}
        if (index == 7 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
        if (index == 8 && statustwo == 0) {datasets.data.pop (); datasets.data.push(18.2);}
        if (index == 9 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(8.8);}
        if (index == 10 && statustwo == 0) {datasets.data.pop (); datasets.data.push(9);}
        if (index == 11 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34);}
        if (index == 12 && statustwo == 0) {datasets.data.pop (); datasets.data.push(0);}
        if (index == 13&& statustwo == 0 ) {datasets.data.pop ();datasets.data.push(60);}
        if (index == 14 && statustwo == 0) {datasets.data.pop (); datasets.data.push(7.2);}


      }
      });
        statustwo = 1;
        statusone = 0;
        statusthree = 0;
        statusfour = 0;
        statusall = false;
      ;
        window.chart.update();
      }
    });

    document.getElementById('addDatd3').addEventListener('click', function() {
        if (chart.data.datasets.length > 0) {
          // var month = MONTHS[config.data.labels.length % MONTHS.length];
          if (statusfour == 0 && statusthree == 0 && statusone == 0 && statustwo == 0) {chart.data.labels.push('2021');}
          chart.data.datasets.forEach(function(datasets,index) {

            if (statusall == true){
              if (index == 0 && statusthree == 0) {datasets.data.push(6.5);}
              if (index == 1 && statusthree == 0 ) {datasets.data.push(34.7);}
              if (index == 2 && statusthree == 0) {datasets.data.push(6);}
              if (index == 3 && statusthree == 0 ) {datasets.data.push(24);}
              if (index == 4 && statusthree == 0) {datasets.data.push(8);}
              if (index == 5 && statusthree == 0 ) {datasets.data.push(17.);}
              if (index == 6 && statusthree == 0) {datasets.data.push(4);}
              if (index == 7 && statusthree == 0 ) {datasets.data.push(7.5);}
              if (index == 8 && statusthree == 0) {datasets.data.push(18.0);}
              if (index == 9 && statusthree == 0 ) {datasets.data.push(9);}
              if (index == 10 && statusthree == 0) {datasets.data.push(9);}
              if (index == 11 && statusthree == 0 ) {datasets.data.push(34.2);}
              if (index == 12 && statusthree == 0) {datasets.data.push(0);}
              if (index == 13 && statusthree == 0 ) {datasets.data.push(62);}
              if (index == 14 && statusthree == 0) {datasets.data.push(7.2);}

            }
            else{
          if (index == 0 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6.5);}
          if (index == 1 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.7);}
          if (index == 2 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6);}
          if (index == 3 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(24);}
          if (index == 4 && statusthree == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(17.0);}
          if (index == 6 && statusthree == 0) {datasets.data.pop (); datasets.data.push(4);}
          if (index == 7 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
          if (index == 8 && statusthree == 0) {datasets.data.pop (); datasets.data.push(18.0);}
          if (index == 9 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(9);}
          if (index == 10 && statusthree == 0) {datasets.data.pop (); datasets.data.push(9);}
          if (index == 11 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.2);}
          if (index == 12 && statusthree == 0) {datasets.data.pop (); datasets.data.push(0);}
          if (index == 13 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(62);}
          if (index == 14 && statusthree == 0) {datasets.data.pop (); datasets.data.push(7.2);}



        }
        });
          statusthree = 1;
          statusone = 0;
          statustwo = 0;
          statusfour = 0;
          statusall = false;
        ;
          window.chart.update();
        }
      });

      document.getElementById('addDatd4').addEventListener('click', function() {
          if (chart.data.datasets.length > 0) {
            // var month = MONTHS[config.data.labels.length % MONTHS.length];
            if (statusfour == 0 && statusone == 0 && statustwo == 0 && statusthree == 0) {chart.data.labels.push('2021');}
            chart.data.datasets.forEach(function(datasets,index) {

              if (statusall == true){
                if (index == 0 && statusfour == 0) {datasets.data.push(7.4);}
                if (index == 1 && statusfour == 0) { datasets.data.push(30);}
                if (index == 2 && statusfour == 0) {datasets.data.push(6.8);}
                if (index == 3 && statusfour == 0) { datasets.data.push(23);}
                if (index == 4 && statusfour == 0) {datasets.data.push(8);}
                if (index == 5 && statusfour == 0) { datasets.data.push(12);}
                if (index == 6 && statusfour == 0) {datasets.data.push(4.5);}
                if (index == 7 && statusfour == 0) { datasets.data.push(8.3);}
                if (index == 8 && statusfour == 0) {datasets.data.push(34);}
                if (index == 9 && statusfour == 0) { datasets.data.push(19);}
                if (index == 10 && statusfour == 0) {datasets.data.push(8.8);}
                if (index == 11 && statusfour == 0) { datasets.data.push(12);}
                if (index == 12 && statusfour == 0) {datasets.data.push(37);}
                if (index == 13 && statusfour == 0) { datasets.data.push(-1);}
                if (index == 14 && statusfour == 0) {datasets.data.push(7.5);}

              }
              else{
            if (index == 0 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.4);}
            if (index == 1 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(30);}
            if (index == 2 && statusfour == 0) {datasets.data.pop (); datasets.data.push(6.8);}
            if (index == 3 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(23);}
            if (index == 4 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8);}
            if (index == 5 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 6 && statusfour == 0) {datasets.data.pop (); datasets.data.push(4.5);}
            if (index == 7 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(8.3);}
            if (index == 8 && statusfour == 0) {datasets.data.pop (); datasets.data.push(34);}
            if (index == 9 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(19);}
            if (index == 10 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8.8);}
            if (index == 11 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 12 && statusfour == 0) {datasets.data.pop (); datasets.data.push(37);}
            if (index == 13 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(-1);}
            if (index == 14 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.5);}

          }
          });
            statusfour = 1;
            statusone = 0;
            statustwo = 0;
            statusthree = 0;
            statusall = false;
          ;
            window.chart.update();
          }
        });
//DATA5
document.getElementById('addDate1').addEventListener('click', function() {

    if (chart.data.datasets.length > 0) {
      if (statusone == 0 && statustwo == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
      chart.data.datasets.forEach(function(datasets,index) {

        if (statusall == true) {
          if (index == 0 && statusone == 0) {datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) { datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) { datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.push(8);}
          if (index == 5 && statusone == 0) { datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) { datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.push(34);}
          if (index == 9 && statusone == 0) { datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) { datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.push(37);}
          if (index == 13 && statusone == 0) { datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.push(7.5);}

        }
        else{
          if (index == 0 && statusone == 0) {datasets.data.pop ();datasets.data.push(7.4);}
          if (index == 1 && statusone == 0) {datasets.data.pop (); datasets.data.push(30);}
          if (index == 2 && statusone == 0) {datasets.data.pop (); datasets.data.push(6.8);}
          if (index == 3 && statusone == 0) {datasets.data.pop ();datasets.data.push(23);}
          if (index == 4 && statusone == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 6 && statusone == 0) {datasets.data.pop ();datasets.data.push(4.5);}
          if (index == 7 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.3);}
          if (index == 8 && statusone == 0) {datasets.data.pop (); datasets.data.push(34);}
          if (index == 9 && statusone == 0) {datasets.data.pop ();datasets.data.push(19);}
          if (index == 10 && statusone == 0) {datasets.data.pop (); datasets.data.push(8.8);}
          if (index == 11 && statusone == 0) {datasets.data.pop (); datasets.data.push(12);}
          if (index == 12 && statusone == 0) {datasets.data.pop ();datasets.data.push(37);}
          if (index == 13 && statusone == 0) {datasets.data.pop (); datasets.data.push(-1);}
          if (index == 14 && statusone == 0) {datasets.data.pop (); datasets.data.push(7.5);}

        }

    });
  statusone = 1;
  statustwo = 0;
  statusthree = 0;
  statusfour = 0;
  statusall = false;
    ;
      window.chart.update();
    }
  });

  document.getElementById('addDate2').addEventListener('click', function() {
      if (chart.data.datasets.length > 0) {
        // var month = MONTHS[config.data.labels.length % MONTHS.length];
        if (statustwo == 0 && statusone == 0 && statusthree == 0 && statusfour == 0) {chart.data.labels.push('2021');}
        chart.data.datasets.forEach(function(datasets,index) {

          if (statusall == true){
            if (index == 0 && statustwo == 0) {datasets.data.push(6.8);}
            if (index == 1 && statustwo == 0 ) {datasets.data.push(34.5);}
            if (index == 2 && statustwo == 0) {datasets.data.push(5.8);}
            if (index == 3 && statustwo == 0 ) {datasets.data.push(25);}
            if (index == 4 && statustwo == 0) {datasets.data.push(8);}
            if (index == 5 && statustwo == 0 ) {datasets.data.push(18.5);}
            if (index == 6 && statustwo == 0) {datasets.data.push(4);}
            if (index == 7 && statustwo == 0 ) {datasets.data.push(7.5);}
            if (index == 8 && statustwo == 0) {datasets.data.push(18.2);}
            if (index == 9 && statustwo == 0 ) {datasets.data.push(8.8);}
            if (index == 10 && statustwo == 0) {datasets.data.push(9);}
            if (index == 11 && statustwo == 0 ) {datasets.data.push(34);}
            if (index == 12 && statustwo == 0) {datasets.data.push(0);}
            if (index == 13 && statustwo == 0 ) {datasets.data.push(60);}
            if (index == 14 && statustwo == 0) {datasets.data.push(7.2);}

          }
          else{
        if (index == 0 && statustwo == 0) {datasets.data.pop (); datasets.data.push(6.8);}
        if (index == 1 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34.5);}
        if (index == 2 && statustwo == 0) {datasets.data.pop (); datasets.data.push(5.8);}
        if (index == 3 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(25);}
        if (index == 4 && statustwo == 0) {datasets.data.pop (); datasets.data.push(8);}
        if (index == 5 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(18.5);}
        if (index == 6 && statustwo == 0) {datasets.data.pop (); datasets.data.push(4);}
        if (index == 7 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
        if (index == 8 && statustwo == 0) {datasets.data.pop (); datasets.data.push(18.2);}
        if (index == 9 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(8.8);}
        if (index == 10 && statustwo == 0) {datasets.data.pop (); datasets.data.push(9);}
        if (index == 11 && statustwo == 0 ) {datasets.data.pop ();datasets.data.push(34);}
        if (index == 12 && statustwo == 0) {datasets.data.pop (); datasets.data.push(0);}
        if (index == 13&& statustwo == 0 ) {datasets.data.pop ();datasets.data.push(60);}
        if (index == 14 && statustwo == 0) {datasets.data.pop (); datasets.data.push(7.2);}


      }
      });
        statustwo = 1;
        statusone = 0;
        statusthree = 0;
        statusfour = 0;
        statusall = false;
      ;
        window.chart.update();
      }
    });

    document.getElementById('addDate3').addEventListener('click', function() {
        if (chart.data.datasets.length > 0) {
          // var month = MONTHS[config.data.labels.length % MONTHS.length];
          if (statusfour == 0 && statusthree == 0 && statusone == 0 && statustwo == 0) {chart.data.labels.push('2021');}
          chart.data.datasets.forEach(function(datasets,index) {

            if (statusall == true){
              if (index == 0 && statusthree == 0) {datasets.data.push(6.5);}
              if (index == 1 && statusthree == 0 ) {datasets.data.push(34.7);}
              if (index == 2 && statusthree == 0) {datasets.data.push(6);}
              if (index == 3 && statusthree == 0 ) {datasets.data.push(24);}
              if (index == 4 && statusthree == 0) {datasets.data.push(8);}
              if (index == 5 && statusthree == 0 ) {datasets.data.push(17.);}
              if (index == 6 && statusthree == 0) {datasets.data.push(4);}
              if (index == 7 && statusthree == 0 ) {datasets.data.push(7.5);}
              if (index == 8 && statusthree == 0) {datasets.data.push(18.0);}
              if (index == 9 && statusthree == 0 ) {datasets.data.push(9);}
              if (index == 10 && statusthree == 0) {datasets.data.push(9);}
              if (index == 11 && statusthree == 0 ) {datasets.data.push(34.2);}
              if (index == 12 && statusthree == 0) {datasets.data.push(0);}
              if (index == 13 && statusthree == 0 ) {datasets.data.push(62);}
              if (index == 14 && statusthree == 0) {datasets.data.push(7.2);}

            }
            else{
          if (index == 0 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6.5);}
          if (index == 1 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.7);}
          if (index == 2 && statusthree == 0) {datasets.data.pop (); datasets.data.push(6);}
          if (index == 3 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(24);}
          if (index == 4 && statusthree == 0) {datasets.data.pop (); datasets.data.push(8);}
          if (index == 5 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(17.0);}
          if (index == 6 && statusthree == 0) {datasets.data.pop (); datasets.data.push(4);}
          if (index == 7 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(7.5);}
          if (index == 8 && statusthree == 0) {datasets.data.pop (); datasets.data.push(18.0);}
          if (index == 9 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(9);}
          if (index == 10 && statusthree == 0) {datasets.data.pop (); datasets.data.push(9);}
          if (index == 11 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(34.2);}
          if (index == 12 && statusthree == 0) {datasets.data.pop (); datasets.data.push(0);}
          if (index == 13 && statusthree == 0 ) {datasets.data.pop ();datasets.data.push(62);}
          if (index == 14 && statusthree == 0) {datasets.data.pop (); datasets.data.push(7.2);}



        }
        });
          statusthree = 1;
          statusone = 0;
          statustwo = 0;
          statusfour = 0;
          statusall = false;
        ;
          window.chart.update();
        }
      });

      document.getElementById('addDate4').addEventListener('click', function() {
          if (chart.data.datasets.length > 0) {
            // var month = MONTHS[config.data.labels.length % MONTHS.length];
            if (statusfour == 0 && statusone == 0 && statustwo == 0 && statusthree == 0) {chart.data.labels.push('2021');}
            chart.data.datasets.forEach(function(datasets,index) {

              if (statusall == true){
                if (index == 0 && statusfour == 0) {datasets.data.push(7.4);}
                if (index == 1 && statusfour == 0) { datasets.data.push(30);}
                if (index == 2 && statusfour == 0) {datasets.data.push(6.8);}
                if (index == 3 && statusfour == 0) { datasets.data.push(23);}
                if (index == 4 && statusfour == 0) {datasets.data.push(8);}
                if (index == 5 && statusfour == 0) { datasets.data.push(12);}
                if (index == 6 && statusfour == 0) {datasets.data.push(4.5);}
                if (index == 7 && statusfour == 0) { datasets.data.push(8.3);}
                if (index == 8 && statusfour == 0) {datasets.data.push(34);}
                if (index == 9 && statusfour == 0) { datasets.data.push(19);}
                if (index == 10 && statusfour == 0) {datasets.data.push(8.8);}
                if (index == 11 && statusfour == 0) { datasets.data.push(12);}
                if (index == 12 && statusfour == 0) {datasets.data.push(37);}
                if (index == 13 && statusfour == 0) { datasets.data.push(-1);}
                if (index == 14 && statusfour == 0) {datasets.data.push(7.5);}

              }
              else{
            if (index == 0 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.4);}
            if (index == 1 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(30);}
            if (index == 2 && statusfour == 0) {datasets.data.pop (); datasets.data.push(6.8);}
            if (index == 3 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(23);}
            if (index == 4 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8);}
            if (index == 5 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 6 && statusfour == 0) {datasets.data.pop (); datasets.data.push(4.5);}
            if (index == 7 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(8.3);}
            if (index == 8 && statusfour == 0) {datasets.data.pop (); datasets.data.push(34);}
            if (index == 9 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(19);}
            if (index == 10 && statusfour == 0) {datasets.data.pop (); datasets.data.push(8.8);}
            if (index == 11 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(12);}
            if (index == 12 && statusfour == 0) {datasets.data.pop (); datasets.data.push(37);}
            if (index == 13 && statusfour == 0 ) {datasets.data.pop ();datasets.data.push(-1);}
            if (index == 14 && statusfour == 0) {datasets.data.pop (); datasets.data.push(7.5);}

          }
          });
            statusfour = 1;
            statusone = 0;
            statustwo = 0;
            statusthree = 0;
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
