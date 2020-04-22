let width = d3.select("#wmap").node().getBoundingClientRect().width
  let height = 850
  const sensitivity = 105

  let projection = d3.geoOrthographic()
  .scale(350)
  .center([0, 0])
  .rotate([0,-30])
  .translate([width / 1.2, height / 2])


  const initialScale = projection.scale()
  let path = d3.geoPath().projection(projection)

  let svg = d3.select("#wmap")
  .append("svg")
  .attr("width", width)
  .attr("height", height)


  let globe = svg.append("circle")
  .attr("fill", "#EEE")
  // .attr("stroke", "#000")
  .attr("id", "drop-shadow")
  .attr("stroke-width", "5")
  .attr("cx", width/1.2)
  .attr("cy", height/2)
  .attr("r", initialScale)


  svg.call(d3.drag().on('drag', () => {
    const rotate = projection.rotate()
    const k = sensitivity / projection.scale()
    projection.rotate([
      rotate[0] + d3.event.dx * k,
      rotate[1] - d3.event.dy * k
    ])
    path = d3.geoPath().projection(projection)
    svg.selectAll("path").attr("d", path)
  }))
  //   .call(d3.zoom().on('zoom', () => {
  //   if(d3.event.transform.k > 0.3) {
  //     projection.scale(initialScale * d3.event.transform.k)
  //     path = d3.geoPath().projection(projection)
  //     svg.selectAll("path").attr("d", path)
  //     globe.attr("r", projection.scale())
  //   }
  //   else {
  //     d3.event.transform.k = 0.3
  //   }
  // }))

  let map = svg.append("g")

// var data = d3.map();
// var colorScale = d3.scaleThreshold()
// .domain([100000, 1000000 ])
// // .range(d3.schemeBlues[1]);

  d3.json("https://raw.githubusercontent.com/michael-keith/mps_interests/master/view/js/charts/data/world_map.json", function(err, d) {
    map.append("g")
      .attr("class", "countries" )
      .selectAll("path")
      .data(d.features)
      .enter().append("path")
      .attr("class", d => "country_" + d.properties.name.replace(" ","_"))
      .attr("d", path)
      // .attr("fill", "black")
      .style('stroke', 'EDD7F6')
      .style('stroke-width', 0.3)
      .style("opacity",1)
      .attr("fill", function(d) {
            if (d.properties.name === "Australia" || d.properties.name === "Brazil" || d.properties.name === "USA" || d.properties.name === "Nepal" || d.properties.name === "China"|| d.properties.name === "Algeria" || d.properties.name === "Chad" || d.properties.name === "Egypt" || d.properties.name === "Libya" || d.properties.name === "Mali" || d.properties.name === "Mauritania" || d.properties.name === "Niger" || d.properties.name === "Western Sahara" || d.properties.name === "Sudan" || d.properties.name === "Tunisia") {return "#EDD7F6"}
            else 	{ return "#3B353E" }})
  })




  //Optional rotate
  d3.timer(function(elapsed) {
    const rotate = projection.rotate()
    const k = sensitivity / projection.scale()
    projection.rotate([
      rotate[0] - 1 * k,
      rotate[1]
    ])
    path = d3.geoPath().projection(projection)
    svg.selectAll("path").attr("d", path)
  },200)
