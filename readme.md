# Data Visualization with D3.js

## Table of Content

- [SVG Basic](https://github.com/Wangchimei/d3_data_visualization_study#svg-basic-%CE%B4)

- [D3.js](https://github.com/Wangchimei/d3_data_visualization_study#d3js)

  - [DOM Selection](https://github.com/Wangchimei/d3_data_visualization_study#dom-selection-%CE%B4)
  - [DOM Manipulation](https://github.com/Wangchimei/d3_data_visualization_study#dom-manipulation-%CE%B4)
  - [Method Chaining](https://github.com/Wangchimei/d3_data_visualization_study#method-chaining-%CE%B4)
  - [Grouping](https://github.com/Wangchimei/d3_data_visualization_study#grouping-%CE%B4)
  - [Function of Data](https://github.com/Wangchimei/d3_data_visualization_study#function-of-data-%CE%B4)
    - [Solution for Using Arrow Functions](https://github.com/Wangchimei/d3_data_visualization_study#solution-for-using-arrow-functions)
  - [Data Binding](https://github.com/Wangchimei/d3_data_visualization_study#data-binding-%CE%B4)
  - [Data Loading](https://github.com/Wangchimei/d3_data_visualization_study#data-loading-%CE%B4)
  - [Scale](https://github.com/Wangchimei/d3_data_visualization_study#scale-%CE%B4)
  - [Axes](https://github.com/Wangchimei/d3_data_visualization_study#axes-%CE%B4)
  - [Animation](https://github.com/Wangchimei/d3_data_visualization_study#animation-%CE%B4)
  - [Event](https://github.com/Wangchimei/d3_data_visualization_study#event-%CE%B4)

- [D3 x Firebase (Real-time Database)](https://github.com/Wangchimei/d3_data_visualization_study#d3-x-firestore-real-time-database)

  - [Retrieving Data](https://github.com/Wangchimei/d3_data_visualization_study#retrieving-data-%CE%B4)
  - [Update Pattern](https://github.com/Wangchimei/d3_data_visualization_study#update-pattern-%CE%B4)

- [Bar Chart](https://github.com/Wangchimei/d3_data_visualization_study#bar-chart-%CE%B4)
  - [Methods Overview](https://github.com/Wangchimei/d3_data_visualization_study#methods-overview-%CE%B4)
  - [Break Down in Steps](https://github.com/Wangchimei/d3_data_visualization_study#break-down-in-steps-%CE%B4)
- [Pie Chart](https://github.com/Wangchimei/d3_data_visualization_study#pie-chart-%CE%B4)
  - [Methods Overview](https://github.com/Wangchimei/d3_data_visualization_study#methods-overview-%CE%B4-1)
  - [Break Down in Steps](https://github.com/Wangchimei/d3_data_visualization_study#break-down-in-steps-%CE%B4-1)
- [Line Chart](https://github.com/Wangchimei/d3_data_visualization_study#line-chart-%CE%B4)
  - [Break Down in Steps](https://github.com/Wangchimei/d3_data_visualization_study#break-down-in-steps-%CE%B4-2)

## SVG Basic [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

### SVG Shapes

- [Rectangle](https://github.com/Wangchimei/d3_data_visualization_study#rectangle-%CE%B4) `<rect>`
- [Circle](https://github.com/Wangchimei/d3_data_visualization_study#circle--ellipse-%CE%B4) `<circle>`
- [Ellipse](https://github.com/Wangchimei/d3_data_visualization_study#circle--ellipse-%CE%B4) `<ellipse>`
- [Line](https://github.com/Wangchimei/d3_data_visualization_study#line-%CE%B4) `<line>`
- [Polygon](https://github.com/Wangchimei/d3_data_visualization_study#polygon--polyline-%CE%B4) `<polygon>`
- [Polyline](https://github.com/Wangchimei/d3_data_visualization_study#polygon--polyline-%CE%B4) `<polyline>`
- [Path](https://github.com/Wangchimei/d3_data_visualization_study#path-%CE%B4) `<path>`

### Rectangle [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

<div align="center">
  <img src="https://i.imgur.com/ukw7MpG.png" height="100" />
</div>

```html
<svg width="400" height="50">
  <rect
    x="100"
    y="10"
    fill="lightskyblue"
    width="100"
    height="30"
    stroke="black"
    stroke-width="2"
  ></rect>
  <rect
    x="250"
    y="10"
    rx="20"
    ry="20"
    fill="peachpuff"
    width="100"
    height="30"
    stroke="black"
    stroke-width="2"
    opacity="0.7"
  ></rect>
</svg>
```

- `x` and `y` define the starting point, which is on the top-left.
- `rx` and `ry` defines a radius on the x-axis (horizontal radius) and y-axis (vertical radius).
- `fill` defines the fill color.
- `stroke-width` defines the width of the border.
- `stroke` defines the color of the border.
- `opacity` define the opacity for _the whole element_.
- `fill-opacity` defines the opacity of the fill color.
- `stroke-opacity` defines the opacity of the stroke color.

### Circle & Ellipse [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

<div align="center">
  <img src="https://i.imgur.com/GRRKttv.png" height="100" />
</div>

```html
<svg width="400" height="50">
  <circle
    cx="100"
    cy="20"
    r="20"
    stroke="black"
    stroke-width="2"
    fill="lightskyblue"
  ></circle>

  <circle
    cx="200"
    cy="50"
    r="40"
    stroke="black"
    stroke-width="2"
    fill="peachpuff"
  ></circle>

  <ellipse
    cx="320"
    cy="20"
    rx="50"
    ry="20"
    stroke="black"
    stroke-width="2"
    fill="turquoise"
  ></ellipse>
</svg>
```

- `cx` and `cy` define the x-axis coordinate of a center point.

### Line [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

<div align="center">
  <img src="https://i.imgur.com/JNj8yup.png" height="100" />
</div>

```html
<svg width="400" height="50">
  <line
    x1="100"
    y1="10"
    x2="300"
    y2="30"
    stroke="black"
    stroke-width="4"
  ></line>
</svg>
```

- `x1` and `y1` defines the coordinate of the starting point.
- `x2` and `y2` defines the coordinate of the end point.

### Polygon & Polyline [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

`<polygon>` defines a closed shape as the last point is connected to the first point. (all the lines connect up)

`<polyline>` defines a open shape as the last point doesn't have to be connected to the first point.

<div align="center">
  <img src="https://i.imgur.com/8tKYiNK.png" height="150" />
</div>

```html
<svg width="450" height="230">
  <polygon
    points="100,20 40,198 190,78 10,78 160,198"
    fill="lightskyblue"
    stroke="black"
    stroke-width="2"
    fill-rule="nonzero"
  ></polygon>

  <polyline
    points="250,40 290,40 290,80 330,80 330,120 370,120 370,160 410,160 410,200"
    fill="none"
    stroke="peachpuff"
    stroke-width="4"
  ></polyline>
</svg>
```

- `fill-rule` has tow values: `nonzero` and `evenodd`

### Path [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

`<path>` is the generic element to define a shape. All the basic shapes can be created with a path element.

The following commands are available for path data:

- M = moveto
- L = lineto
- H = horizontal lineto
- V = vertical lineto
- C = curveto
- S = smooth curveto
- Z = closepath
- Q = quadratic Bézier curve
- T = smooth quadratic Bézier curveto
- A = elliptical Arc

  **Note:** Commands above can also be expressed with lower letters. Capital letters means _absolutely positioned_, lower cases means _relatively positioned_.

<div align="center">
  <img src="https://i.imgur.com/W4dWtlk.png" height="150"/>
</div>

```html
<svg width="450" height="230">
  <path
    d="M 150 50 L 75 200 L 225 200 C 225 200 150 150 150 50"
    fill="lightskyblue"
  />

  <circle cx="150" cy="150" r="5" fill="darkslategrey"></circle>
  <line
    x1="225"
    y1="200"
    x2="150"
    y2="150"
    stroke="darkslategrey"
    stroke-width="1"
  ></line>
</svg>
```

- `d` defines the shape of the path.
- `M 150 50` - move to 150,50
- `L 75 200` - line to 75,200
- `L 225 200` - line to 225,200
- `C 225 200 150 150 150 50` - curve to (takes 3 sets of coordinates)
  - first set (`225 200`) - starting position of control point (i.e. starting position of the curve)
  - second set (`150 150`) - the end point of the control stick (dot in then middle)
  - third set (`150 50`) - the end point of the curve

## D3.js

### DOM Selection [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

Similar to using `querySelector` and `querySelector` in JavaScript, D3 use `select` and `selectAll` to select the placeholder entries from the DOM.

| Method                     | Description                                             |
| :------------------------- | :------------------------------------------------------ |
| d3.select(css-selector)    | Returns the first matching element in the HTML document |
| d3.selectAll(css-selector) | Returns all the matching elements in the HTML document  |

```
const canvas = d3.select('.canvas');
```

### DOM Manipulation [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

DOM manipulation methods can be uses after selecting elements using `d3.select()` or `d3.selectAll()`.

| Method                        | Description                                                     | Example                                               |
| :---------------------------- | :-------------------------------------------------------------- | :---------------------------------------------------- |
| append(_element name_)        | Creates and adds an element after(inside) the selected element. | d3.select('.canvas').append('svg')                    |
| attr(_name_, _value_)         | Gets or sets an attribute on the selected element.              | d3.select('.canvas').append('svg').attr('width', 600) |
| style(_name_, _value_)        | Gets or sets the style of the selected element.                 | d3.select("p").style("color", "red")                  |
| classed(_css class_, boolean) | Gets, adds or removes a css class from the selection.           | d3.select("p").classed('error', true);                |
| property(_name_, _value_)     | Gets or sets an attribute on the selected element.              | d3.select("input").property("checked",true);          |
| remove()                      | Removes the specified element from the DOM                      | d3.select("p").remove();                              |
| text(_content_)               | Gets or sets the text of the selected element                   | d3.select("p").text("Hello!")                         |
| html(_content_)               | Gets or sets the inner HTML of selected element                 | d3.select("p").html("<span>Hello!</span>");           |

### Method Chaining [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

```js
const canvas = d3.select('.canvas');

const svg = canvas
  .append('svg')
  .attr('width', 600)
  .attr('height', 600);

svg
  .append('circle')
  .attr('r', 50)
  .attr('cx', 300)
  .attr('cy', 70)
  .attr('fill', 'pink');

svg
  .append('text')
  .attr('x', 20)
  .attr('y', 200)
  .attr('fill', 'grey')
  .text('hello, ninjas')
  .style('font-family', 'arial');
```

### Grouping [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

Grouping can be helpful if you are working with a more complex chart, or you would like to manipulate elements together.

1. Append `<g>` after `<svg>`

   ```js
   const svg = canvas
     .append('svg')
     .attr('width', 600)
     .attr('height', 600);

   const group = svg.append('g').attr('transform', 'translate(0, 100)');
   ```

2. Append shapes that you want to group after `<g>`

   ```js
   group
     .append('rect')
     .attr('width', 200)
     .attr('height', 100)
     .attr('fill', 'blue')
     .attr('x', 20)
     .attr('y', 20);

   group
     .append('circle')
     .attr('r', 50)
     .attr('cx', 300)
     .attr('cy', 70)
     .attr('fill', 'pink');

   svg
     .append('text')
     .attr('x', 20)
     .attr('y', 200)
     .attr('fill', 'grey')
     .text('hello, ninjas')
     .style('font-family', 'arial');
   ```

### Function of Data [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

DOM manipulation methods as append(), style(), attr() etc. can take in a constant **value** or a **function** as a parameter.

**Example**  
Putting data before attr() makes sure you can access data in the DOM manipulation methods.

```js
const svg = d3.select('svg');
const data = [{ width: 200, height: 100, fill: 'blue' }];

svg
  .select('rect')
  .data(d)
  .attr('width', function(d) {
    return data.width;
  })
  .attr('height', function(d) {
    return d.height;
  })
  .attr('fill', function(d) {
    return d.fill;
  });
```

Other than the data (or `d`) parameter, there are two other parameters (`i` and `n`) available to us.

```js
const svg = d3.select('svg');
const data = [{ width: 200, height: 100, fill: 'blue' }];

svg
  .select('rect')
  .data(d, i, n)
  .attr('width', function(d, i, n) {
    console.log(d); // { width: 200, height: 100, fill: 'blue' }
    console.log(i); //  0
    console.log(n); // [rect]
    return d.width;
  });
```

- `d` represents data
- `i` is the index of the current element inside the array
- `n` is the current selection in the array of elements, which results from `svg.select('rect')`

#### Solution for Using Arrow Functions

For the most part, using a regular function and an arrow function in D3 will work in the same way. (as below)  
However, there is one difference. The value of `this` keyword inside the function is going to be different in each case.

```js
svg
  .select('rect')
  .data(data)
  .attr('width', (d, i, n) => {
    return d.width;
  })
  .attr('height', function(d, i, n) {
    return d.height;
  });
```

When using the function keyword `function(d, i, n) {return d.height;}`, the value of `this` is referencing the actual selection (`<rect width="200" height="100" fill="purple"></rect>`).

When using the arrow function `(d, i, n) => {return d.width;}`, the value of `this` is `window`.

To combat this, we can use the other two parameters (`i` and `n`).  
In arrow functions, the value of `n[i]` will equal to `this` in regular functions.  
`n[i]` means the first item (index 0) in the array of element (selected from `svg.select('rect')`).

**Therefore, to grab the current element,**

- **use `this` keyword in regular functions**
- **use `n[i]` in arrow functions**

## Data Binding [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

| Method  | Description                                                                               |
| :------ | :---------------------------------------------------------------------------------------- |
| data()  | Joins data to the selected elements                                                       |
| enter() | Creates a selection with placeholder references for missing elements                      |
| exit()  | Removes nodes and adds them to the exit selection which can be later removed from the DOM |
| datum() | Injects data to the selected element without computing a join.                            |

#### `data()`

`data()` function is used to join the specified array of data to the selected DOM elements and return the updated selection.

Two types of value can be passing in

- an array of values (number or object)
- a function of data.

  **Note:** It does not do anything if a constant value is provided.

The `data()` function binds our data array to the selection.  
However, in a scenario that there are only 1 elements in the DOM, but 3 data elements in the array.  
Only the first data element bound to the one available element. Rest of the data elements from the array were being processed to "enter selection".

#### `enter()`

The `enter()` method dynamically creates elements to the number of data values.  
The output of `enter()` can be fed to `append()` method.  
`append()` will then create DOM elements for which there are no corresponding DOM elements on the page.

<div align="center">
  <img src="https://i.imgur.com/L6vNNC4.png" height="300"/>
</div>

#### `exit()`

While enter() is used to add new reference nodes, exit is used to remove a node.

<div align="center">
  <img src="https://i.imgur.com/6ARpZgm.png" height="330"/>
</div>

### Data Loading [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

D3 can handle different types of data defined either locally in variables or from external files.

The following methods will sends http request to the specified url to load data file, return a promise, and executes callback function.

- d3.csv()
- d3.json()
- d3.tsv()
- d3.xml()

```js
d3.json('./circles.json')
  .then(data => {
    const circles = svg.selectAll('circle').data(data);

    // add attrs to circle already in the DOM
    circles
      .attr('cy', 200)
      .attr('cx', d => d.hours)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);

    // append the enter selection to the DOM
    circles
      .enter()
      .append('circle')
      .attr('cy', 200)
      .attr('cx', d => d.hours)
      .attr('r', d => d.radius)
      .attr('fill', d => d.fill);
  })
  .catch(error => alert('cannot fetch data'));
```

### Scales [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

Added scaling factors is to ensure that our shapes are visible on the screen, because some data values may be too large while others too small.

Using scale allows to map our data values to values that would be better represented in visualizations.

[More D3 Scales](https://github.com/d3/d3-scale/blob/master/README.md#api-reference)

#### Terminology: Domain and Range

- **Domain**

  Domain denotes minimum and maximum values of your input data.

- **Range**
  Range is the output range that you would like your input values to map to.

#### Linear Scale and Band Scale

- **Linear scale** takes in the values in the original data and split out a different value based on how much vertical space is available.

- **Band scale** splits the data into bands of equal width depending on how many different elements in the original data and how much horizontal space is available

<div align="center">
  <img src="https://i.imgur.com/aa2Rp8x.png" height="420"/>
</div>

```js
const svg = d3.select('svg');

d3.json('./sales.json').then(data => {
  // band scale
  const x = d3
    .scaleBand()
    .domain(data.map(item => item.name))
    .range([0, 600])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  // linear scale
  const max = d3.max(data, d => d.sales);
  const y = d3
    .scaleLinear()
    .domain([0, max])
    .range([0, 500]);

  const rects = svg.selectAll('rect').data(data);

  // add attrs to existing element in the DOM
  rects
    .attr('width', x.bandwidth())
    .attr('height', d => y(d.sales))
    .attr('fill', 'blue')
    .attr('x', d => x(d.name));

  // append the enter selection to the DOM
  rects
    .enter()
    .append('rect')
    .attr('width', x.bandwidth())
    .attr('height', d => y(d.sales))
    .attr('fill', 'blue')
    .attr('x', d => x(d.name));
});
```

- `d3.min(data, d => d.orders)` return the minimum
- `d3.max(data, d => d.orders)` return the maximum
- `d3.extent(data, d => d.orders)` return `[min, max]`

#### Ordinal Scales

`d3.scaleOrdinal(range)` creates an ordinal scale.  
By giving it some values (range), it can consistently output the same value for the same thing (domain).  
`ordinal.domain` sets or reads the scale’s domain. (only takes in **array of strings**, not objects.)

<div align="center">
  <img src="https://i.imgur.com/4U9HLlT.png" height="250"/>
</div>

```js
const color = d3.scaleOrdinal(d3['schemePastel1']);
```

[More Color Schemes](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#api-reference)

or assign colors on your own

```js
d3.scaleOrdinal(['earth', 'wind', 'fire'], ['green', 'red', 'blue']);
```

### Axes [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

Graphs have two axes: x-axis (horizontal axis) and y-axis (vertical axis).  
An axis is made of lines, ticks and labels.  
To **create an axis**, it relies on data and scale.

- d3.axisTop()
- d3.axisRight()
- d3.axisBottom()
- d3.axisLeft()

##### Creating y-axis

```js
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', 600)
  .attr('height', 600);

d3.json('./sales.json').then(data => {
  // linear scale (create scale)
  const max = d3.max(data, d => d.sales);
  const yScale = d3
    .scaleLinear()
    .domain([0, max])
    .range([200, 0]); // reverse y-axis (0 is at the bottom)

  // Add scales to axis
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(4)
    .tickFormat(d => d);

  //Append group and insert axis (call yAxis function)
  svg
    .append('g')
    .attr('transform', 'translate(50, 10)')
    .call(yAxis);
});
```

### Animation [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

Transitions are derived from selections via `selection.transition`. You can also create a transition on the document root element using `d3.transition`.

You must append elements or bind data before a transition starts.  
Transitions support most selection methods (such as `transition.attr` and `transition.style` in place of selection.attr and selection.style), but not all methods are supported.

| Method                  | Description                                                                                                                          |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| selection.transition()  | Schedules a transition for the selected elements                                                                                     |
| transition.merge(other) | Returns a new transition merging this transition with the specified other transition, which must have the same id as this transition |
| transition.duration()   | Specifies the animation duration in milliseconds for each element                                                                    |
| transition.ease()       | Specifies the easing function, example: linear, elastic, bounce                                                                      |
| transition.delay()      | Specifies the delay in animation in milliseconds for each element                                                                    |

```js
const svg = d3
  .select('.canvas')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500);

const bar = svg
  .append('rect')
  .attr('fill', 'blue')
  .attr('x', 100)
  .attr('y', 0)
  .attr('height', 0)
  .attr('width', 10);

const update = () => {
  bar
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
    .delay(2000)
    .attr('height', 100);
};

update();
```

#### Custom Interpolator & Tweens

An interpolator is a function which takes your start state A, and your end state B, and returns a function.  
This function can be passed a time ticker (between 0 and1), which represents the duration of the transition (i.e. different stages through the transition that is currently in).  
To specify a custom interpolator, use `transition.attrTween`, `transition.styleTween` or `transition.tween`.

```js
rects
  .enter()
  .append('rect')
  .attr('height', 0)
  .attr('fill', 'LightSteelBlue')
  .attr('x', d => x(d.name))
  .attr('y', graphHeight)
  .merge(rects)
  .transition()
  .attrTween('width', widthTween)
  .duration(500)
  .ease(d3.easeLinear)
  .attr('height', d => graphHeight - y(d.cp))
  .attr('y', d => y(d.cp));

const widthTween = d => {
  // define interpolator (d3.interpolator returns a function)
  let i = d3.interpolate(0, x.bandwidth());

  // return a function which takes in a time ticker "t" (continuously firing until the duration ends)
  return function(t) {
    // return the value from passing the ticker in to the interpolator (0~1)
    return i(t);
  };
};
```

[More about d3-transition](https://github.com/d3/d3-transition#api-reference)

### Event [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

D3 supports built-in events and custom events. We can bind an event listener to any DOM element using `d3.selection.on()` method.

| Method               | Description                                                                                                                          |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| selection.on()       | Adds or removes event listeners to capture event types like click, mouseover, mouseout etc.                                          |
| selection.dispatch() | Returns a new transition merging this transition with the specified other transition, which must have the same id as this transition |
| d3.event             | Event object to access standard event fields such as timestamp or methods like preventDefault                                        |
| d3.mouse(container)  | Gets the x and y coordinates of the current mouse position in the specified DOM element.                                             |
| d3.touch()           | Gets the touch coordinates to a container                                                                                            |

```js
graph
  .selectAll('path')
  .on('mouseover', handleMouseOver)
  .on('mouseleave', handleMouseLeave);
```

```js
const handleMouseOver = (d, i, n) => {
  d3.select(n[i])
    .transition('ChangeFill')
    .duration(300)
    .attr('fill', '#6699CC');
};

const handleMouseLeave = (d, i, n) => {
  d3.select(n[i])
    .transition('ChangeFill')
    .duration(300)
    .attr('fill', d => color(d.data.name));
};
```

**Note 1:** attach events after having enter section showing in the DOM  
**Note 2:** Name your transitions so that it does not interfere with others  
**Note 3:** `n[i]` in arrow functions is equal to `this` in regular functions

## D3 x Firestore (Real-time Database)

### Retrieving Data [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

#### Getting Data

```js
const db = firebase.firestore();

db.collection('collection_name')
  .get()
  .then(snapshot => {
    // create data array
    let data = [];
    snapshot.forEach(doc => {
      data.push(doc.data());
    });

    // then update data
    update(data);
  });
```

#### Getting Real-time Data

```js
const db = firebase.firestore();

let data = [];
db.collection('dishes').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    // use spread operator to spread the object out and create a new object
    const doc = { ...change.doc.data(), id: change.doc.id };

    // identify change type ans do actions respectively
    switch (change.type) {
      case 'added':
        data.push(doc);
        break;
      case 'modified':
        const index = data.findIndex(item => item.id == doc.id);
        data[index] = doc;
        break;
      case 'removed':
        // filter out "false", keep "true"
        data = data.filter(item => item.id !== doc.id);
        break;
      default:
        break;
    }
  });

  update(data);
});
```

### Update Pattern [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

General premise:

1. Update scales (domains) if they rely on the data
2. Join (updated) data to elements
3. Remove unwanted shapes (if there is any) using the exit selection
4. Update current shapes existing in the DOM
5. Append the enter selection to the DOM

```js
const update = data => {
  // update scale if needed
  y.domain([0, d3.max(data, d => d.sales)]);

  // rejoin data
  const rects = graph.selectAll('rect').data(data);

  // remove unwanted shapes (if any)
  rects.exit().remove()

  // update current shape (if wanted)
  rects.attr(...)

  // append additional shapes to the DOM
  rects.enter().append('rect').attr(...)
};
```

## Bar Chart [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

It is much more manageable to break our code in to three main sections in order to dynamically working with database.

---

**Section 1:** Set-ups which does not depend on data (svg, scales, axis, style...etc.)

**Section 2:** Define a update function which includes anything that relies on the data(used in section 3) and update visualization

**Section 3:** Retrieving data or set up a real-time listener

---

### Methods Overview [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

| Method                               | Description                                                                                 |
| :----------------------------------- | :------------------------------------------------------------------------------------------ |
| d3.scaleBand()                       | Band scales are like ordinal scales except the output range is continuous and numeric.      |
| d3.scaleLinear()                     | Construct continuous linear scale where input data (domain) maps to specified output range. |
| d3.axisBottom(xScale)                | Creates an ordinal scale                                                                    |
| d3.axisLeft(yScale)                  | Creates an ordinal scale                                                                    |
| axisGroup.call(d3.axisBottom(xScale) | Inserts x-axis/y-axis into this group element                                               |
| axis.ticks(n)                        | Specifies the number of ticks on y-axis                                                     |
| axis.tickFormat()                    | formats the ticks                                                                           |

### Break Down in Steps [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

1. Creating the SVG and dimensions

   ```js
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

   // create group for chart and move the graph down from top left
   const graph = svg
     .append('g')
     .attr('width', graphWidth)
     .attr('height', graphHeight)
     .attr('transform', `translate(${margin.left}, ${margin.top})`);

   // create group axex in graph and move x-axis to the bottom
   const xAxisGroup = graph
     .append('g')
     .attr('transform', `translate(0, ${graphHeight})`);

   const yAxisGroup = graph.append('g');
   ```

2. Defining the scales (static scale attr)  
   _Leave the parts that interact with data in update function later)_

   ```js
   // band scale
   const x = d3
     .scaleBand()
     .range([0, graphWidth])
     .padding(0.2);

   // linear scale (reverse min and max)
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
   ```

3. Defining update function

   ```js
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
   ```

4. Getting data and call update function

   ```js
   let data = [];
   db.collection('dishes').onSnapshot(snapshot => {
     snapshot.docChanges().forEach(change => {
       // use spread operator to spread the object out and create a new object
       const doc = { ...change.doc.data(), id: change.doc.id };

       // identify change type ans do actions respectively
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
           break;
         default:
           break;
       }
     });

     update(data);
   });
   ```

5. Adding animation

   ```js
   rects
     .attr('width', x.bandwidth())
     .attr('fill', 'LightSteelBlue')
     .attr('x', d => x(d.name));

   rects
     .enter()
     .append('rect')
     .attr('width', x.bandwidth())
     .attr('height', 0)
     .attr('fill', 'LightSteelBlue')
     .attr('x', d => x(d.name))
     .attr('y', graphHeight)
     .merge(rects)
     .transition()
     .duration(500)
     .attr('height', d => graphHeight - y(d.cp))
     .attr('y', d => y(d.cp));
   ```

   Or to declare at the top (set-up section)

   ```js
   const t = d3.transition().duration(500);

   const update = data => {

     ** omitted **
     rects
       .attr('width', x.bandwidth())
       .attr('fill', 'LightSteelBlue')
       .attr('x', d => x(d.name));

     rects
       .enter()
       .append('rect')
       .attr('width', x.bandwidth())
       .attr('height', 0)
       .attr('fill', 'LightSteelBlue')
       .attr('x', d => x(d.name))
       .attr('y', graphHeight)
       .merge(rects)
       .transition(t)
       .attr('height', d => graphHeight - y(d.cp))
       .attr('y', d => y(d.cp));
   }
   ```

## Pie Chart [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

### Methods Overview [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

| Method            | Description                                  |
| :---------------- | :------------------------------------------- |
| d3.pie()          | Creates an pie generator (calculate radians) |
| d3.arc()          | Creates an arc generator (create path)       |
| d3.scaleOrdinal() | Creates an ordinal scale                     |

**Note:** 2 radians equals 360 degrees

#### d3.pie()

`d3.pie()` takes in the data, calculates the start angle and end angle for each wedge of the pie chart, and generate a new array object, which contains original data (**example: access through `d.data.name`**).  
These start and end angles can then be used later in `d3.arc()` to create actual paths for the wedges.

```js
const pie = d3
  .pie()
  .sort(null)
  .value(d => d.cost);
```

Let's pass in a set of dummy data, and see what `pie(data)` returns

<div align="center">
  <img src="https://i.imgur.com/7ydyQmF.png" height="200"/>
</div>

It creates a startAngle, endAngle, and store the original data.

#### d3.arc()

`d3.arc()` generates paths that will create the pie's wedges.  
Arcs need an **inner radius** and **outer radius**.  
If the inner radius is 0, the result will be a _pie chart_, otherwise the result will be a _donut chart_.

```js
const arcPath = d3
  .arc()
  .outerRadius(dims.radius)
  .innerRadius(dims.radius / 2);
```

If we pass in what `pie(data)` created into `arc()` function, we will get a path, which is used to draw the pie chart.

### Break Down in Steps [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

1. Creating the SVG and dimensions

   ```js
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
   ```

2. Initializing `pie()`, `arc()`, and ordinal scales

   ```js
   const pie = d3
     .pie()
     .sort(null)
     .value(d => d.cost);

   const arcPath = d3
     .arc()
     .outerRadius(dims.radius)
     .innerRadius(dims.radius / 2);

   const color = d3.scaleOrdinal(d3['schemePastel1']);
   ```

3. Defining update function

   ```js
   const update = data => {
     // update scale domain
     color.domain(data.map(d => d.name));

     // join enhanced (pie) data to path elements
     const paths = graph.selectAll('path').data(pie(data));

     // handle the exit selection
     paths.exit().remove();

     // handle the current DOM path updates
     paths.attr('d', arcPath);

     // handle the enter selection
     paths
       .enter()
       .append('path')
       .attr('class', 'arc')
       .attr('d', arcPath)
       .attr('stroke', '#fff')
       .attr('stroke-width', 3)
       .attr('fill', d => color(d.data.name));
   };
   ```

4. Getting data (same as in bar chart section)

5. Adding animation

   - for enter selection: transit from end angle to start angle

     ```js
     const arcTweenEnter = d => {
        let i = d3.interpolate(d.endAngle, d.startAngle);

        return function(t) {
          d.startAngle = i(t);
          return arcPath(d);
        };
      ;
     ```

     ```js
     paths
       .enter()
       .append('path')
       .attr('class', 'arc')
       .attr('stroke', '#fff')
       .attr('stroke-width', 3)
       .attr('fill', d => color(d.data.name))
       .transition()
       .duration(750)
       .attrTween('d', arcTweenEnter);
     ```

   - for exit selection: transit from start angle to end angle

     ```js
     const arcTweenEnter = d => {
       let i = d3.interpolate(d.endAngle, d.startAngle);

       return function(t) {
         d.startAngle = i(t);
         return arcPath(d);
       };
     };
     ```

     ```js
     paths
       .exit()
       .transition()
       .duration(750)
       .attrTween('d', arcTweenExit)
       .remove();
     ```

   - for exiting element: transit from previous angle to current angle

     **Store original position when enter**

     ```js
     paths
       .enter()
       **omitted**
       .each(function(d) {
         this._current = d;
       })
       .transition()
       .duration(750)
       .attrTween('d', arcTweenEnter);
     ```

     **Create custom tween and apply**

     ```js
     function arcTweenUpdate(d) {
       let i = d3.interpolate(this._current, d);

       // update the current position with the updated data
       this._current = i[1];

       return function(t) {
         return arcPath(i(t));
       };
     }
     ```

     ```js
     paths
       .transition()
       .duration(750)
       .attrTween('d', arcTweenUpdate);
     ```

6. Adding legend using [d3 SVG Legend](https://d3-legend.susielu.com/)

   ```js
   const legendGroup = svg
     .append('g')
     .attr('transform', `translate(${dims.width + 40}, 10)`);

   const legend = d3
     .legendColor()
     // .shape('circle')
     .shape('path', d3.symbol().type(d3.symbolCircle)())
     .shapePadding(10)
     .scale(color);

    const update = data => {
      // update scale domain
      color.domain(data.map(d => d.name));

      // update and call legend
      legendGroup.call(legend);
      legendGroup.selectAll('text').attr('fill', '#fff');

      **omitted**

    }
   ```

7. (Additional) Event listeners, [tooltip](https://github.com/caged/d3-tip)...etc.

## Line Chart [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

### Break Down in Steps [&#916;](https://github.com/Wangchimei/d3_data_visualization_study#table-of-content)

1. Creating the SVG and dimensions

   ```js
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

   // axes groups
   const xAxisGroup = graph
     .append('g')
     .attr('class', 'x-axis')
     .attr('transform', `translate(0, ${graphHeight})`);

   const yAxisGroup = graph.append('g').attr('class', 'y-axis');
   ```

2. Setting up time scale(x) and linear scale(y)

   ```js
   const x = d3.scaleTime().range([0, graphWidth]);
   const y = d3.scaleLinear().range([graphHeight, 0]);
   ```

3. Setting up line generator for line chart

   ```js
   // d3 line path generator
   const line = d3
     .line()
     .x(function(d) {
       return x(new Date(d.date));
     })
     .y(function(d) {
       return y(d.hours);
     });
   // line path element
   const path = graph.append('path');
   ```

4. Defining update function

   ```js
   const update = data => {
     // sort data
     data.sort((a, b) => {
       new Date(a.date) - new Date(b.date);
     });
     // update domain
     x.domain(d3.extent(data, d => new Date(d.date)));
     y.domain([0, d3.max(data, d => d.hours)]);

     // update line generator path data (data needs to be an array)
     path
       .data([data])
       .attr('fill', 'none')
       .attr('stroke', '#00bfa5')
       .attr('stroke-width', '2')
       .attr('d', line);

     // create circle for objects
     const circles = graph.selectAll('circle').data(data);

     // remove from exit selection
     circles.exit().remove();

     // update existing circles
     circles.attr('cx', d => x(new Date(d.date))).attr('cy', d => y(d.hours));

     // add from enter selection
     circles
       .enter()
       .append('circle')
       .attr('r', '4')
       .attr('cx', d => x(new Date(d.date)))
       .attr('cy', d => y(d.hours))
       .attr('fill', '#ccc');

     // create and call axes
     const xAxis = d3
       .axisBottom(x)
       .ticks(5)
       .tickFormat(d3.timeFormat('%b %d'));

     const yAxis = d3
       .axisLeft(y)
       .ticks(4)
       .tickFormat(d => d + 'hr');

     xAxisGroup.call(xAxis);
     yAxisGroup.call(yAxis);
   };
   ```

5. Getting data (same as in bar chart section)

6. (Additional) dotted lines, event listeners, [tooltip](https://github.com/caged/d3-tip)...etc.
