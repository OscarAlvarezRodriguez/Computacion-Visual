# TAREA 2 - Indagación sobre método de Iluminación Global

## Radiosidad (Gráficos computacionales)

### NOTA: La información presentada aqui es un supuesto de donde puede ser aplicado el algoritmo de Radiosidad, esto debido a que no se encontró de manera explicita una aplicación.

###   
En las otras dos secciones se ha hablado en general de la iluminación global y la Radiosidad tanto de su algoritmo como de sus implicaciones además de un poco de historia.

En esta sección se presentará ejemplos sencillos y relatados donde se puede intentar aplicar el algoritmo

<center>
<img src="../Assets/images/682-thumb.jpg" width="600" height="600" alt="Assassins creed ejemplo con sombras"/>
</center>

En la imagen anterior se muestra la escena de un video juego llamado Assassin's creed, se puede notar la importancia que se le da recrear un ambiente real donde las sombras juegan uno de los papeles principales, dependiendo de la hora del dia marcada en el juego estas van cambiando de la misma manera la interacción entre los objetos (personas, cajas, el barco del fondo, el agua, etc) como van desplazandose sus sombras tambien deben moverse para ello seria util utilzar un algoritmo que calcule estas sombras para un tiempo x interactuando desde 1 hasta N objetos.

<center>
<img src="../Assets/images/20216181247347_1.jpg" width="600" height="600" alt="Shooter de terror tambien con sombras"/>
</center>

De esta imagen al igual con la de Assassin's creed, se juega principalmente con las sombras, nótese que existen dos focos generadores de luz, la hoguera frente al personaje y la lampara en la esquina la sombras generadas por el fuego son fuertes y no se notan a primera vista sombras creadas por la lampara, se juega con la intensidad de la luz y la radiosidad puede ser aplicada para participar activamente en los calculos de esta para cuando llegue al usuario final.

En las siguientes imágenes se puede apreciar como es el cambio de fotograma de un shooter, la primera sin aplicar luminosidad (tal vez aplicable radiosidad) y la siguiente donde ya se ha calculado todo el estado de la luz para el jugador.

{{< columns >}}

<img src="../Assets/images/Ejemplo1.PNG" width="600" height="600" alt="Estado inicial antes de aplicar radiosidad"/>
<--->
<img src="../Assets/images/Ejemplo2.PNG" width="600" height="600" alt="Estado final despues de aplicar radiosidad"/>

{{< /columns >}}

De la misma manera se puede apreciar aquí con las siguientes, de estas se destaca la cantidad de iteraciones hechas en el calculo para su presición lo cual hace que la de la derecha sea más realista al ojo humano que la de la izquierda.

<center>
<img src="../Assets/images/Ejemplo.PNG" width="600" height="600" alt="Diferencia entre iteraciones de un algoritmo de radiosidad"/>
</center>

Finalmente con la aplicación de diferentes métodos de radiosidad a los objetos del juego se puede observar una luminosidad final diferente de ahí que tambien permitiría nuevas interacciones con el juego.

{{< columns >}}

<img src="../Assets/images/Escena1.PNG" width="400" height="400" alt="Estado inicial antes de aplicar radiosidad"/>
<--->
<img src="../Assets/images/Escena2.PNG" width="400" height="400" alt="Estado final despues de aplicar radiosidad"/>

{{< /columns >}}

Por ejemplo, para una misma vista, con una configuración diferente de filtrado de luz, digamos unos lentes de visión nocturna o simulación de visión animal donde está directamente implicada la luz, en función de la misma poder encontrar o ubicar objetos no detectables o distorsionados como en la primer imagen mientras que la segunda está correctamente definida.