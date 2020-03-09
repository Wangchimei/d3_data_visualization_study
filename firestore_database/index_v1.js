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

//get data from firestore
db.collection('pokedex')
  .get()
  .then(snapshot => {
    let data = [];
    snapshot.forEach(doc => {
      data.push(doc.data());
    });

    // band scale (pass in every name)
    const x = d3
      .scaleBand()
      .domain(data.map(pokemon => pokemon.name))
      .range([0, graphWidth])
      .padding(0.2);

    // linear scale (pass in min and max)
    const max = d3.max(data, d => d.cp);
    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([graphHeight, 0]);

    // join the data
    const rects = graph.selectAll('rect').data(data);

    // add attr to existing element in the DOM
    rects
      .attr('width', x.bandwidth)
      .attr('height', d => graphHeight - y(d.cp))
      .attr('fill', 'LightSteelBlue')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.cp));

    //append the enter selection to the DOM
    rects
      .enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', d => graphHeight - y(d.cp))
      .attr('fill', 'LightSteelBlue')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.cp));

    // init x-axis and y-axis (pass in scale)
    const xAxis = d3.axisBottom(x);
    const yAxis = d3
      .axisLeft(y)
      .ticks(3)
      .tickFormat(d => `${d} cp`);

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    xAxisGroup
      .selectAll('text')
      .attr('font-size', '1.3em')
      .attr('transform', 'rotate(-40)')
      .attr('text-anchor', 'end');

    yAxisGroup.selectAll('text').attr('font-size', '1.3em');
  });
