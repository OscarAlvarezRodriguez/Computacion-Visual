# Espacio de oscar

## Primer tarea

### Ilusión óptica - Conexión diagonal de los puntos de intersección
Son líneas fugazmente ilusorias que conectan en diagonal los puntos de intersección de los polígonos de las estrellas.

"Nunca se ha demostrado que los rayos ilusorios atraviesen el fondo de un diseño", dijo Karlovich a Live Science. "Todas las demás ilusiones que implican líneas ilusorias se limitan a los diseños de cuadrícula".

Los diseños de cuadrícula, como la ilusión de cuadrícula de Hermann, se prestan a crear este tipo de efecto porque es mucho más fácil crear puntos brillantes llamativos en las intersecciones de la cuadrícula.

{{< columns >}}

<--->
![The San Juan Mountains are beautiful!](../Assets/images/Illusion-oscar.jpg)

<img src="../Assets/images/Illusion-oscar.jpg" width="200" height="200" />
<--->
{{< /columns >}}

Lo mejor es la ilusión de la cuadrícula centelleante (parecida a la de Hermann y descubierta por E. Lingelbach en 1994). Basta fijarse en una de las intersecciones (cualquiera), para comprobar que no hay ningún punto negro. Aunque allí hay otro. Y allí. Y allí.

{{< columns >}}

<--->
![The San Juan Mountains are beautiful!](../Assets/images/Illusion-oscar-2.jpg)

<img src="../Assets/images/Illusion-oscar-2.jpg" width="200" height="200" />
<--->
{{< /columns >}}

{{< p5-global-iframe width="625" height="425" >}}
let rSlider, gSlider, radioSlider, r;

function setup() {
  // create canvas
  createCanvas(600, 400);
  textSize(15);

  // create sliders
  circleXSlider = createSlider(2, 30, 5);
  circleXSlider.position(20, 20);
  circleYSlider = createSlider(2, 30, 5);
  circleYSlider.position(20, 50);
  radioSlider = createSlider(2, 30, 5);
  radioSlider.position(20, 80);
  
}

function draw() {
  background(0, 0, 0);
  fill(255, 255, 255);
  text(str(circleXSlider.value() + ' - circlesX'), circleXSlider.x * 2 + circleXSlider.width, 35);
  text(str(circleYSlider.value() + ' - circlesY'), circleYSlider.x * 2 + circleYSlider.width, 65);
  text(str(radioSlider.value() + ' - Radio'), radioSlider.x * 2 + radioSlider.width, 95);
  
  noStroke();
  fill(177,177,177);
  for (let i = 1; i < circleYSlider.value()+1; i += 1) {
    rect(0, (height*i)/(circleYSlider.value()+1)-(radioSlider.value()/2), width, radioSlider.value());
  }
  
  for (let i = 1; i < circleXSlider.value()+1; i += 1) {
    rect((width*i)/(circleXSlider.value()+1)-(radioSlider.value()/2), 0, radioSlider.value(),height);
  }
  
  fill(255, 255, 255);
  for (let i = 1; i < circleXSlider.value()+1; i += 1) {
    for (let j = 1; j < circleYSlider.value()+1; j += 1) {
      circle((width*i)/(circleXSlider.value()+1), (height*j)/(circleYSlider.value()+1), radioSlider.value()+1);
    }
  }
}

function keyPressed(){
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    circleXSlider.value(5);
    circleYSlider.value(5);
    radioSlider.value(5);
  }
}

{{< /p5-global-iframe >}}