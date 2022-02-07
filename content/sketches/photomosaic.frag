precision mediump float;


uniform sampler2D source;
uniform sampler2D palette;
uniform float cols;
uniform bool debug;
uniform vec4 background;
uniform vec4 foreground;
uniform float resolution;
uniform bool avg;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

float luma(vec3 color) {
  return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
}

float AVG(vec3 color) {
  return  0.333 *color.r +0.333 *color.g + 0.333 *color.b ;
}

void main() {
  vec2 symCoord = vTexCoord * resolution;
  vec2 pasCoord = floor(symCoord);
  symCoord = symCoord - pasCoord;
  pasCoord = pasCoord / vec2(resolution);
  
  vec4 key = texture2D(source, pasCoord);
  mediump float avg7;
  mediump float luma7;
  mediump float zluma;
  mediump float rluma;
  mediump float zavg;
  mediump float ravg;
  if(avg){
    avg7 =  AVG(key.rgb) * cols;
    zavg = floor(avg7)+ symCoord.s;
    ravg = zavg/cols;
    vec2 fcord = vec2(ravg,symCoord.t);
    vec4 paletteTex = texture2D(palette, fcord);
    gl_FragColor =  paletteTex;
  }else{
    luma7 =  luma(key.rgb) * cols;
    zluma = floor(luma7)+ symCoord.s;
    rluma = zluma/cols;
    vec2 fcord = vec2(rluma,symCoord.t);
    vec4 paletteTex = texture2D(palette, fcord);
    gl_FragColor =  paletteTex;
  } 
}