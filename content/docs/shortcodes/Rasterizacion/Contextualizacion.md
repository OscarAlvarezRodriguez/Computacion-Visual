# TAREA 2 - Implementación de un algoritmo de rasterización
<br/><br/>

## **Contextualizacion - Rasterización de circulos**

Este es un algoritmo de muestreo que se efectúa en un dominio discreto, se usa para determinar los puntos necesarios para rasterizar un círculo aprovechando también la simetría del mismo.

<center>
<img src="../Assets/images/rastContex1.png" width="300" height="300" alt="Base radiosity"/>
</center>

Un ejemplo de ciento cincuenta círculos concéntricos dibujados con el algoritmo de círculo de punto medio.

<center>
<img src="../Assets/images/rastCircle.gif" width="300" height="300" alt="Base radiosity"/>
</center>

<br/><br/>

## **Definición de un círculo**

Un círculo se define como un conjunto de puntos desde el centro (x, y) hasta un valor dado r, entonces la ecuación que define los puntos que pertenecen a esa circunferencia es:

{{< hint info >}}
{{< katex display >}}
(x - x_{c})^{2} + (y - y_{c})^{2} = r^{_{2}}
{{< /katex >}}
{{< /hint >}}





donde:

{{< katex display >}}
{x} = coordenada \; x\\
{y} = coordenada \; y\\
{r} = radio \;del \;circulo
{{< /katex >}}


Despejando y, para muestrear a lo largo de la coordenada x resulta en la siguiente ecuación

{{< hint info >}}
{{< katex display >}}
y = y^{_{c}} \pm \sqrt[]{r_{2} - (x_{c} - x)^{2}}
{{< /katex >}}
{{< /hint >}}


Que en coordenadas polares es:

{{< hint info >}}
{{< katex display >}}
x = x_{c} + rcos(\theta ) \\
y = y_{c} + rsin(\theta )
{{< /katex >}}
{{< /hint >}}



<br/><br/>

## **Propiedades simetricas del círculo**

Se puede aprovechar la simetría del círculo para trazar ocho puntos para cada valor que calcula el algoritmo como se muestra a continuación:

<center>
<img src="../Assets/images/rastContex6.png" width="300" height="200" alt="Base radiosity"/>
</center>

El uso de la simetría del círculo puede reducir la cantidad de cálculo. Solo necesita calcular los puntos que deben dibujarse en un octavo círculo y puede mapear todo el círculo.

<br/><br/>

## **Explicación del algoritmo**

1. Definir el radio r y el centro del círculo (Xc, Yc).  Se obtiene el primer punto de una circunferencia centrada en el origen como (x0 , y0) = (0 ,r).
2. Luego se define un parámetro de decisión p inicial como:

{{< katex display >}}
p_{0} = \frac{5}{4} - r
{{< /katex >}}


3. Se comienza a muestrear desde el origen con una unidad de longitud en dirección positiva x y se calcula el valor p del parámetro de decisión correspondiente, cumpliendo lo siguiente en la iteración k:

{{< hint info >}}
{{< katex display >}}
Si\; p_{k}< 0, \; entonces\; el\; siguiente\; punto\; es \; (x_{k+1} + x_{c}, y_{k} + x_{c}) \\ y\;\; p_{k+1} = p_{k} + 2 x_{k+1} + 1 \\\\
{{< /katex >}}
<br/><br/>
<center>
{{< katex display >}}
Si\; p_{k}\geq  0, \; entonces\; el\; siguiente\; punto\; es\; (x_{k+1} + x_{c}, y_{k-1} + x_{c}) \\y\;\; p_{k+1} = p_{k} + 2 x_{k+1}- 2 y_{k+1} + 1
{{< /katex >}}
</center>
{{< /hint >}}






Entendiendo que:

<center>
<img src="../Assets/images/rastContex8.png" width="600" height="600" alt="Base radiosity"/>
</center>

4. De acuerdo con el punto obtenido de p, mapee los puntos en los otros siete octantes que se logran por simetría.
5. Repetir los pasos 3 y 4 hasta que se cumpla que x sea mayor o igual a y.

<br/><br/>

## **Referencias**

[1] Wikipedia contributors. (2021, noviembre 20). Midpoint circle algorithm. Wikipedia, The Free Encyclopedia. https://en.wikipedia.org/w/index.php?title=Midpoint_circle_algorithm&oldid=1056220291

[2] Algoritmo de círculo de punto medio - programador clic. (s/f). Programmerclick.com. Recuperado el 14 de diciembre de 2021, de https://programmerclick.com/article/22681023723/

[3] 2.4.3 Algoritmo de Punto Medio - Bresenham. (s/f). Edu.mx. Recuperado el 14 de diciembre de 2021, de http://cidecame.uaeh.edu.mx/lcc/mapa/PROYECTO/libro23/243_algoritmo_de_punto_medio__bresenham.html

[4] Bresenham Circulo. (s/f). Scribd.com. Recuperado el 14 de diciembre de 2021, de https://es.scribd.com/document/403059034/Bresenham-Circulo

