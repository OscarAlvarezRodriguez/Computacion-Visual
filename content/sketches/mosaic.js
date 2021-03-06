let imageCells;
let pg;
let mosaic;
let video_src;
// ui
let resolution;
let video_on;
let p;
let image_src;
const SAMPLE_RES = 10;

let input;
let img;

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
  image_src = loadImage(file.data)
  mosaic.setUniform('source', image_src);
}

function preload() {
  video_src = createVideo(['/Computacion-Visual/sketches/video.mp4']);
  video_src.hide();
  mosaic = loadShader('/Computacion-Visual/sketches/shader.vert','/Computacion-Visual/sketches/photomosaic.frag');
  image_src = loadImage('/Computacion-Visual/sketches/descarga.jpeg');
  p = [];
  for (let i = 1; i <= 17; i++) {
    p.push(loadImage(`/Computacion-Visual/sketches/imagenesFinal/${i}.jpg`));
  }
}

function setup() {
  console.log("inicio setup")
  input = createFileInput(handleFile);
  input.position(10, 40);
  createCanvas(650, 650, WEBGL);
  colorMode(RGB, 1);
  imageCells = createQuadrille(p);
  imageCells.sort()
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
  video_on.position(10, 10);
  mosaic.setUniform('source', image_src);
  resolution = createSlider(1, 500, 0, 1);
  resolution.position(10, 550);
  resolution.style('width', '150px');
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

function cover(texture = false) {
  beginShape();
  vertex(-width / 2, -height / 2, 0, 0, 0);
  vertex(width / 2, -height / 2, 0, texture ? 1 : 0, 0);
  vertex(width / 2, height / 2, 0, texture ? 1 : 0, texture ? 1 : 0);
  vertex(-width / 2, height / 2, 0, 0, texture ? 1 : 0);
  endShape(CLOSE);
}

function draw() {
  cover({ texture: true });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}