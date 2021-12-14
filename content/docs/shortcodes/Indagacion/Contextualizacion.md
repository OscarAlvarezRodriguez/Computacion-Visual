# TAREA 2 - Indagación sobre método de Iluminación Global

## Radiosidad (Gráficos computacionales)

### Contextualización

En gráficos de computadora 3d, la radiosidad es la aplicación del método de elemento finito para resolver la ecuación de rasterización para escenas con superficies que reflejan luz de manera difusa. A diferencia de otros métodos de rasterización que utilizan algoritmos Monte Carlo (como path tracing), donde se manejan todo tipos de caminos de luz, la radiosidad típica solo cuenta los caminos que dejan una fuente de luz y son reflejados de manera difusa algún número de veces antes de golpear el ojo.

Los métodos de radiosidad fueron primero desarrollados en los 1950 en el campo de ingeniería de transferencia de calor. después fueron refinados específicamente para el problema de renderizado de gráficos de computador en 1984 por investigadores de la Universidad de Cornell y la Universidad de Hiroshima.

<center>
<img src="../Assets/images/Radio1.png" width="600" height="600" alt="Base radiosity"/>
</center>

En la imagen anterior podemos ver una escena renderizada con RRV, que es una implementación simple de la radiosidad basada en OpenGL, en su interacción número 79.

La radiosidad es un algoritmo de iluminación global en el sentido que la iluminación que llega a una superficie no proviene solamente de la fuente directa de luz sino también de otras superficies reflejando luz. La radiosidad es independiente del punto de vista del observador, lo cual incrementa el número de cálculos que se necesitan, pero se hace útil para todos los puntos de vista.

<center>
<img src="../Assets/images/Radiosity_Comparison.jpg" width="1600" height="1600" alt="Comparacion de Radiosidad"/>
</center>

La inclusión de cálculos de radiosidad en el proceso de renderizado frecuentemente añade un elemento de realismo a la imagen final, por la manera en que mimetiza el fenómeno del mundo real.

La imagen en la izquierda fue renderizada con un renderizado típico de iluminación directa. Hay tres tipos de luz en esta escena que han sido específicamente escogidos y puestos por el artista en un intento de crear iluminación realista. iluminación Spot con sombras (Ubicada afuera de la ventana para crear la luz brillando en el piso), iluminación de ambiente(Sin esta alguna parte del cuarto que no tenga una iluminación directa estaría totalmente oscura) e iluminación omnidireccional sin sombras(para reducir la planeidad de la iluminación de ambiente).

La imagen en la derecha fue renderizada utilizando un algoritmo de radiosidad. Solo hay una fuente de luz: una imagen puesta en el cielo afuera de la ventana. La diferencia es marcada, la habitación brilla con luz, las sombras suaves son visibles en el piso y los efectos sutiles de iluminación son notables alrededor del cuarto. Adicionalmente, el color rojo de la alfombra se ha desangrado a las paredes grises, dando una apariencia más cálida. Ninguno de estos efectos fue específicamente escogidos o diseñados por el artista.

<center>
<img src="../Assets/images/Radio2.png" width="1500" height="1500" alt="Iteraciones"/>
</center>

A medida que el algoritmo itera, la luz puede verse fluir en la escena, a medida que múltiples 
rebotes son computados. Parches individuales son visibles como cuadros en las paredes y en el suelo.
