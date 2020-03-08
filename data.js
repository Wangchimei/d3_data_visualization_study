const data = [
  { width: 200, height: 100, fill: 'blue' },
  { width: 200, height: 60, fill: 'pink' },
  { width: 200, height: 30, fill: 'gray' },
];

// select the svg container first
// const svg = d3.select('svg');

// svg
//   .select('rect')
//   .data(data)
//   .attr('width', (d, i, n) => {
//     console.log(d);
//     console.log(i);
//     console.log(n);
//     console.log(this);
//     console.log(n[i]);
//     return d.width;
//   })
//   .attr('height', function(d) {
//     console.log(this);

//     return d.height;
//   })
//   .attr('fill', function(d) {
//     return d.fill;
//   });

// select the svg conatiner first
const svg = d3.select('svg');

// join the data to rects
const rects = svg.selectAll('rect').data(data);

// add attrs to rects already in the DOM
rects
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

// append the enter selection to the DOM
const added = rects
  .enter()
  .append('rect')
  .attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);
