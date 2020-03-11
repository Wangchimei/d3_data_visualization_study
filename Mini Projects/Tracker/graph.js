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
//   { name: 'rent', cost: 500 },
//   { name: 'bills', cost: 300 },
//   { name: 'gaming', cost: 200 }
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

//! update function
const update = data => {
  // update scale domain
  color.domain(data.map(d => d.name));

  // join enhanced (pie) data to path elements
  // feed data to pie to generate radians

  const paths = graph.selectAll('path').data(pie(data));

  // console.log(paths);

  paths
    .enter()
    .append('path')
    .attr('class', 'arc')
    .attr('d', arcPath)
    .attr('stroke', '#fff')
    .attr('stroke-width', 3)
    .attr('fill', d => color(d.data.name));
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
        data.findIndex(item => item.id === doc.id);
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
