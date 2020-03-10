//! Set-ups
// margin and dimensions
const chart = { width: 600, height: 600 };
const margin = { top: 20, right: 20, bottom: 100, left: 100 };
const graphHeight = chart.height - margin.top - margin.bottom;
const graphWidth = chart.width - margin.right - margin.left;

// select canvas div
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', chart.width)
  .attr('height', chart.height);

// create group for chart and move down from top left
const graph = svg
  .append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// group axex in graph and move x-axis to the bottom
const xAxisGroup = graph
  .append('g')
  .attr('transform', `translate(0, ${graphHeight})`);

const yAxisGroup = graph.append('g');

// static scale attr (no relation with data)
// band scale (pass in every name)
const x = d3
  .scaleBand()
  .range([0, graphWidth])
  .padding(0.2);

// linear scale (pass in min and max)
const y = d3.scaleLinear().range([graphHeight, 0]);

// init x-axis and y-axis (pass in scale)
const xAxis = d3.axisBottom(x);
const yAxis = d3
  .axisLeft(y)
  .ticks(3)
  .tickFormat(d => `${d} cp`);

// update text
xAxisGroup
  .selectAll('text')
  .attr('font-size', '1.3em')
  .attr('transform', 'rotate(-40)')
  .attr('text-anchor', 'end');

yAxisGroup.selectAll('text').attr('font-size', '1.3em');

//! transition (pre-set)
// const t = d3.transition().duration(500);

//! Draw on the graph based on data (update every time)
// update function
const update = data => {
  // 1. update scales domains that rely on tbe data
  x.domain(data.map(pokemon => pokemon.name));
  y.domain([0, d3.max(data, d => d.cp)]);

  // 2. Join (updated) data to elements
  const rects = graph.selectAll('rect').data(data);

  // 3. Remove exit selection
  rects.exit().remove();

  // 4. Update current shapes in DOM
  // (animation: don't need to redefine starting position because they are at the position)
  rects
    .attr('width', x.bandwidth())
    .attr('fill', 'LightSteelBlue')
    .attr('x', d => x(d.name));
  // .transition()
  // .duration(500)
  // .attr('height', d => graphHeight - y(d.cp))
  // .attr('y', d => y(d.cp));

  // 5. Append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth())
    .attr('height', 0)
    .attr('fill', 'LightSteelBlue')
    .attr('x', d => x(d.name))
    .attr('y', graphHeight)
    .merge(rects)
    // .transition(t)
    .transition()
    .attrTween('width', widthTween)
    // .duration(10000)
    .ease(d3.easeLinear)
    .attr('height', d => graphHeight - y(d.cp))
    .attr('y', d => y(d.cp));

  // call axes
  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);
};

//! Communicate with Firestore (run update once)
//get data from firestore
let data = [];
db.collection('pokedex').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    // console.log(change.type);
    // console.log(change.doc.data());
    // console.log(change.doc.id);
    const doc = { ...change.doc.data(), id: change.doc.id };
    console.log('link');

    switch (change.type) {
      case 'added':
        data.push(doc);
        break;
      case 'modified':
        const index = data.findIndex(item => item.id == doc.id);
        data[index] = doc;
        break;
      case 'removed':
        data = data.filter(item => item.id !== doc.id);
      default:
        break;
    }
    update(data);
  });
});

//? Animation
//? For graph to grow from the bottom, starting point of rect and height of rect bar need to be changed
//? Starting point of rect (i.e. "y"): graphHeight to y(d.cp)
//? Height of rect bar (i.e. "height"): 0 to y(d.cp)

const widthTween = d => {
  // define interpolator (d3.interpolator returns a function)
  let i = d3.interpolate(0, x.bandwidth());

  // return a function which takes in a time ticker "t" (continuously firing until the duration ends)
  return function(t) {
    // return the value from passing the ticker in to the interpolator (0~1)
    return i(t);
  };
};
