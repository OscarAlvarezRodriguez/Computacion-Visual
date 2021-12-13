# TAREA 2 - Implementación de un algoritmo de rasterización

## Rasterización de circulos

### Ejemplo de en donde puede aplicarse algún algoritmo de rasterización de circulos.

Antes de observar los ejemplos lea las primeras dos partes Contextualización e Implementación que permite la compresión más a fondo de por qué seria efectivo aplicar la rasterización de circulos principalmente en videojuegos antiguos de pixel art (hay que tener en cuenta que en cada frame del video juego se debe redibujar y calcular los objetos)  

Hay que primero recordar que la rasterización de circulos es un método para dibujar de manera efectiva circulos (perfectos) y con variaciones dibujar elipses.

Ahora bien ""VENTAJAS"" y ""DESVENTAJAS"" 

La primer imagen que se va a mostrar es la silueta principal de una bomba utilizada en mario bros se deben destacar tres cosas de aqui:

{{< columns >}}

El contorno de la bomba imita a un circulo casi perfecto.

<--->

El brillo de la bomba son circulos, todos con el mismo centro es decir solo varia el radio.

<--->

la mecha son 2 circulos que oscilan de radio uno y dos

{{< /columns >}}

<center>
<img src="../Assets/gifts/mario.gif" width="400" height="400" alt="Gift de mario y su bomba"/>
</center>


Eso en el uno de los juegos más conocidos, ahora se mostrará dos escenas de Sonic  donde se evidencian circulos bien definidos, que pueden ser calculados con rasterización.

{{< columns >}}

<center>
<img src="../Assets/images/games_sonic_dash_widescreen_04.jpg" width="400" height="400" alt="Imagen de Sonic 3d en medio de una carrera"/>

Los anillos de oro que debe recoger Sonic son circulos casi perfectos, que denotan un grosor, a manera rapida de explicación se calcula el exterior, el interior y luego se rellena.
</center>

<--->

<center>
<img src="../Assets/images/Sonic-CD-for-Android-577445225f9b585875934158.png" width="330" height="400" alt="Sonic en el primer nivel de un videojuego"/>

La espiral es el primer circulo perfecto que salta a la vista, sin embargo los controles que se muestran gris transparente en la parte inferior tambien poseen estos circulos.
</center>

{{< /columns >}}

Para finalizar, el ejemplo más ilustrativo de que sin importar las generaciones de gráficos computacionales se puede utilizar la rasterización de circulos, principalmente en los contornos.

{{< columns >}}
<img src="../Assets/images/Star1.png" width="330" height="400" alt="Moneda 1 mario"/>
<--->
<img src="../Assets/images/Star2.png" width="330" height="400" alt="Moneda 2 mario"/>
<--->
<img src="../Assets/images/Star3.png" width="330" height="400" alt="Moneda 3 mario"/>
<--->
<img src="../Assets/images/Star4.png" width="330" height="400" alt="Moneda 4 mario"/>
{{< /columns >}}