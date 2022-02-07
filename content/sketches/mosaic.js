let imageCells;
let pg;
let mosaic;
let video_src;
let cols;
// ui
let resolution;
let video_on;
let p;
let image_src;
const SAMPLE_RES = 30;

function preload() {
  video_src = createVideo(['/vc/sketches/mandrill.webm']);
  video_src.hide();
  mosaic = readShader('/vc/sketches/photomosaic.frag');
  image_src = loadImage('/vc/sketches/mandrill.png');
  p = [];
  for (let i = 1; i <= 10; i++) {
    p.push(loadImage(`/vc/sketches/images/${i}.jpg`));
  }
}

function setup() {
  createCanvas(650, 650, WEBGL);
  colorMode(RGB, 1);
  imageCells = createQuadrille(p);
  textureMode(NORMAL);
  noStroke();
  shader(mosaic);
  mosaic.setUniform('avg', false);
  video_on = createCheckbox('video', false);
  video_on.style('color', 'magenta');
  video_on.changed(() => {
    if (video_on.checked()) {
      mosaic.setUniform('source', video_src);
      video_src.loop();
    } else {
      mosaic.setUniform('source', image_src);
      video_src.pause();
    }
  });
  video_on.position(10, 80);
  mosaic.setUniform('source', image_src);
  resolution = createSlider(1, 150, 50, 1);
  resolution.position(10, 10);
  resolution.style('width', '80px');
  resolution.input(() => { mosaic.setUniform('resolution', resolution.value()) });
  mosaic.setUniform('resolution', resolution.value());
  pg = createGraphics(SAMPLE_RES * imageCells.width, SAMPLE_RES);
  mosaic.setUniform('cols', imageCells.width);
  sortm();
}

function sortm() {
  drawQuadrille(imageCells, { graphics: pg, cellLength: SAMPLE_RES, outlineWeight: 0 });
  mosaic.setUniform('palette', pg);
}

function draw() {
  cover({ texture: true });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}