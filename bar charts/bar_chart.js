// select the canvas container first
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', 600)
  .attr('height', 600);

// create margins & dimensions
const margin = { top: 20, right: 20, bottom: 100, left: 100 };
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

// append group to svg
const graph = svg
  .append('g')
  .attr('width', graphWidth)
  .attr('height', graphHeight)
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

const xAxisGroup = graph
  .append('g')
  .attr('transform', `translate(0, ${graphHeight})`);
const yAxisGroup = graph.append('g');

d3.json('./sales.json').then(data => {
  // band scale
  const x = d3
    .scaleBand()
    .domain(data.map(item => item.name))
    .range([0, 500])
    .round(true)
    .paddingInner(0.2)
    .paddingOuter(0.2);

  // linear scale
  const min = d3.min(data, d => d.sales);
  const max = d3.max(data, d => d.sales);
  const extent = d3.extent(data, d => d.sales);

  const y = d3
    .scaleLinear()
    .domain([0, max])
    // .range([0, 500]);
    // .range([0, graphHeight]);
    .range([graphHeight, 0]);

  // join the data to rects
  const rects = graph.selectAll('rect').data(data);

  // add attrs to existing element in the DOM
  rects
    .attr('width', x.bandwidth())
    .attr('height', d => graphHeight - y(d.sales))
    .attr('fill', 'blue')
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.sales));

  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth())
    // .attr('height', d => y(d.sales))
    .attr('height', d => graphHeight - y(d.sales))
    .attr('fill', 'peachpuff')
    .attr('x', d => x(d.name))
    .attr('y', d => y(d.sales));

  // create and call the axis (pass in x scale)
  const xAxis = d3.axisBottom(x);
  const yAxis = d3
    .axisLeft(y)
    .ticks(4)
    .tickFormat(d => `${d} units`);

  xAxisGroup.call(xAxis);
  yAxisGroup.call(yAxis);

  xAxisGroup
    .selectAll('text')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end');
});
