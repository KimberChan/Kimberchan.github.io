var svg = d3.select(".networkdata"),
    widths = +svg.attr("width"),
    heights = +svg.attr("height");

var radius = 30;

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    //.force("charge", d3.forceManyBody().strength(-200))
		.force('charge', d3.forceManyBody()
      .strength(-2000)
      .theta(.8)
      .distanceMax(400)
    )
// 		.force('collide', d3.forceCollide()
//       .radius(d => 40)
//       .iterations(2)
//     )
    .force("center", d3.forceCenter(width / 2, height / 2));

//gradient

var amazonicon = "https://github.com/favicon.ico";

    // var category1 = "#FAF4C3" ;
    var category2 = "#74B471" ;
    var category25 = "#FDE3A0";

    var category3 = "#36A8B0" ;
    var category35 = "#B9D9B8" ;

    var category4 = "#56769D" ;
    var category45 = "#F0A792" ;

    var category5 = "#FCC842" ;
    var category55 = "#AABACE" ;

    var category6 = "#E15026" ;
    var category65 = "#9AD3D7" ;

const graph = {
  "nodes": [
    // {"id": "earth", "group": 5, "category": category1, "weblink":"https://yahoo.com",},

    {"id": "amazon", "group": 10, "category":category35, "naming":"Amazon Rainforest","location":"Brazil || South America","subtitle":"World's largest rainforest and is famed for its biodiveristy","subicon":".ARI",},
    {"id": "a1", "group": 14.9, "category":category2,"naming":" Deforestation","subtitle":"Deforestation has increased about 50%","location":"Amazon Rainforest || South America","subicon":".ARI",},
    {"id": "a2", "group": 9.3, "category":category2,"naming":"Forest Coverage","subtitle":" Forest Coverage has decreased about 7%","location":"Amazon Rainforest || South America","subicon":".ARI",},
    {"id": "a3", "group": 16.8, "category":category2,"naming":"Tree Fires ","subtitle":"Tree Fires have went up about 68%","location":"Amazon Rainforest || South America","subicon":amazonicon,},

    {"id": "reef", "group": 10, "category":category65, "naming":"Great Barrier Reef", "subtitle":" World's Largest Coral Reef System", "location": "Queensland || Australia",},
    {"id": "r1", "group": 9.7, "category":category3,"naming":"Surface Temp.", "subtitle":"Surface temperature has dropped about 4%", "location": "Great Barrier Reef || Australia",},
    {"id": "r2", "group": 9.9, "category":category3,"naming":"Water pH", "subtitle":"The water's acidity has dropped 1%", "location": "Great Barrier Reef || Australia",},
    {"id": "r3", "group": 6.8, "category":category3,"naming":"Coral Growth", "subtitle":"Coral growth has decreased about 32%", "location": "Great Barrier Reef || Australia",},

    {"id": "everest", "group": 10, "category":category55,"naming":"Mount Everest", "subtitle":"Earth's highest mountain above sea level", "location": " Nepal & China || Asia",},
    {"id": "e1", "group": 10.5, "category":category4,"naming":"Average Temp. ", "subtitle":"The average temperature has increase about .5%", "location": " Mount Everest || Asia",},
    {"id": "e2", "group": 26.9, "category":category4,"naming":"Lake Formations ", "subtitle":"The number of lakes found on the mountain have more than doubled", "location": " Mount Everest || Asia",},
    {"id": "e3", "group": 32.5, "category":category4, "naming":"Death Toll", "subtitle":"The number of deadly incidents have tripled", "location": " Mount Everest || Asia",},

    {"id": "sahara", "group": 10, "category":category25,"naming":"Sahara Desert ", "subtitle":" It is the largest hot desert in the world, and the third largest desert overall after Antarctica and the Arctic", "location": "Multiple Northern Countries in Africa",},
    {"id": "s1", "group": 28.7, "category":category5,"naming":"Average Temp.", "subtitle":" The average temperature rate of increase has at least tripled", "location": "Sahara Desert || Africa",},
    {"id": "s2", "group": 1, "category":category5,"naming":"Annual Rainfall", "subtitle":" The annual rainfall has decreased 90%", "location": "Sahara Desert || Africa",},
    {"id": "s3", "group": 10.4, "category":category5,"naming":"Expansion", "subtitle":" The expansion and desertification of the Sahara has increased 4%", "location": "Sahara Desert || Africa",},

    {"id": "ice", "group": 10, "category":category45,"naming":"Mauna Loa Volcano", "subtitle":" The largest subaerial volcano in both mass and volume", "location": "Hawaii || North America",},
    {"id": "c1", "group": 12.2, "category":category6,"naming":"Atmospheric Co2 ", "subtitle":" The CO2 levels have increased 22% around the observatory area", "location": "Mauna Loa Volcano || North America",},
    {"id": "c2", "group": 11.8, "category":category6,"naming":"Average Temp ", "subtitle":" The temperature annual's trend has increased 18% ", "location": "Mauna Loa Volcano || North America",},
    {"id": "c3", "group": 8.8, "category":category6,"naming":"Average Ozone", "subtitle":" The Ozone has gone down 12% around area", "location": "Mauna Loa Volcano || North America",},

  ],
  "links": [
    // {"source": "earth", "target": "amazon", "value": 1,},
    // {"source": "earth", "target": "reef", "value": 1},
    // {"source": "earth", "target": "everest", "value": 1},
    // {"source": "earth", "target": "ice", "value": 1},
    // {"source": "earth", "target": "sahara", "value": 1},

    {"source": "amazon", "target": "a1", "value": 1},
    {"source": "amazon", "target": "a2", "value": 1},
    {"source": "amazon", "target": "a3", "value": 1},

    {"source": "reef", "target": "r1", "value": 1},
    {"source": "reef", "target": "r2", "value": 1},
    {"source": "reef", "target": "r3", "value": 1},

    {"source": "everest", "target": "e1", "value": 1},
    {"source": "everest", "target": "e2", "value": 1},
    {"source": "everest", "target": "e3", "value": 1},

    {"source": "ice", "target": "c1", "value": 1},
    {"source": "ice", "target": "c2", "value": 1},
    {"source": "ice", "target": "c3", "value": 1},

    {"source": "sahara", "target": "s1", "value": 1},
    {"source": "sahara", "target": "s2", "value": 1},
    {"source": "sahara", "target": "s3", "value": 1},

    {"source": "a1", "target": "s1", "value": 1},
    {"source": "s1", "target": "c2", "value": 1},
    {"source": "a3", "target": "e3", "value": 1},
    {"source": "r3", "target": "c1", "value": 1},
    {"source": "c3", "target": "r2", "value": 1},
    {"source": "c2", "target": "s3", "value": 1},
    {"source": "s3", "target": "r1", "value": 1},
    {"source": "a2", "target": "e2", "value": 1},
    {"source": "r3", "target": "c1", "value": 1},
    {"source": "e2", "target": "r3", "value": 1},
    {"source": "s2", "target": "e1", "value": 1},
  ]
}


function run(graph) {

  graph.links.forEach(function(d){
//     d.source = d.source_id;
//     d.target = d.target_id;
  });


var link = svg.append("g")
                .style("stroke", "#D1C5C2")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line");

var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter().append("circle")
  .attr("r", radius-.75)
  .call(d3.drag()
  .on("start", dragstarted)
  .on("drag", dragged)
  .on("end", dragended));



// var label = svg.append("g")
//   .attr("class", "labels")
//   .selectAll("text")
//   .data(graph.nodes)
//   .enter().append("text")
//   .attr("class", "label")
//   .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        ;

//   console.log(node);
    node
         .attr("r", function(d) {return d.group * 3})
         .style("fill", function(d) {return d.category})

         // .style("stroke", "white")
         // .style("stroke-width", "5px")
         .attr("cx", function (d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
         .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); })
         .attr("xlink:href", function(d) {return d.weblink})
         .on('mouseover', function(d) {
             // make the mouseover'd element
             // bigger and red
             d3.select(".infobox .title").text(d["naming"]);
             //id is the name
             //location is country
             //limg is icon image?
             d3.select(".infobox .author").text(d['location']);
             d3.select(".infobox .sub").text(d['subtitle']);
             d3.select("img").text(d['subicon']).style('visibility', 'visible');
             // d3.select(".infobox .words").text(d['words']);
             d3.select(".infobox").style('visibility', 'visible');
             d3.select(this)
               .transition()
               .duration(800)
               // .attr("xlink:href", "icon/Great.png")
               .attr('r',function(d) {return d.group * 4})
               // .attr('fill', '#ff0000');
           })
           .on('mouseout', function(d) {
             // console.log("mouseout", this);
             // return the mouseover'd element
             // to being smaller and black
              d3.select(".infobox").style('visibility', 'hidden');
               d3.select("img").style('visibility', 'hidden');
             d3.select(this)
               .transition()
               .duration(100)
               .attr('r', function(d) {return d.group * 3})
               // .attr('fill', '#000000');
           });


    // label
    // 		.attr("x", function(d) { return d.x; })
    //         .attr("y", function (d) { return d.y; })
    //         .style("font-size", "10px").style("fill", "#333");
  }

function dragsubject() {
      return simulation.find(d3.event.x, d3.event.y);
    }
}



function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
//  simulation.fix(d);
}

function dragged(d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
//  simulation.fix(d, d3.event.x, d3.event.y);
}

function dragended(d) {
  d.fx = d3.event.x
  d.fy = d3.event.y
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
  //simulation.unfix(d);

}
function drawLink(d) {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
}

function drawNode(d) {
  context.moveTo(d.x + 1, d.y);
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
}

run(graph)
