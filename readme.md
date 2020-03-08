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

![Rectangle](https://i.imgur.com/ukw7MpG.png)

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

![Circle & Ellipse](https://i.imgur.com/GRRKttv.png)

```
<svg width="400" height="50">
  <circle cx="100" cy="20" r="20" stroke="black" stroke-width="2" fill="lightskyblue"></circle>

  <circle cx="200" cy="50" r="40" stroke="black" stroke-width="2" fill="peachpuff"></circle>

  <ellipse cx="320" cy="20" rx="50" ry="20" stroke="black" stroke-width="2" fill="turquoise"></ellipse>
</svg>
```

- `cx` and `cy` define the x-axis coordinate of a center point.

### Line

![Line](https://i.imgur.com/JNj8yup.png)

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

![Polygon & Polyline](https://i.imgur.com/8tKYiNK.png)

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

![Path](https://i.imgur.com/W4dWtlk.png)

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
