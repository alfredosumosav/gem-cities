let paint = (city) => {

const dims2 = { height: 300, width: 300, radius: 150 };
const cent2 = { x: dims2.width / 2 + 5, y: dims2.width / 2 + 5 };

const svg2 = d3
  .select(".canvas2")
  .append("svg")
  .attr("width", dims2.width + 150)
  .attr("height", dims2.height + 150);

const graph2 = svg2
  .append("g")
  .attr("transform", `translate(${cent2.x}, ${cent2.y})`);

const pie2 = d3
  .pie()
  // .sort(null)
  .sort((a, b) => d3.descending(a.rank, b.rank))
  .value(d => 100);

// const angles2 = pie2([
//     { cityName: 'rent', destination: 500 },
//     { cityName: 'bills', destination: 300 },
//     { cityName: 'gaming', destination: 200 }
// ]);

const arcPath2 = d3
  .arc()
  .outerRadius(dims2.radius)
  .innerRadius(dims2.radius / 2);

const color2 = d3.scaleOrdinal(d3["schemeSet3"]);

// legend2 setup

const legendGroup2 = svg2
  .append("g")
  .attr("transform", `translate(${dims2.width + 40}, 10)`);

const legend2 = d3
  .legendColor()
  .shape("circle")
  .shapePadding(10)
  .scale(color2);

const tip2 = d3
  .tip()
  .attr("class", "tip2 card")
  .html(d => {
    let content = `<div class="cityName rank"># ${d.data.rank}</div>`;
    content += `<div class="destination">${d.data.cityName} (${d.data.destination})</div>`;
    content += `<div class="destination">${d.data.countryName}</div>`;
    return content;
  });

graph2.call(tip2);

// update2 function

const update2 = data2 => {
  color2.domain(data2.map(d => d.cityName));

  // update2 and call legend2

  legendGroup2.call(legend2);
  legendGroup2.selectAll("text").attr("fill", "white");

  // join enhanced (pie2) data2 to path elements

  const paths2 = graph2.selectAll("path").data(pie2(data2));

  paths2
    .exit()
    .transition()
    .duration(750)
    .attrTween("d", arcTweenExit2)
    .remove();

  // handles the current DOM path updates
  paths2
    .attr("d", arcPath2)
    .transition()
    .duration(750)
    .attrTween("d", arcTweenUpdate);

  paths2
    .enter()
    .append("path")
    .attr("class", "arc")
    // .attr('d', arcPath2)
    .attr("stroke", "#fff")
    .attr("stroke-width", 3)
    .attr("fill", d => color2(d.data.cityName))
    .each(function(d) {
      this._current = d;
    })
    .transition()
    .duration(750)
    .attrTween("d", arcTweenEnter2);

  graph2
    .selectAll("path")
    .on("mouseover", (d, i, n) => {
      tip2.show(d, n[i]);
      handleMouseOver2(d, i, n);
    })
    .on("mouseout", (d, i, n) => {
      tip2.hide();
      handleMouseOut2(d, i, n);
    })
    // .on("click", handleClick);
};

// // add events

// // data array and firestore

var data2 = [];

db.collection("cities")
  .doc(city)
  .collection("flights")
  .onSnapshot(res => {
    res.docChanges().forEach(change => {
      const doc = { ...change.doc.data(), id: change.doc.id };

      switch (change.type) {
        case "added":
          data2.push(doc);
          break;
        case "modified":
          const index = data.findIndex(item => item.id == doc.id);
          data2[index] = doc;
          break;
        case "removed":
          data2 = data.filter(item => item.id !== doc.id);
          break;
        default:
          break;
      }
    });

    update2(data2);
  });

// db.collection("cities")
//   .doc("EXMrIeJ31m7m8M3klVPb")
//   .collection("flights")
//   .onSnapshot(res => {
//     res.docChanges().forEach(change => {
//       const doc = { ...change.doc.data(), id: change.doc.id };

//       switch (change.type) {
//         case "added":
//           data2.push(doc);
//           break;
//         case "modified":
//           const index = data.findIndex(item => item.id == doc.id);
//           data2[index] = doc;
//           break;
//         case "removed":
//           data2 = data.filter(item => item.id !== doc.id);
//           break;
//         default:
//           break;
//       }
//     });

//     update2(data2);
//   });

const arcTweenEnter2 = d => {
  let i = d3.interpolate(d.endAngle, d.startAngle);

  return function(t) {
    d.startAngle = i(t);
    return arcPath2(d);
  };
};

const arcTweenExit2 = d => {
  let i = d3.interpolate(d.startAngle, d.endAngle);

  return function(t) {
    d.startAngle = i(t);
    return arcPath2(d);
  };
};

// use function keyword to allow use of 'this'
function arcTweenUpdate(d) {
  // interpolate between the two objects
  let i = d3.interpolate(this._current, d);
  // update2 the current prop with updated data
  this._current = i(1);

  return function(t) {
    return arcPath2(i(t));
  };
}

const handleMouseOver2 = (d, i, n) => {
  // console.log(n[i]);
  d3.select(n[i])
    .transition("changeSliceFill")
    .duration(300)
    .attr("fill", "#454545")
    .attr("stroke", "#4C9AFF")
    .attr("stroke-width", "5.5");
};

const handleMouseOut2 = (d, i, n) => {
  d3.select(n[i])
    .transition("changeSliceFill")
    .duration(300)
    .attr("fill", color2(d.data.cityName))
    .attr("stroke", "white")
    .attr("stroke-width", "3");
};

}

export default paint;