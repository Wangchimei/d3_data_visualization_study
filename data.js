const data = [
  { width: 200, height: 100, fill: 'blue' },
  { width: 200, height: 200, fill: 'blue' },
];

// select the svg container first
const svg = d3.select('svg');

svg
  .select('rect')
  .data(data)
  .attr('width', (d, i, n) => {
    console.log(d);
    console.log(i);
    console.log(n);
    console.log(this);
    console.log(n[i]);
    return d.width;
  })
  .attr('height', function(d) {
    console.log(this);

    return d.height;
  })
  .attr('fill', function(d) {
    return d.fill;
  });
