---
title: 'Cómo usar REPL de Node.js'
excerpt: 'REPL de Node.js es un shell interactivo que procesa las expresiones de Node.js, el código JavaScript que ingresa el usuario.'
coverImage: '/assets/nodejs/como-usar-REPL.png'
date: '2021-12-16T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/nodejs/como-usar-REPL.png'
---

Read-Eval-Print-Loop (REPL) de Node.js es un shell interactivo que procesa las expresiones de Node.js. El shell lee (**Read**) el código JavaScript que ingresa el usuario, evalúa (**Eval**) el resultado interpretando la línea de código, imprime (**Print**) el resultado al usuario y se repite (**Loop**) hasta que el usuario indique que se debe salir del bucle.

REPL se incluye con cada instalación de Node.js y te permite probar y explorar rápidamente el código JavaScript dentro del entorno de Node sin tener que crear un archivo.

## Requisitos previos

Para completar este tutorial, necesitarás:

- Node.js instalado en tu máquina de desarrollo. Este tutorial usa la versión 10.16.0. Para instalar esto en macOS o Ubuntu, sigue los pasos en [Cómo instalar Node.js y crear un entorno de desarrollo local en macOS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos) o la sección "Instalación mediante un PPA" de [Cómo instalar Node.js en Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) .
- Un conocimiento básico de JavaScript, que puedes encontrar aquí: [Cómo codificar en JavaScript](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript). 

## Paso 1 - Iniciar y detener el REPL

Si tienes `node` instalado, también tienes el REPL de Node.js. Para iniciarlo, simplemente ingresa `node` en su shell de línea de comandos:

```bash
node
```

Esto da como resultado el mensaje REPL:

```bash
>
```

El símbolo `>` te permite saber que puedes ingresar código JavaScript para ser evaluado inmediatamente.

Por ejemplo, intenta agregar dos números en el REPL escribiendo esto:

```bash
> 2 + 2
```

Cuando presiones *ENTER*, REPL evaluará la expresión y devolverá:

```bash
4
```

Para salir de REPL, puedes escribir `.exit`, o presionar *CTRL + D* una vez, o presionar *CTRL + C* dos veces.

Sabiendo cómo ingresar y salir de REPL, echemos un vistazo a cómo puedes usar REPL para ejecutar código JavaScript simple.

## Paso 2 - Ejecución de código en REPL de Node.js

REPL es una forma rápida de probar el código JavaScript sin tener que crear un archivo. Casi todas las expresiones válidas de JavaScript o Node.js se pueden ejecutar en REPL.

En el paso anterior ya probaste la suma de dos números, ahora intentemos la división. Para hacerlo, inicia un nuevo REPL:

```bash
node
```

Y escribe:

```bash
> 10 / 5
```

Presione *ENTER*, y la salida será `2`, como se esperaba:

```bash
2
```

El REPL también puede procesar operaciones en cadenas. Concatena las siguientes cadenas en tu REPL escribiendo:

```bash
> "Hello " + "World"
```

Nuevamente, presiona ENTRAR y se evaluará la expresión de cadena:

```bash
'Hello World'
```

> **Nota**: Es posible que hayas notado que la salida utiliza comillas simples en lugar de comillas dobles. En JavaScript, las comillas utilizadas para una cadena no afectan su valor.

### Llamando funciones

Al escribir código Node.js, es común imprimir mensajes a través del método global `console.log` o una función similar. Escribe lo siguiente:

```bash
> console.log("Hi")
```

Al presionar *ENTER* se obtiene el siguiente resultado:

```bash
Hi
undefined
```

El primer resultado es la salida de `console.log`, que imprime un mensaje en el stream de salida estándar (la pantalla). Debido a que `console.log` imprime una cadena en lugar de devolver una cadena, el mensaje se ve sin comillas. El `undefined` es el valor de retorno de la función.

### Creando variables

Rara vez trabajas con literales en JavaScript. La creación de una variable en REPL funciona de la misma manera que cuando se trabaja con archivos `.js`. Escribe lo siguiente:

```bash
> let age = 30
```

Presionar *ENTER*, y esto da como resultado:

```bash
undefined
```

Como antes, con `console.log`, el valor de retorno de este comando es `undefined` . La variable `age` estará disponible hasta que salgas de la sesión REPL. Por ejemplo, puedes multiplicar la edad por dos. Escribe lo siguiente en el indicador y presiona *ENTER*:

```bash
> age * 2
```

El resultado es:

```bash
60
```

Debido a que REPL devuelve valores, no es necesario utilizar `console.log` o funciones similares para ver el resultado en la pantalla. De forma predeterminada, cualquier valor devuelto aparecerá en la pantalla.

### Bloques multilínea

REPL también admite bloques de código de varias líneas. Por ejemplo, puedes crear una función que agregue `3` a un número dado. Inicia la función escribiendo lo siguiente:

```bash
> const add3 = (num) => {
```

Luego, presionando *ENTER* cambiará el mensaje a:

```bash
...
```

REPL notó un corchete abierto y, por lo tanto, asume que estás escribiendo más de una línea de código, y que eso debe sangrarse. Para facilitar la lectura, REPL agrega 3 puntos y un espacio en la siguiente línea, por lo que el siguiente código parece tener sangría.

Ingresa la segunda y tercera línea de la función, una a la vez, presionando ENTER después de cada una:

```bash
... return num + 3;
... }
```

Si presionas *ENTER* después del corchete de cierre, se mostrará `undefined`, que es el "valor de retorno" de la función asignada a una variable. El indicador `...` desaparece y regresa el indicador `>`:

```bash
undefined
>
```

Ahora, llama a `add3()` especificando un valor:

```bash
> add3(10)

```

Como se esperaba, el resultado es:

```bash
13
```

Puedes utilizar REPL para probar fragmentos de código JavaScript antes de incluirlos en tus programas. REPL también incluye algunos atajos útiles para facilitar ese proceso.

## Paso 3 - Dominar los atajos de REPL

REPL proporciona atajos para reducir el tiempo de codificación cuando sea posible. Mantiene un historial de todos los comandos ingresados ​​y nos permite recorrerlos y repetir un comando si es necesario.

Por ejemplo, ingresa la siguiente cadena:

```bash
"The answer to life the universe and everything is 32"
```

Esto resulta en:

```bash
'The answer to life the universe and everything is 32'
```

Si queremos editar la cadena y cambiar el `"32"` a `"42"`, en el indicador, usa la tecla de flecha *ARRIBA* para volver al comando anterior:

```bash
> "The answer to life the universe and everything is 32"
```

Mueve el cursor hacia la izquierda, elimina el `3`, ingresa un `4` y presione *ENTER* nuevamente:

```bash
'The answer to life the universe and everything is 42'
```

Continúa presionando la tecla de flecha *ARRIBA* y retrocederás más a través de tu historial hasta el primer comando utilizado en la sesión REPL actual. Por el contrario, presionar *ABAJO* iterarás hacia los comandos más recientes en el historial.

Cuando hayas terminado de maniobrar a través de tu historial de comandos, presiona *ABAJO* repetidamente hasta que hayas agotado tu historial de comandos recientes.

Para obtener rápidamente el último valor evaluado, utiliza el carácter de subrayado. Escribe `_` y presiona *ENTER*:

```bash
> _
```

La cadena de texto ingresada anteriormente aparecerá nuevamente:

```bash
'The answer to life the universe and everything is 42'
```

REPL también tiene un autocompletado para funciones, variables y palabras clave. Si deseas encontrar la raíz cuadrada de un número usando la función `Math.sqrt`, ingresa las primeras letras, así:

```bash
> Math.sq
```

Luego presione la tecla *TAB* y REPL completará automáticamente la función:

```bash
> Math.sqrt
```

Cuando hay varias posibilidades para autocompletar, se te mostrarán todas las opciones disponibles. Por ejemplo, ingresa solo:

```bash
> Math.
```

Y presione *TAB* dos veces. Verás todos los posibles autocompletados:

```bash
> Math.
Math.__defineGetter__      Math.__defineSetter__      Math.__lookupGetter__
Math.__lookupSetter__      Math.__proto__             Math.constructor
Math.hasOwnProperty        Math.isPrototypeOf         Math.propertyIsEnumerable
Math.toLocaleString        Math.toString              Math.valueOf

Math.E                     Math.LN10                  Math.LN2
Math.LOG10E                Math.LOG2E                 Math.PI
Math.SQRT1_2               Math.SQRT2                 Math.abs
Math.acos                  Math.acosh                 Math.asin
Math.asinh                 Math.atan                  Math.atan2
Math.atanh                 Math.cbrt                  Math.ceil
Math.clz32                 Math.cos                   Math.cosh
Math.exp                   Math.expm1                 Math.floor
Math.fround                Math.hypot                 Math.imul
Math.log                   Math.log10                 Math.log1p
Math.log2                  Math.max                   Math.min
Math.pow                   Math.random                Math.round
Math.sign                  Math.sin                   Math.sinh
Math.sqrt                  Math.tan                   Math.tanh
Math.trunc
```

Presione *CTRL + C* para ir a una nueva línea en el indicador REPL sin ejecutar lo que está en la línea actual.

Conocer los atajos de REPL te hará más eficiente al utilizarlo. Sin embargo, hay otra cosa que REPL proporciona para aumentar la productividad: los comandos REPL.

## Paso 4 - Uso de comandos REPL

REPL tiene palabras clave específicas para ayudar a controlar su comportamiento. Cada comando comienza con un punto.

### .help

Para enumerar todos los comandos disponibles, utiliza el comando `.help`:

```bash
> .help
```

No hay muchos, pero son útiles para hacer cosas en REPL:

```bash
.break    Sometimes you get stuck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
```

Si alguna vez olvidas un comando, siempre puedes consultar `.help` para listarlos y ver qué hace cada uno.

### .break/.clear

Con `.break` o `.clear`, es fácil salir de una expresión de varias líneas. Por ejemplo, comienza un ciclo `for` de la siguiente manera:

```bash
> for (let i = 0; i < 100000000; i++) {
```

Para salir directamente, en lugar de ingresar la siguiente línea, usa el comando `.break` o `.clear`:

```bash
... .break
```

Verás un nuevo símbolo de mensaje de REPL:

```bash
>
```

REPL pasará a una nueva línea sin ejecutar ningún código, similar a presionar *CTRL + C*.

### .save and .load

El comando `.save` almacena en un archivo todo el código que ejecutaste desde el inició de la sesión actual de REPL. El comando `.load` ejecuta todo el código JavaScript desde un archivo dentro de REPL.

Sal de la sesión usando el comando `.exit` o con el atajo *CTRL + D*. A continuación inicia un nuevo REPL con `node`. Ahora solo se guardará el código que estás a punto de escribir.

Crea un array con frutas:

```bash
> fruits = ['banana', 'apple', 'mango']
```

En la siguiente línea, REPL mostrará:

```bash
[ 'banana', 'apple', 'mango' ]
```

Guarda esta variable en un nuevo archivo, `fruit.js`:

```bash
> .save fruits.js
```

Verás un mensaje de confirmación:

```bash
Session saved to: fruits.js
```

El archivo se guarda en el mismo directorio donde se abrió REPL.

Sal de la sesión e inicia un nuevo REPL con `node`. Cuando se te solicite, carga el archivo `fruit.js` ingresando:

```bash
> .load fruits.js
```

Esto resulta en:

```bash
fruits = ['banana', 'apple', 'mango']
[ 'banana', 'apple', 'mango' ]
```

El comando `.load` lee cada línea de código y lo ejecuta, como se esperaba de un intérprete de JavaScript. Ahora puedes usar la variable `fruits` como si hubiera estado disponible en la sesión actual todo el tiempo.

Escribe el siguiente comando y presione *ENTRAR*:

```bash
> fruits[1]
```

REPL dará como resultado:

```bash
'apple'
```

Puedes cargar cualquier archivo JavaScript con el comando `.load`, no solo los elementos que guardaste previamente desde REPL.

Hagamos una demostración rápida abriendo tu editor de código preferido o nano, un editor de línea de comandos, y creemos un nuevo archivo llamado `peanuts.js`:

```bash
nano peanuts.js
```

Ahora que el archivo está abierto, escribe lo siguiente:

```bash
console.log('I love peanuts!');
```

Guarda y sal de nano presionando *CTRL + X*.

En el mismo directorio donde guardaste `peanuts.js`, inicia una sesión de REPL con el comando `node`. Carga `peanuts.js` en su sesión:

```bash
> .load peanuts.js
```

El comando `.load` ejecutará la declaración `console.log` y mostrará el siguiente resultado:

```bash
console.log('I love peanuts!');

I love peanuts!
undefined
>
```

Cuando el uso de REPL es más extenso de lo esperado, o si crees que tienes un fragmento de código interesante que vale la pena compartir o explorar con más profundidad, puedes usar los comandos `.save` y `.load` para hacer posibles ambos objetivos.

## Conclusión

REPL es un entorno interactivo que te permite ejecutar código JavaScript sin tener que escribirlo primero en un archivo.