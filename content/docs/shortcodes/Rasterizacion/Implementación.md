# TAREA 2 - Implementación de un algoritmo de rasterización

## Rasterización de circulos

### Implementación - Algoritmo de Rasterización de Bresenham

<center>
<script>
    let x, y, r, d, xc, yc;

let i = 0;
let grids = 20;
let scalFact;

function setup() {
  createCanvas(600, 600);
  background(0);

  scalFact = width / grids;
  r = 6 * scalFact;

  xc = 10 * scalFact;
  yc = 10 * scalFact;

  showGrids();
  showRefCircle();
  bresenham();
}

function showGrids() {
  stroke(200);
  for (i; i < grids * scalFact; i += scalFact) {
    line(i, 0, i, height);
    line(0, i, width, i);
  }
}

function showRefCircle() {
  stroke(200);
  noFill();
  circle(xc + (scalFact / 2), yc + (scalFact / 2), r * 2);
}

function bresenham() {
  x = 0;
  y = r;

  d = (3 * scalFact) - (2 * r);

  symPlot();
  while (x <= y) {
    if (d <= 0) {
      d = d + (4 * x) + (6 * scalFact);
    } else {
      d = d + (4 * x) - (4 * y) + (10 * scalFact);
      y -= scalFact;
    }

    x += scalFact;
    symPlot();
  }
}

function symPlot() {
  fillPixel(x + xc, y + yc);
  fillPixel(x + xc, -y + yc);
  fillPixel(-x + xc, -y + yc);
  fillPixel(-x + xc, y + yc);
  fillPixel(y + xc, x + yc);
  fillPixel(y + xc, -x + yc);
  fillPixel(-y + xc, -x + yc);
  fillPixel(-y + xc, x + yc);
}

function fillPixel(x, y) {
  noStroke();
  squareColor = color(0, 128, 0);
  squareColor.setAlpha(100);
  fill(squareColor);
  square(x, y, scalFact);
}
</script>
</center>