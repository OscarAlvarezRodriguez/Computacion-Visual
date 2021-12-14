# TAREA 2 - Implementación de un algoritmo de rasterización

## Rasterización de circulos

### Implementación - Algoritmo de Rasterización de Circulo de Bresenham


{{< p5-global-iframe width="625" height="625" >}}

let x, y, r, d, xc, yc,vr,vx,vy;

let i = 0;
let grids = 30;
let scalFact;
vr = 6;
vx = 10;
vy = 10;

function setup() {
  createCanvas(600, 600);
  scalFact = width / grids;
}
  
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function keyPressed() {
  vr = getRandomArbitrary(1,8);
  vx = getRandomArbitrary(5,15);
  vy = getRandomArbitrary(5,15);
  clear();

  draw();
}

function draw(){  
  r = vr * scalFact;
  xc = vx * scalFact;
  yc = vy * scalFact;
  
  showGrids();
  showRefCircle();
  bresenham();
}

function showGrids() {
  noStroke();
  stroke(200);
  fill(200);
  for (i = 0; i < grids * scalFact; i += scalFact) {
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
{{< /p5-global-iframe >}}
