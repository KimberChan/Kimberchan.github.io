$(document).ready(function() {
		$('a[href*=\\#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}

	//	Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});

}).scroll();

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var radius = 100;

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    //.force("charge", d3.forceManyBody().strength(-200))
		.force('charge', d3.forceManyBody()
      .strength(-2000)
      .theta(0.3)
      .distanceMax(1800)
    )
// 		.force('collide', d3.forceCollide()
//       .radius(d => 40)
//       .iterations(2)
//     )
    .force("center", d3.forceCenter(width / 2, height / 2));

//gradient


    var category1 = "#FAF4C3" ;
    var category2 = "#A5D895" ;
    var category3 = "#f97976" ;
    var category4 = "#d6ecef" ;
    var category5 = "#ffc870" ;
    var category6 = "#c4dbf6" ;

const graph = {
  "nodes": [
    {"id": "earth", "group": 5, "category": category1, "weblink":"https://yahoo.com",},

    {"id": "amazon", "group": 3 , "category":category2,"weblink":"yahoo.com",},
    {"id": "a1", "group": 2, "category":category2,},
    {"id": "a2", "group": 2, "category":category2,},
    {"id": "a3", "group": 2, "category":category2,},

    {"id": "reef", "group": 3, "category":category3,"weblink":"yahoo.com",},
    {"id": "r1", "group": 2, "category":category3,},
    {"id": "r2", "group": 2, "category":category3,},
    {"id": "r3", "group": 2, "category":category3,},

    {"id": "everest", "group": 3, "category":category4,"weblink":"yahoo.com",},
    {"id": "e1", "group": 2, "category":category4,},
    {"id": "e2", "group": 2, "category":category4,},
    {"id": "e3", "group": 2, "category":category4,},

    {"id": "sahara", "group": 3, "category":category5,"weblink":"yahoo.com",},
    {"id": "s1", "group": 2, "category":category5,},
    {"id": "s2", "group": 2, "category":category5,},
    {"id": "s3", "group": 2, "category":category5,},

    {"id": "ice", "group": 3, "category":category6,"weblink":"yahoo.com",},
    {"id": "c1", "group": 2, "category":category6,},
    {"id": "c2", "group": 2, "category":category6,},
    {"id": "c3", "group": 2, "category":category6,},

  ],
  "links": [
    {"source": "earth", "target": "amazon", "value": 1,},
    {"source": "earth", "target": "reef", "value": 1},
    {"source": "earth", "target": "everest", "value": 1},
    {"source": "earth", "target": "ice", "value": 1},
    {"source": "earth", "target": "sahara", "value": 1},

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
  .attr("r", 2)
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
         .attr("r", function(d) {return d.group * 10})
         .style("fill", function(d) {return d.category})

         // .style("stroke", "white")
         // .style("stroke-width", "5px")
         .attr("cx", function (d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
         .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); })
         .attr("xlink:href", function(d) {return d.weblink})
         .on('mouseover', function(d) {
             // make the mouseover'd element
             // bigger and red
             d3.select(".infobox .title").text(d["id"]);
             // d3.select(".infobox .author").text(d['author']);
             // d3.select(".infobox .published").text(d['published']);
             // d3.select(".infobox .words").text(d['words']);
             d3.select(".infobox").style('visibility', 'visible');
             d3.select(this)
               .transition()
               .duration(800)
               .attr('r',function(d) {return d.group * 25})
               // .attr('fill', '#ff0000');
           })
           .on('mouseout', function(d) {
             // console.log("mouseout", this);
             // return the mouseover'd element
             // to being smaller and black
              d3.select(".infobox").style('visibility', 'hidden');
             d3.select(this)
               .transition()
               .duration(100)
               .attr('r', function(d) {return d.group * 10})
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
  context.moveTo(d.x + 3, d.y);
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
}

run(graph)
