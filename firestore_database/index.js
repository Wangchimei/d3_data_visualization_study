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

//! Set-ups
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
  rects
    .attr('width', x.bandwidth)
    .attr('height', d => graphHeight - y(d.cp))
    .attr('fill', 'LightSteelBlue')
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.cp));

  // 5. Append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth)
    .attr('height', d => graphHeight - y(d.cp))
    .attr('fill', 'LightSteelBlue')
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.cp));

  // call axes
  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);
};

//! Communicate with Firestore (run update once)
//get data from firestore
db.collection('pokedex')
  .get()
  .then(snapshot => {
    let data = [];
    snapshot.forEach(doc => {
      data.push(doc.data());
    });

    update(data);

    //? Simulate
    d3.interval(() => {
      if (data[0].cp < 5000) {
        data[0].cp += 50;
        update(data);
      }
    }, 50);

    d3.timeout(() => {
      data.push({ name: 'Shanebot', cp: 9000 });
    }, 3000);
  });
