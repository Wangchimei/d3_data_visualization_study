//! dimensions and circle center
const dims = { height: 300, width: 300, radius: 150 };
const center = { x: dims.width / 2 + 5, y: dims.height / 2 + 5 };

const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', dims.width + 150)
  .attr('height', dims.height + 150);

const graph = svg
  .append('g')
  .attr('transform', `translate(${center.x}, ${center.y})`);

//no sorting, generate angles based on the cost
// pie(data) will create a new array of data with angles attached
const pie = d3
  .pie()
  .sort(null)
  .value(d => d.cost);

//? What's in the data
// const angles = pie([
//   { name: 'coffee', cost: 500 },
//   { name: 'bills', cost: 300 },
//   { name: 'gaming', cost: 200 },
// ]);

// console.log(angles);

// create path strings
const arcPath = d3
  .arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2);

//? What's in the data
// console.log(arcPath(angles[0]));

// set ordinal scale
const color = d3.scaleOrdinal(d3['schemePastel1']);

// create a group for legend
const legendGroup = svg
  .append('g')
  .attr('transform', `translate(${dims.width + 40}, 10)`);

const legend = d3
  .legendColor()
  // .shape('circle')
  .shape('path', d3.symbol().type(d3.symbolCircle)())
  .shapePadding(10)
  .scale(color);

//! update function
const update = data => {
  // update scale domain
  color.domain(data.map(d => d.name));

  // update and call legend
  legendGroup.call(legend);
  legendGroup.selectAll('text').attr('fill', '#fff');

  // join enhanced (pie) data to path elements
  // feed data to pie to generate radians
  const paths = graph.selectAll('path').data(pie(data));
  // console.log(paths);

  // handle the exit selection
  paths
    .exit()
    .transition()
    .duration(750)
    .attrTween('d', arcTweenExit)
    .remove();

  // handle the current DOM path updates
  paths
    // .attr('d', arcPath)
    .transition()
    .duration(750)
    .attrTween('d', arcTweenUpdate);

  paths
    .enter()
    .append('path')
    .attr('class', 'arc')
    // .attr('d', arcPath)
    .attr('stroke', '#fff')
    .attr('stroke-width', 3)
    .attr('fill', d => color(d.data.name))
    .each(function(d) {
      this._current = d;
    })
    .transition()
    .duration(750)
    .attrTween('d', arcTweenEnter);
};

//! connect to db
let data = [];

db.collection('expenses').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    const doc = { ...change.doc.data(), id: change.doc.id };

    switch (change.type) {
      case 'added':
        data.push(doc);
        break;
      case 'modified':
        const index = data.findIndex(item => item.id === doc.id);
        data[index] = doc;
        break;
      case 'removed':
        data = data.filter(item => item.id !== doc.id);
        break;
      default:
        break;
    }
  });
  update(data);
});

// transition from the end to start
//end angle is always in the same position, the start angle changes to the end position
const arcTweenEnter = d => {
  let i = d3.interpolate(d.endAngle, d.startAngle);

  return function(t) {
    d.startAngle = i(t);
    return arcPath(d);
  };
};

const arcTweenExit = d => {
  let i = d3.interpolate(d.startAngle, d.endAngle);

  return function(t) {
    d.startAngle = i(t);
    return arcPath(d);
  };
};

// use function keyword in order to access 'this' keyword
// d represents the updated data, _current is the previous position
function arcTweenUpdate(d) {
  //? first, use .each in enter selection to store original position
  //? console.log(this._current, d);

  //interpolate between the two objects (not end angel)
  let i = d3.interpolate(this._current, d);

  // update the current position with the updated data
  this._current = i[1];

  return function(t) {
    // i(t) returns a value of d (data object) which we pass to arcPath
    return arcPath(i(t));
  };
}
