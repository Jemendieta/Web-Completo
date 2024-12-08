# CURSO DE DESARROLLO WEB COMPLETO - HTML - CSS - JS - AJAX - PHP - MYSQL

---

![Curso Desarrollo Web Completo](img/portada.jpg)

---

### Clase 01 - Proyectos a implementar

- Sitio de conferencias con pagos en línea.
- Sitio web para inmobiliaria.
- Sitio web para salón de belleza.
- Sitio web para administrar tareas.
- Proyectos con HTML, CSS Fetch  y SASS
- Proyecto con HTML, CSS y JS.
- Tecnologías y versiones del curso.

### Clase 02 - Áreas del desarrollo web

- ¿Qué es y que hace un desarrollador FrontEnd?
- ¿Qué es y que hace un desarrollador BackEnd?
- ¿Qué es y que hace un desarrollador FullStack?

### ¿Cómo aprovechar el curso?

- Recomendaciones: 
    - Todos aprendemos de forma diferente.
    - El código nunca se memoriza.
    - no saltar videos ni acelerar más de lo necesario.
    - Practica, Practica y Practica.
    - ¿Cómo manejar los problemas?
        - Es parte de la programación.
        - Ve a tu ritmo.
        - Paciencia con la sinsteaxis del código.
        - No es imposible pero tampoco es fácil.
        - El nivel de complejidad irá subiendo conforme avances.
        - Cometer errores es lo más normal.
    - ¿Cómo solicitar ayuda?
        - No tengas miedo a preguntar.
        - Busca varias fuentes.
        - Revisar la sección de preguntas del curso.
    - Editor de código
        - VSCode

## Sitio FreeLancer - HTML Paso a Paso

##### HTML 
- Es un lenguaje de modelado, sirve para estructurar nuestro sitio web, es basicamente el esqueleto de nuestro sitio.
- Funciona en base a etiquetas que representan un tipo de contenido.
- Tiene etiquetas semánticas, es decir, etiquetas que le dan mayor sentido al contenido del sitio.

##### Primer Proyecto
- Empezando con HTML
    - Etiquetas base del proyecto FreeLancer.
    - Estructura (semántica) del contenido del proyecto Freelancer.
    - Enlaces y navegación
    - uso de íconos (https://tablericons.com/)
    - Agregamos iconos al proyecto Freelancer
    - Trabajamos con formularios HMTL

#### La importancia de CSS
- Colores, tamaños, espacios, animaciones y demás.
- Es la forma en la que mejoramos el diseño de nuestros sitios web.
- Estructura base
    ```CSS
        p {
            color: blue;
        }
    ````
#### Anatomía de CSS, en la estructura enterior:
- p: es la etiqueta o selector al que queremos aplicar estilos.
    - Las llaves {}: agrupan las propiedades y valores CSS.
- Estilos del sitio web Freelancer.
- Tamaños de texto (px, em, rem)
- Formas de escribir selectores
    - Selector de elemento: en base a su etiqueta.
        ```CSS
            p{
                color:blue;
            }
        ```
    - Selector de clase: identificado por un punto en CSS.
        ```CSS
            .parrafo {
                color:blue;
            }
        ```
    - Selector de Id: identificados en css con un símbolo de #. Solo se puede usar una vez.
        ```CSS
            #parrafo{
                color:blue;
            }
        ```
    - Slector de atributo: basados en algún atributo.
        ```CSS
            [src="logo.jpg"]{
                color:blue;
            }
        ```
    
    - Combinación descendente: agrupando clases.
        ```CSS
            .parrafo .texto{
                color:blue;
            }
        ```     
    - selectores hijos: slecciona a todos los elementos p dentro de la clase cliente.
        ```CSS
            .cliente > p{
                color:blue;
            }
        ```
        
#### Especificidad en CSS:

- hay selectores que son más específicos que otros.
- el id es más específico que la clase.
- El selector !important es el más específico de todos
- los estilos en linea son más específicos que los de clase.
- las clases son más espesíficas que los selectores de elementos.
- y todos los anteriores son más espefícos que el selector universal *.
- En resumen la jerarquía ed especificidad sería la siguiente:
    <pre>
        <code>
        !important           = 1,0,0,0,0
        Selector de id #     = 0,1,0,0,0
        estilos en línea     = 0,0,1,0,0
        Selector de clase    = 0,0,0,1,0
        Selector de elemento = 0,0,0,0,1
        Selector universal * = 0,0,0,0,0   
        </code>          
    </pre>
- La especificidad le dice al navagador como mostrar el css que estamos utilizando de acuerdo a que tan específico es el selector utilizado.
- No se reomienda el uso del selector !important a no ser que no quede otra alternativa.

#### Colores en CSS:
- Hay varias formas de definir colores en css: por nombre, hexadecimal, hsl rgb, rgba...
```CSS
    p{
        color:blue;
        color:#000;
        color:rgb(); /*red, green, blue*/
        color:rgba(); /*red, green, blue, transparency*/
        color:hsl(); /*hue, saturation, light*/
    }
```
- Existen herramientas en línea que nos pueden ayduar con la selección de colores.

- Añadir fuentes externas de estilos a nuestro proyecto.
    - fuentes (https://fontsource.org/)
    - Google fonts (https://fonts.google.com/)
    - Agregando normalize.css el cual permite resetear los  estilos por defecto del navegador, aunque hoy en día ya no se utiliza demasiado, sigue siendo una herramienta que nos puede servir en nuestro proyectos (https://necolas.github.io/normalize.css/).

### Tabajando la navegación del proyecto FreeLancer.
    - Usando formas abrevaidas de la propiedad margin
    - Estilos de navegación y display (block, inline), es decir, tenemos elementos en línea y elementos de bloque, los elementos de línea (uno al lado del otro) solo ocupan el espacio de su contenido, mientras que los de bloque (uno bajo otro) ocupan todo el espacio disponible.
    - Margin y padding: el margin es el espacio con respecto a otros elementos, mientras que el padding es el espacio con respecto a la parte interna del contenedor.
    - Display flex y display grid, nos permiten posicionar nuestros elementos de una forma mucho más dinámica.
    - Enlaces complementarios:
        - Flexbox: https://lenguajecss.com/css/flex/que-es-flex/
        - grid: https://lenguajecss.com/css/grid/que-es-grid/
    - BEM: es una forma de escribir CSS, BEM (bloque, elemento, modificador).
        ```CSS
            .contenedor{};  <!-- bloque -->
            .contenedor__boton{}; <!-- bloque y elemento -->
            .contenedor__botton--activo{}; <!-- bloque, elemento y modificador -->
        ``` 
    - Utility First: es otra forma de escribir css, donde definimos clases con una sola propiedad que describe lo que hará, es muy cmoun en TalwindCSS.
        ```CSS
            .text-center{};
            .color-red-100{};
        ```
    - Módulos: es otra aforma de definir clases partiendo de una principoal y luego descendiendo a los elemtos que contiene.

    - Introducción a Responsive Web Design: es la manera en que la nuestra web se adapta a los distintos tamaños de pantalla en los dispositivos móbiles.
    - Esto se logra haciendo uso de las medias queries:
        - Medidas adaptables según el tipo de pantalla o dispositivo que el usuario final utilice.
        - tienen la siguiente estrucura css
            ```CSS
                @media (min-width: 768px){  
                    <!-- Estilos css que se aplicarán a esa resolución -->
                }
            ```
        - min-width: indica que a partir de ese tamaño en adelante se aplicarán ciertos estilos.
        - max-width: indica que de ese tamaño o menores a el se aplicaran ciertos estilos.
        - Tamaños estandar para Media Queries:
            - 480 para teléfonos
            - 768 par tabletas
            - 1140 para laptops
            - 1400 para pantallas más grandes

    - Imágenes con CSS: Utilizamos algunas de las propiedades de las imágenes dentro de css para la portada de nuestro primer proyecto

#### Box Model:
- En Css todo es una caja, y depende de 4 cosas (contenido, padding, borde y margen) como es que esta caja se muestre en el navegador.
- podemos consultar el siguiente recurso
[Box-Model](https://lenguajecss.com/css/modelo-de-cajas/que-es/ "Box-Model").
- Es en este punto donde la propiedad box-sizing y su valor border-box nos ayudarán mucho con respecto al tamaño de nuestras cajas o elementos.
- el conten de css por defecto no incluye margin, padding y border, esto es algo a tener en cuenta al momoento de trabajar los tamaños de nuestras cajas en css.
- Position en CSS: 
    - el posicionamiento es el lugar que ocupa un elemento: tenemos varios en css
        - relative: es el que tiene pode defecto cada elemento.
        - absolute: este toma como referencia a su elemento padre y se posiciona respecto a el.
        - todo elemento posicionado adopta cuatro (top, right, bottom, left) propiedades o coordenadas la cuales servirán de referencia para posicionarse dentro del flujo HTML.
- Bontones en CSS: nos permiten darle mayor interactividad a nuestro sitio, hay muchísimas posibilidades para darles estilos.

### Comentar Código: 
- nos permite documentar, explicar y mejorar nuestro código. La forma de comentar código es distinto en cada lenguaje.

### Degradados y Sombras en CSS:

- Para poder usar degradados en nuestro sitio debemos utilizar la propiedad background-image: linear-gradient().
- Las sombras nos permiten agregar un tipo de efecto a los elementos de nuestro sitio para que se vean un poco mejor.
- Una gran herramienta para generar sombras de forma sencilla es [cssmatic](https://cssmatic.com/ "sombras")


### CSS GRID

- Nos permite definir la ubicación y el tamaño de los elementos dentro de nuestro sitio web.
- A diferencia de flexbox donde el contenido crece automáticamente, con Grid, todo se agrupa dentro de un área definida, esto nos dá mayor flexibilidad y control sobre el diseño.
- Con GRID tenemos acceso a dos dimensiones, también podemos usarlo junto a flexbox.
- ¿Cuándo usar FlexBox y cuando Grid?
    - ***Flexbox*** para cuando necesitemos distribuir elementos que se encuentran dentro de un contenedor.
    - ***Grid*** para definir el layout de nuestro sitio como las columnas o los contenedores de los elementos.

### Formularios
- Primeros pasos.
- CSS en los inputs.
    - estilos como utiliades para casos específicos.
- posicionando inputs.

---
# Primer Proyecto - FreeLancer

- Subiendo primero proyecto a netlify [Freelancer](https://freelancer-jorge-mendieta.netlify.app/ "Proyecto Freelancer")

---

## SEGUNDO PROYECTO
- Aplicando los conociemientos adquiridos durante el desarrollo del primer proyecto.
- Agregaremos Normalize y las fuentes de google fonts
- 
