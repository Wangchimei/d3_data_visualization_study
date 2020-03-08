// select the svg container first
const svg = d3.select('svg');

// join the data to circle
d3.json('./dummy_data/planets.json')
  .then(data => {
    const circles = svg.selectAll('circle').data(data);

    // add attrs to circle already in the DOM
    circles
      .attr('cy', 200)
      .attr('cx', d => d.distance)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);

    // append the enter selection to the DOM
    circles
      .enter()
      .append('circle')
      .attr('cy', 200)
      .attr('cx', d => d.distance)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);
  })
  .catch(error => alert('cannot fetch data'));
