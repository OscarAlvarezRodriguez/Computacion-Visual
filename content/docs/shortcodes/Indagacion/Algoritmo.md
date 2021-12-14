# TAREA 2 - Indagación sobre método de Iluminación Global

## Radiosidad (Gráficos computacionales)


## 1.  Explicación del algoritmos de radiosidad

 Para la implementación de algoritmos de radiosidad se consideran todos los puntos y objetos de la escena y la luz que llega a cada uno, de ahí que se tomen como luces potenciales con luz propia (luz directa) o proveniente de otros objetos (luz indirecta).

También es una aplicación del método de los elementos finitos para resolver la ecuación de renderizado, extendido hasta calcular la interacción de reflexión difusa entre objetos de una escena, simulando transferencia de luz.

Una de las maneras, dentro de estos algoritmos, para disminuir la complejidad computacional es manejar la interacción de los objetos en una escena sea difusa y que todos los rayos de luz sean reflejados de forma homogénea y con la misma intensidad en todas las direcciones. De manera que los cálculos sean independientes de la posición de la cámara.

<center>
<img src="../Assets/images/radiosidadAlg9.jpg" width="600" height="600" alt="Base radiosity"/>
</center>


<br/><br/>

## La ecuación de radiosidad

El cálculo de radiosidad se define como la energía por unidad de área que sale de una superficie por unidad de tiempo, pero asumiendo un equilibrio en la energía se ignora de la ecuación del tiempo. Es decir que esta ecuación se puede describir como la suma de la energía emitida por la superficie (luz directa, fuentes de luz) y la energía reflejada proveniente de otras superficies:

De manera general, entonces, la ecuación se puede definir como:

<center>
<img src="../Assets/images/radiosidadAlg1.png" width="600" height="600" alt="Base radiosity"/>
</center>

Más detalladamente: 
{{< hint info >}}
    {{< katex display >}}
    B_{i} = E_{i} + R_{i} \int B_{j}F_{ij}
    {{< /katex >}}
{{< /hint >}}

 
donde:

<center>
<img src="../Assets/images/radiosidadAlg3.png" width="600" height="600" alt="Base radiosity"/>
</center>

Existe un problema respecto a esta ecuación, dado que trabaja con una integral que maneja una realidad continua, lo cúal es inmanejable computacionalmente. De modo que se hace necesario discretizar la ecuación, que sirva para un número finito de elementos. De manera que la ecuación queda de la siguiente manera: 

{{< hint info >}}
{{< katex display >}}
B_{i} = E_{i} + R_{i} \sum  B_{j}F_{ij}
{{< /katex >}}
{{< /hint >}}


Podemos representar también nuestra ecuación de manera matricial, como se muestra a continuación:

<center>
<img src="../Assets/images/radiosidadAlg5.png" width="600" height="600" alt="Base radiosity"/>
</center>

Como se observa, la fila de la matriz representa la interrelación de cada elemento continuo de iluminación con el resto de la escena.

El cálculo de la ecuación de radiosidad implica a su vez calcular variables distintas de forma independiente. Ri es un factor multiplicativo de reflexión, que es dependiente del material del objeto tratado. De esta forma, Ri es un valor conocido y almacenado por cada objeto de nuestra escena. Sin embargo, Fij es una variable mucho más compleja que implica cálculos de extraordinaria complejidad. Se denomina factor de forma, y modela la relación espacial entre dos objetos en términos de distancia y ángulo entre sus normales. De esta forma, tenemos un parámetro indicativo de la cantidad de luz reflejada por un corrector j que alcanza el corrector i que está siendo analizado. La figura 6 muestra gráficamente esta relación entre correctores [1].

<center>
<img src="../Assets/images/radiosidadAlg6.png" width="600" height="600" alt="Base radiosity"/>
</center>

Se define el factor de forma entre dos elementos, donde Ai y Aj es la proporción de energía que desde Ai alcanza Aj respecto del total de energía que abandona Ai. Expresado en forma de ecuación:

{{< hint info >}}
{{< katex display >}}
F_{ij} = \frac{1}{A_{i}} \int_{A_{i}}^{} \int_{A_{j}}^{} \frac{cos \theta _{i} cos \theta _{j}}{\pi r^{2}}dA_{j}dA_{i}
{{< /katex >}}
{{< /hint >}}



Otra representación es la siguiente:
{{< hint info >}}
{{< katex display >}}
B(x) dA = E(x)dA + R(x)dA \int_{S}^{} B(x')\frac{1}{\pi r^{2}}cos\theta _{x}cos\theta _{x'}H(x,x')dA
{{< /katex >}}
{{< /hint >}}


Dado que calcular la integral del factor de forma es complicado existen dos métodos: hemicubo y hemisferio que presentan un enfoque geométrico para comprender esta ecuación de factores.

<br/><br/>

## Referencias

[1] (S/f). Blackspiral.org. Recuperado el 10 de diciembre de 2021, de http://blackspiral.org/docs/radiosidad/guion.pdf

[2] (s/f). Iluminación Global en DirectCompute. Edu.ar. Recuperado el 10 de diciembre de 2021, de https://rdu.unc.edu.ar/bitstream/handle/11086/2771/MOPE17147.pdf?sequence=1&isAllowed=y

[3] (S/f-b). Acta.es. Recuperado el 10 de diciembre de 2021, de https://www.acta.es/medios/articulos/informatica_y_computacion/055061.pdf



