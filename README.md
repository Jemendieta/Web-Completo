# CURSO DE DESARROLLO WEB COMPLETO - HTML - CSS - JS - AJAX - PHP - MYSQL

---

![Curso Desarrollo Web Completo](img/portada.jpg)

---

### Clase 01 - Proyectos a implementar

- Sitio de conferencias con pagos en línea.
- Sitio web para inmobiliaria.
- Sitio web para salón de belleza.
- Sitio web para administrar tareas.

- Proyectos con HTML, CSS Fetch y SASS
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
  ```

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
- y todos los anteriores son más espefícos que el selector universal \*.
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
  - Agregando normalize.css el cual permite resetear los estilos por defecto del navegador, aunque hoy en día ya no se utiliza demasiado, sigue siendo una herramienta que nos puede servir en nuestro proyectos (https://necolas.github.io/normalize.css/).

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
  - **_Flexbox_** para cuando necesitemos distribuir elementos que se encuentran dentro de un contenedor.
  - **_Grid_** para definir el layout de nuestro sitio como las columnas o los contenedores de los elementos.

### Formularios

- Primeros pasos.
- CSS en los inputs.
  - estilos como utiliades para casos específicos.
- posicionando inputs.

---

## Primer Proyecto - FreeLancer

- Subiendo primero proyecto a netlify [Freelancer](https://freelancer-jorge-mendieta.netlify.app/ "Proyecto Freelancer")

---

## SEGUNDO PROYECTO

- Aplicando los conociemientos adquiridos durante el desarrollo del primer proyecto.
- Agregaremos Normalize, las fuentes de google y nuestros estilos globales.
- Usando BEM(Bloque, elemento, modificador) para definir clases en nuestro css.
  con esto evitamos la colisión de nombres.
  ```CSS
            .bloque{}; /*Es un contenedor*/
            .bloque__elemento{}; /*Son parte de un bloque*/
            .bloque__elemento--modificador{}; /*Variantes de un bloque o elemento*/
  ```
- En nuestro segundo proyecto usaremos BEM en nuestro CSS.
- Haremos uso de CSS Grid para posicionar nuestros productos.

---

## PATRONES DE DISEÑO

**Repasar estos conceptos y practicarlos**

- Son los diferentes tipos de diseño que se pueden lograr para presentat nuestra web.
  - Los ejemplos de esta sección se encuentran en la carpeta de proyectos.
- **Dos Columnas Iguales**: se trabajará este diseño con flexbox y grid para ver sus características y ventajas (revisar carpeta de proyectos).
- **Tres Columnas Iguales**: trabajaremos estas secciones con gird y flebox para ver sus ventajas y diferencias.
- **Tres columnas (una más grande)**: de la misma manera que en los ejemplos anteriores lo haremos con grid y flexbox.
- **Column Drop**: También conocido como colocación de columnas, define como se muestran las columnas en base el espacio disponible.
- **Sidebar**: el cual es muy común en blogs y tiendas virtuales, se caracteríza por la barra lateral que acompaña el diseño, tal como indica su nombre.
- **Layout Shifter**: es el mas avanzado de todos y uno de los más complejos, puede cambiar el orden y la ubicación de sus elementos.
- **Tiny Tweaks**: pequeños ajustes, no suele cambiar de forma drástica como en patrones anteriores, son cambios que se realizan a algunos elementos de nuestro diseño según el tipo o tamaño de dispositivo.
- **Mostly Fluid**: es el más sencillo de todos, el contenido fluye sobre el espacio disponible teniendo en cuenta los márgenes de izquierda y derecha.

- **Mas información** [Patrones de Diseño](https://carlosazaustre.es/los-5-patrones-del-responsive-design)

## TERCER PROYECTO - BLOG CAFE

- Blog de Café:
  - Sitio estilo blog de cafetería .
  - los elementos con **display:inline** son inmunes a la propiedad margin y a la propiedad width. Si queremos que acepten estas propiedades nuestros elementos deberían ser inline-block.
  - Mejorando la performance:
    - lazy loading : llamando elementos cuando se necesiten.
    - preload: Cargando elementos tan pronto como se necesiten.
    - Prefetch: Cargar la siguiente página que esperamos que el usuario visite.
    - Uso de imágenes webp haciendo uso de la etiqueta picture, con el siguiente código le decimos a nuestro html que si no se soportar la imagen .webp cargue la .jpg.
    ```CSS
      <picture>
        <source srcset="img/blog3.webp" type="image/webp" />
        <img loading="lazy" src="img/blog3.jpg" alt="Imagen Blog" />
      </picture>
    ```
    - Modernizr y webp: Modernizr es una librería de javaScript que detecta las características de un navegador y si son soportadas podemos ejecutar nuestro código y si no se ejecuta otro código. Modernizr se instala vía NPM.
    - Etiquetas Meta: permiten agregar metadatos importantes para el navegador, no se ven directamente pero permiten agregar funcionalidad a nuestros sitios dentro de los motores de búsqueda. Existen muchas etiquetas meta.
    - Deployment y Auditoría Lighthouse: Lighthouse es una extensión que nos permite realizar una serie de pruebas para conocer si nuestro sitio sigue buenas prácticas, velocidad de carga, etc.

---

## Iniciamos con JavaScript

- Es el lenguaje de la Web, añade interactividad a nustros sitios web, además trabaja también del lado del backed.
- Reacciona a los eventos del usuario en nuestras webs.
- DOM: la forma en la que los elementos de nuestros sitios están conectados entre si y en como interacuamos con cada uno de ellos. También podemos acceder a los atributos y propiedades de las etiquetas HTML.
- Es un lenguaje de tipo dinámico, eso quiere decir que guarda el tipo de dato en su valor.

### Variables en JavaScript

- son una característica de cualquier lenguaje de programación.
- Tenemos tres formas de crear variables:

  ```JS
  // var: este tipo de declaración ya no recomienda.
    var producto ="celular";
  // let: Esta es la forma recomendada de declarar variables.
    let nombre = "Jorge";
  //const: no cambiará su valor, por eso se usa const, es decir, valor constante.
    const dni = 12345678;
  ```

  ```JS
    // Formas de declarar variables
    let variable_;
    let variable_dos;
    let $variableTres;
    let variableCuatro; // Camel case, es el más utilizadoo
    let VariableCinco; // pascal case
    let variableseis; // uso ed minúsculas
  ```

- No se puede declarar una variable que inicien por números, guiones medios.
- ## Variables **let** y **const**:
  - Las variables con let pueden iniciar con un valor asignado o asignárselo luego.
  - Las variables declaradas con let siguen las mismas conveciones que las declaradas con var.
  - Las variables declaradas con const no pueden ser inicializadas sin valor.
  - Las diferencias entre let y const:
    - const no puede iniciañizar una variable sin valor, let si.
    - const no permite reasignar el valor de la variable, con let si podemos reasignar.
- ## Strings o Cadenas de Texto y Métodos:

  - .lenht: permite saber la longitud de una cadea de texto.
  - .indexOf('texto'): permite saber la posicion de una palabra dentro de una cadena de texto.
    si nos devuelve un valor negativo significa que no la pudo encontrar.
  - .includes('texto'): permite saber si una cadena incluye (true) o no (false) una palabra. Tiene en cuenta mayúsculas y minúsculas.

- ## Números y Operadores.

  - El Objeto math: Math es un objeto y pertenece a la ventana global, contiene muchas fuciones de las que podemos hacer uso.
  - **.round()**: Permite redondear un número
  - **.ceil()**: Redondea siempre hacia arriba, al entero superior más cercano.
  - **.floor()**: Redondea siempre hacia abajo, al entero inferior más cercano.
  - **sqrt()**: Calcula la raís cuadrada de un número.
  - **abs()**: convierte un número negativo a positivo.
  - **min()**: mínimo número de un conjunto de números.
  - **max()**: máximo número de un conjunto de números.
  - **random()**: genera un número aleatorio menor que 1. Combinado con otras funciones podemos retornar números aleatorios en rangos específicos.
  - Aquí tenemos algunos ejemplos de lo anterior:

  ```JS
    let resultado;
    resultado = Math.PI;
    resultado = Math.round(3.141516);
    resultado = Math.ceil(3.15);
    resultado = Math.floor(3.6);

    resultado = Math.sqrt(4);
    resultado = Math.abs(-4);
    resultado = Math.min(4,3,5,6,3,2,-1);
    resultado = Math.max(4,3,5,6,3,2,-1);
    resultado = Math.random();
    console.log(Math.random() * 10); //eleatorio entre 0 y 10.

    console.log(resultado)
  ```

- ## Controlar el orden de las operaciones.

  - es la manera en la que se ejecutan las operaciones matemáticas, priorizando paréntesis, exponentes, multiplicaciiones, divisiones, sumas y restas.
  - incrementos: podemos incrementar el valor de una variable en 1 agregando el operador ++ antes de la variable.
  - Decrementos: lo mismo que lo anterior solo que haciendo uso del operador --.
  - Si queremos que aumente o decremente en un número específico haríamos uso de += ó -=.

- ## Concatenación y Template Strings:

  - la concatenación es la inión de dos o más strings, esta se puede llevar a cabo de dos formas, la primera es usando el operador (+) y la segunda y más recomendada con template strings haciendo uso de tildes voletadas.

  - haciendo uso del operador +: este nos permite unir varias cadenas de trxto, no es la más recomendadda.

    ```Js
      let nombre = "Usuario";
      let saludo = "Hola, " + nombre + " Bienvenido";
      console.log(saludo);
      <!-- esto devolverá: Hola, Usuario Bienvenido -->
    ```

  - Template Strings: es la forma recomendada y se hace uso de backticks `` o comillas simples volteadas y las varaibles se colocan dentro de llaves y anteponiendo el signo de dolar.

    ```JS
      let usuario = "Usuario1";
      let email = "usuario1@correo.com"

      let mensaje = `Hola ${usuario}, tu correo es ${email}`;
      console.log(mensaje);
    ```

- ## Booleans

  - Son tipos de datos que devuelven true o false como resultado, son usados principalmente en comparaciones o en estructuras condicionales.

- ## Objetos

  - Nos permiten agrupar un conjunto de propiedades y valores dentro de una misma variable. Es como tener varias variables dentro de una sola.

  ```Js
    const usuario = {
      nombre: "jorge",
      edad: 38,
      trabajando: false
    };
    console.log(usuario);
  ```

  - La forma de acceder a las claves y valores de nuestro objeto es usando sintaxis de punto (mas usada) o usando corchetes(no es tan usada):

    ```JS
      <!-- sintaxis de punto -->
      console.log(usuario.nombre);

      <!-- usando corchetes -->
      console.log(usuario["edad"]);
    ```

  - Modificar propiedades de un objeto: podemos agregar o quitar información de ellos.
  - Tomando al ejemplo anterior haríamos lo siguiente para agregar una propiedad.
    ```JS
      usuario.foto="foto.jpg";
    ```
  - Si lo que queremos es quitar una propiedad haríamos lo siguiente:
    ```Js
      delete usuario.trabajando;
    ```
  - **Destructuring de Objetos**: podemos crear variables a partir de las propiedades de un objeto.

  ```JS
  <!-- Creamos una variable y le asignamos una propiedad del objeto -->}

    const usuario_uno = usuario.nombre;
    console.log(usuario_uno);
  ```

  - además usando Destructuring(sacar de una estrcutura) podemos sacar una propiedad y asignarla a una variable. Destructuring extrae el valor y crea la variable en un solo paso
    ```JS
      const {nombre, edad} = usuario;
      console.log(nombre, edad);
    ```
  - **Object Methods**: son funciones que nos permiten manipular objetos de diferentes maneras.
  - por ejemplo: **freeze()**: el cual congela el objejo impidiendo sea modificado.

  - **.seal()**: no permite agregar nuevas propiedades pero si permite modificar las exixtentes.

  - **"use strict"**: permite correr JS en modo estricto, es decir que si existe algún error detendrá la ejecución del programa.

  ```JS
    Object.freeze(usuario);
    console.log(Object.isFrozen(usuario)); //devuelve true o false
  ```

  - **Unir Objetos Spread Operator**: es una forma de unir dos o más objetos dentro de uno solo. Para eso hacemos uso del Spread Operator(...) de la siguiente manera (...objetoUno, ...objetoDos)

    ```JS
    const usuario = {
      nombre: "jorge",
      edad: 38,
      empleo: false
    };

    const area ={
      ubicacion: "sala",
      tamaño: "10 metros"
    };

    // uniendo dos objetos
    const nuevoUsuario ={...usuario, ...area};
    console.log(nuevoUsuario);
    ```

  - 🚀 Resumen rápido de Object Methods en JavaScript

  | Método                             | Descripción                                                                                |
  | ---------------------------------- | ------------------------------------------------------------------------------------------ |
  | `Object.keys(obj)`                 | Devuelve un array con las claves del objeto                                                |
  | `Object.values(obj)`               | Devuelve un array con los valores del objeto                                               |
  | `Object.entries(obj)`              | Devuelve un array de pares clave-valor                                                     |
  | `Object.assign(dest, src)`         | Copia propiedades de un objeto a otro                                                      |
  | `Object.freeze(obj)`               | Bloquea modificaciones en el objeto (no se puede cambiar, agregar ni eliminar propiedades) |
  | `Object.seal(obj)`                 | Permite modificar valores, pero no agregar ni eliminar propiedades                         |
  | `Object.hasOwnProperty(propiedad)` | Verifica si una propiedad existe en el objeto (devuelve `true` o `false`)                  |

- ## Arreglos(arrays)

  - son una estructura de datos que permiten para agrupar elementos del mismo tipo o relacionados entre si dentro de una sola variable y están ordenados por índices iniciando en cero.

  ```JS
    // Forma estandar de crear arreglos
    const numeros = [1,2,3,4,5,6,7,8];
    console.table(numeros);

    // Segunda forma de crear arreglos
    const letras = neww Array ("a","b","c","d");
    console.log(letras);
  ```

  - Para acceder a los valores de un arreglo haremos lo siguiente:

    ```JS
      console.log(numeros[4]);

      // Conocer la extensión de un arreglo
      console.log(numeros.length);

      // Iterar los elementos de una arreglo
      letras.forEach(function(letra){
        console.log(letra);
      })
    ```

  - **Métodos para Arrays**

    - Nos permiten manipular a los arrays y su contenido de una forma más eficiente. Estos son algunos de los más conocidos:

      # 📌 Métodos básicos de los Arrays en JavaScript

    | Método       | Descripción                                                                           | Ejemplo                             |
    | ------------ | ------------------------------------------------------------------------------------- | ----------------------------------- |
    | `push()`     | Agrega un elemento al final del array                                                 | `frutas.push("Uva");`               |
    | `pop()`      | Elimina el último elemento del array                                                  | `frutas.pop();`                     |
    | `unshift()`  | Agrega un elemento al inicio del array                                                | `frutas.unshift("Fresa");`          |
    | `shift()`    | Elimina el primer elemento del array                                                  | `frutas.shift();`                   |
    | `length`     | Obtiene la cantidad de elementos del array                                            | `frutas.length;`                    |
    | `splice()`   | Recibe dos parámetros(indice de valor a eliminar, cantidad de elementos a eliminar)   | `frutas.splice();`                  |
    | `includes()` | Permite saber si un valor existe o no en un arreglo plano, devuelve true o false      | `frutas.includes("valor buscado");` |
    | `some()`     | Permite saber si un valor existe o no en un arreglo de objetos, devuelve true o false | `frutas.some();`                    |
    | `reduce()`   | Permite reducir un arreglo a un único valor                                           | `frutas.reduce();`                  |
    | `filter()`   | Permite filtrar los elementos de un arreglo y devuelve un nuevo arreglo               | `frutas.filter();`                  |

  - **rest operator o spread operator**: al igual que en los objetos, nos permite agregar mas elementos a un arreglo o unirlo con otro.

  ```JS
    const letras = new Array('a','b','c','d');

    const nuevaLetra = [...letras, "e"];
    // concatena el arreglo original y le agrega un nuevo elemento al inicio o final.
    console.table(nuevaLetra);
  ```

  - esta sería la forma de buscar valores en arreglos haciendo uso de otros métodos:

    ```JS
      // método includes() para arreglos planos
      const letras = new Array("a", "b", "c", "d", "e");

      const letra = letras.includes("a");
      console.log(letra);


      // some() para arreglos de objetos
      const productos = [
        { nombre: "Laptop", precio: 1200 },
        { nombre: "Mouse", precio: 25 },
        { nombre: "Teclado", precio: 45 },
        { nombre: "Monitor", precio: 300 },
        { nombre: "Auriculares", precio: 60 },
        { nombre: "Impresora", precio: 150 },
      ];
      let producto = productos.some(function (equipo) {
        return equipo.nombre === "Laptop";
      });

      console.log(producto); // devuelve true

      // Usando arrows functions
      let verProducto = productos.some((equipo) => equipo.nombre === "Laptop");

      console.log(verProducto); //devuelve true

      // Usando método reduce():

      let sumarPrecio = productos.reduce(function (total, producto) {
        return total + producto.precio;
      }, 0);

      console.log(sumarPrecio); // nos devuelve la suma total de precios

      // Usando método filter() nos permite filtrar uno o varios elementos de un arreglo
      let filtrado = productos.filter(function (producto) {
        return producto.precio > 100;
      });
      console.log(filtrado); // devuelve los productos cuyo precio es mayor a 100
    ```

## Funciones (functions)

- Una función es un bloque de código reutilizable que realiza una tarea específica. Se puede ejecutar (o "llamar") cuantas veces sea necesario sin repetir código. Tenemos tres formas de crear funciones:

  ```JS
    //1 declaración de la función (inicia con la palabra function)
    function sumar() {
      console.log(10 * 10);
    }
    // ahora llamamos a la función.
    sumar();

    //2 Expresión de la función (la función va dentro de una variable)
    const sumarDos = function () {
      console.log(3 + 3);
    };
    sumarDos();

    //3 IIFE (funciones que se llaman a si mismas)
    (function () {
      console.log("Esto es una función");
    })(); //este paréntesis hace que la función se ejecute sola
    // Este último tipo de funciones ayuda a que las funciones y variables no se mezclen con otros archivos.
  ```

  - Se recomienda hacer uso de las funciones por expresión para evitar el hoisting.
  - Diferencias entre funciones (hoisting): JavaScript mueve las funciones declaradas al inicio del código antes de ejecutarlo.

  ### 📌 Diferencias entre funciones

  | Tipo                     | ¿Tiene hoisting? | ¿Se puede llamar antes de definirla? | Forma de declararla            |
  | ------------------------ | ---------------- | ------------------------------------ | ------------------------------ |
  | **Function Declaration** | ✅ Sí            | ✅ Sí                                | `function nombre() {}`         |
  | **Function Expression**  | ❌ No            | ❌ No                                | `const nombre = function() {}` |

  ***

  ### 📌 Conclusión

  - Usa **Function Declaration** cuando necesitas que la función esté disponible en todo el código.
  - Usa **Function Expression** cuando necesitas definir funciones dentro de variables o evitar el hoisting.

  - **Diferencias entre métodos y funciones**:
