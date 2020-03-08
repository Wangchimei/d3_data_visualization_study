# Data Visualization with D3.js

## SVG Basic

### SVG Shapes

- Rectangle `<rect>`
- Circle `<circle>`
- Ellipse `<ellipse>`
- Line `<line>`
- Polygon `<polygon>`
- Polyline `<polyline>`
- Path `<path>`

### Rectangle

<div style="text-align:center;">
  <img src="https://i.imgur.com/ukw7MpG.png" height="100" />
</div>

```
 <svg width="400" height="50">
  <rect x="100" y="10" fill="lightskyblue" width="100" height="30" stroke="black" stroke-width="2"></rect>
  <rect x="250" y="10" rx="20" ry="20" fill="peachpuff" width="100" height="30" stroke="black" stroke-width="2" opacity="0.7"></rect>
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

### Circle & Ellipse

<div style="text-align:center;">
  <img src="https://i.imgur.com/GRRKttv.png" height="100" />
</div>

```
<svg width="400" height="50">
  <circle cx="100" cy="20" r="20" stroke="black" stroke-width="2" fill="lightskyblue"></circle>

  <circle cx="200" cy="50" r="40" stroke="black" stroke-width="2" fill="peachpuff"></circle>

  <ellipse cx="320" cy="20" rx="50" ry="20" stroke="black" stroke-width="2" fill="turquoise"></ellipse>
</svg>
```

- `cx` and `cy` define the x-axis coordinate of a center point.

### Line

<div style="text-align:center;">
  <img src="https://i.imgur.com/JNj8yup.png" height="100" />
</div>

```
<svg width="400" height="50">
  <line x1="100" y1="10" x2="300" y2="30" stroke="black" stroke-width="4"></line>
</svg>
```

- `x1` and `y1` defines the coordinate of the starting point.
- `x2` and `y2` defines the coordinate of the end point.

### Polygon & Polyline

`<polygon>` defines a closed shape as the last point is connected to the first point. (all the lines connect up)

`<polyline>` defines a open shape as the last point doesn't have to be connected to the first point.

<div style="text-align:center;">
  <img src="https://i.imgur.com/8tKYiNK.png" height="150" />
</div>

```
<svg width="450" height="230">
  <polygon points="100,20 40,198 190,78 10,78 160,198" fill="lightskyblue" stroke="black" stroke-width="2" fill-rule="nonzero"></polygon>

  <polyline points="250,40 290,40 290,80 330,80 330,120 370,120 370,160 410,160 410,200" fill="none" stroke="peachpuff" stroke-width="4"></polyline>
</svg>
```

- `fill-rule` has tow values: `nonzero` and `evenodd`

### Path

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

<div style="text-align:center;">
  <img src="https://i.imgur.com/W4dWtlk.png" height="150"/>
</div>

```
<svg width="450" height="230">
  <path d="M 150 50 L 75 200 L 225 200 C 225 200 150 150 150 50" fill="lightskyblue" />

  <circle cx="150" cy="150" r="5" fill="darkslategrey"></circle>
  <line x1="225" y1="200" x2="150" y2="150" stroke="darkslategrey" stroke-width="1"></line>
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

### DOM Selection

Similar to using `querySelector` and `querySelector` in JavaScript, D3 use `select` and `selectAll` to select the placeholder entries from the DOM.

| Method                     | Description                                             |
| :------------------------- | :------------------------------------------------------ |
| d3.select(css-selector)    | Returns the first matching element in the HTML document |
| d3.selectAll(css-selector) | Returns all the matching elements in the HTML document  |

```
const canvas = d3.select('.canvas');
```

### DOM Manipulation

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

### Method Chaining

```
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

### Grouping

Grouping can be helpful if you are working with a more complex chart, or you would like to manipulate elements together.

1. Append `<g>` after `<svg>`

   ```
   const svg = canvas
     .append('svg')
     .attr('width', 600)
     .attr('height', 600);

   const group = svg.append('g')
   .attr('transform', 'translate(0, 100)');
   ```

2. Append shapes that you want to group after `<g>`

   ```
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
   .style('font-family', 'arial')
   ```

### Function of Data

DOM manipulation methods as append(), style(), attr() etc. can take in a constant **value** or a **function** as a parameter.

**Example**  
Putting data before attr() makes sure you can access data in the DOM manipulation methods.

```
const svg = d3.select('svg');
const data = [{ width: 200, height: 100, fill: 'blue' }];

svg
  .select('rect')
  .data(d)
  .attr('width', function(d) { return data.width; })
  .attr('height', function(d) { return d.height; })
  .attr('fill', function(d) { return d.fill; });
```

Other than the data (or `d`) parameter, there are two other parameters (`i` and `n`)available to us.

```
const svg = d3.select('svg');
const data = [{ width: 200, height: 100, fill: 'blue' }];

svg
  .select('rect')
  .data(d, i, n)
  .attr('width', function(d, i, n) {
    console.log(d);    // { width: 200, height: 100, fill: 'blue' }
    console.log(i);    //  0
    console.log(n);    // [rect]
    return d.width;
  })
```

- `d` represents data
- `i` is the index of the current element inside the array
- `n` is the current selection in the array of elements, which results from `svg.select('rect')`

#### Solution for Using Arrow Functions

For the most part, using a regular function and an arrow function in D3 will work in the same way. (as below)  
However, there is one difference. The value of `this` keyword inside the function is going to be different in each case.

```
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
