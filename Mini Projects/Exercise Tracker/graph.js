// set up dimensions
const margin = { top: 40, right: 20, bottom: 50, left: 100 };
const graphWidth = 560 - margin.right - margin.left;
const graphHeight = 400 - margin.top - margin.bottom;

const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', graphWidth + margin.right + margin.left)
  .attr('height', graphHeight + margin.top + margin.bottom);

const graph = svg
  .append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// x-scales: time scale
const x = d3.scaleTime().range([0, graphWidth]);
// y-scales: linear scale
const y = d3.scaleLinear().range([graphHeight, 0]);

// axes groups
const xAxisGroup = graph
  .append('g')
  .attr('class', 'x-axis')
  .attr('transform', `translate(0, ${graphHeight})`);

const yAxisGroup = graph.append('g').attr('class', 'y-axis');

// d3 line path generator
const line = d3
  .line()
  .x(function(d) {
    return x(new Date(d.date));
  })
  .y(function(d) {
    return y(d.distance);
  });

// line path element
const path = graph.append('path');

// create dotted line group and append to graph

// create x dotted line and append to dotted line group

// create y dotted line and append to dotted line group

// update pattern
const update = data => {
  // filter data
  data = data.filter(item => item.activity === activity);

  // sort data
  data.sort((a, b) => {
    new Date(a.date) - new Date(b.date);
  });
  // update domain
  // creating new data object using data string to compare
  x.domain(d3.extent(data, d => new Date(d.date)));
  y.domain([0, d3.max(data, d => d.distance)]);

  // update path data (data join needs to be an array)
  path
    .data([data])
    .attr('fill', 'none')
    .attr('stroke', '#00bfa5')
    .attr('stroke-width', '2')
    .attr('d', line);

  // create circle for objects
  const circles = graph.selectAll('circle').data(data);

  // remove unwanted points
  circles.exit().remove();

  // update existing circles
  circles.attr('cx', d => x(new Date(d.date))).attr('cy', d => y(d.distance));

  // add enter selection
  circles
    .enter()
    .append('circle')
    .attr('r', '4')
    .attr('cx', d => x(new Date(d.date)))
    .attr('cy', d => y(d.distance))
    .attr('fill', '#ccc');

  // animation
  graph
    .selectAll('circle')
    .on('mouseover', (d, i, n) => {
      d3.select(n[i])
        .transition()
        .duration(100)
        .attr('r', '6')
        .attr('fill', '#fff');
      // set x dotted line coords (x1,x2,y1,y2)
      // set y dotted line coords (x1,x2,y1,y2)
      // show the dotted line group (opacity)
    })
    .on('mouseleave', (d, i, n) => {
      d3.select(n[i])
        .transition()
        .duration(100)
        .attr('r', '4')
        .attr('fill', '#ccc');
      // hide the dotted line group (opacity)
    });

  // create and call axes
  const xAxis = d3
    .axisBottom(x)
    .ticks(5)
    .tickFormat(d3.timeFormat('%b %d'));
  const yAxis = d3
    .axisLeft(y)
    .ticks(4)
    .tickFormat(d => d + 'km');
  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);

  // rotate x-axis text
  xAxisGroup
    .selectAll('text')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end');
};

// data from firestore
let data = [];

db.collection('activity').onSnapshot(snapshot => {
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
