---
title: 'Cómo escribir y ejecutar tu primer programa en Node.js'
excerpt: 'En este tutorial, crearás tu primer programa con Node.js y se te presentarán algunos conceptos específicos de Node.'
coverImage: '/assets/nodejs/tu-primer-programa.png'
date: '2021-12-15T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/nodejs/tu-primer-programa.png'
---

Node.js es un entorno de ejecución de código abierto popular que puede ejecutar JavaScript fuera del navegador mediante el motor JavaScript V8, que es el mismo motor que se utiliza el navegador web Google Chrome para la ejecución de JavaScript. El *runtime* de Node se usa comúnmente para crear herramientas de línea de comandos y servidores web.

Aprender **Node.js** te permitirá escribir tu código de frontend y tu código de backend en el mismo lenguaje. El uso de JavaScript en toda tu pila de trabajo puede ayudarte a reducir el tiempo de desarrollo, además las bibliotecas se compartirán fácilmente entre el servidor backend y tus proyectos frontend.

Además, gracias a su soporte para ejecución asincrónica, Node.js sobresale en tareas intensivas de I/O (Entrada/Salida), que es lo que lo hace tan adecuado para la web. Las aplicaciones en tiempo real, como la transmisión de video, o las aplicaciones que envían y reciben datos continuamente, pueden ejecutarse de manera más eficiente cuando se escriben en Node.js.

En este tutorial, crearás tu primer programa con el runtime de Node.js. Se te presentarán algunos conceptos específicos de Node y te abrirás camino para crear un programa que ayude a los usuarios a inspeccionar las variables de entorno en su sistema. Para hacer esto, aprenderás cómo enviar cadenas a la consola, recibir información del usuario y acceder a las variables de entorno.

## Prerrequisitos

Para completar este tutorial, necesitarás:

- Node.js instalado en tu máquina de desarrollo. Este tutorial usa Node.js versión 10.16.0. Para instalar esto en macOS o Ubuntu 18.04, sigue los pasos en [Cómo instalar Node.js y crear un entorno de desarrollo local en macOS](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos) o la sección "Instalación mediante un PPA" de [Cómo instalar Node.js en Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04).

- Un conocimiento básico de JavaScript, que puedes encontrar aquí: [Cómo codificar en JavaScript](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript).

## Paso 1 - Salidas en la consola

Para escribir un programa "¡Hola, mundo!", abre un editor de texto de línea de comando como *nano* y crea un nuevo archivo:

```bash
nano hello.js
``` 

Con el editor de texto abierto, escribe el siguiente código:

```javascript
console.log("Hello World");
```

El objeto de `console` en Node.js es proporcionar métodos simples para escribir en `stdout`, `stderr` o en cualquier otro flujo de Node.js, que en la mayoría de los casos es la línea de comandos. El método `log` imprime el contenido especificado en la salida estándar, para que puedas verlo en tu consola.

En el contexto de Node.js, los `streams` son objetos que pueden recibir datos, como la transmisión `stdout`, u objetos que pueden generar datos, como un conector de red o un archivo. En el caso de las transmisiones (`streams`) `stdout` y `stderr`, todos los datos que se les envíen se mostrarán en la consola. Una de las mejores cosas de las transmisiones es que se redirigen fácilmente, en cuyo caso puedes redirigir la salida de tu programa a un archivo, por ejemplo.

Guarda los cambios y cierra nano presionando *CTRL+X*, y cuando se te solicite guardar el archivo, presiona *Y*. Ahora tu programa está listo para ejecutarse.

## Paso 2 - Ejecución del programa

Para ejecutar este programa, utiliza el comando de `node` de la siguiente manera:

```bash
node hello.js
```

El programa `hello.js` se ejecutará y mostrará el siguiente resultado:

```bash
Hello World
```

El intérprete de Node.js leyó el archivo y ejecutó `console.log("Hello World");` llamando al método `log` del objeto global `console`. La cadena `"Hello World"` se pasó como argumento a la función `log`.

Aunque las comillas son necesarias en el código para indicar que el texto es una cadena, no se imprimen en la pantalla.

Una vez confirmado que el programa funciona, hagámoslo más interactivo.

## Paso 3 - Recibir de la entrada del usuario a través de argumentos de línea de comandos

Cada vez que ejecutas  programa Node.js "¡Hola, mundo!", produces la misma salida. Para que el programa sea más dinámico, obtengamos información del usuario y mostrémosla en la pantalla.

Las herramientas de línea de comandos a menudo aceptan varios argumentos que modifican su comportamiento. Por ejemplo, ejecutar `node` con el argumento `--version` imprime la versión instalada en lugar de ejecutar el intérprete. En este paso, harás que tu código acepte la entrada del usuario a través de argumentos de línea de comandos.

Para ello, crea un nuevo archivo `arguments.js` con nano:

```bash
nano arguments.js
```

Escribe el siguiente código:

```javascript
console.log(process.argv);
```

El objeto `process` es un objeto Node.js global que contiene funciones y datos relacionados con el proceso Node.js que se está ejecutando actualmente. La propiedad `argv` es una array de strings que contiene todos los argumentos pasados al programa desde la línea de comandos.

Guarda los cambios y sal de nano escribiendo *CTRL+X*, cuando se te solicite guardar el archivo, presiona *Y*.

Ahora, cuando ejecutes este programa, añade algunos argumentos al comando, como por ejemplo:

```bash
node arguments.js hello world
```

La salida se parecerá a la siguiente:

```bash
[ '/usr/bin/node',
  '/home/sammy/first-program/arguments.js',
  'hello',
  'world' ]
```

El primer argumento en el array `process.argv` es siempre la ubicación del binario Node.js que está ejecutando el programa. El segundo argumento es siempre la ubicación del archivo que se está ejecutando. Los argumentos restantes son los que ingresó el usuario, en este caso: `hello` y `world`.

Lo que más nos interesa son los argumentos que ingresó el usuario, no los predeterminados que proporciona Node.js. Abre el archivo `arguments.js` nuevamente para editarlo:

```bash
nano arguments.js
```

Cambiar `console.log(process.argv);` a lo siguiente:

```javascript
console.log(process.argv.slice(2));
```

Debido a que `argv` es un array, puedes usar el método `slice` integrado de JavaScript que devuelve una selección de elementos. Cuando proporcionas a la función `slice` el valor `2` como argumento, obtienes todos los elementos de `argv` que vienen después de su segundo elemento; es decir, los argumentos que ingresó el usuario.

Vuelve a ejecutar el programa con el comando `node` y los mismos argumentos que la última vez:

```bash
node arguments.js hello world
```

Ahora, la salida se ve así:

```bash
[ 'hello', 'world' ]
```

Ahora que ya puedes recopilar información del usuario, recopilemos también información del entorno del programa.

## Paso 4 - Acceder a las variables de entorno

Las variables de entorno son datos de tipo *clave:valor* almacenados fuera de un programa y proporcionados por el sistema operativo. Por lo general, los establece el sistema o el usuario y están disponibles para todos los procesos en ejecución con fines de configuración o de estado. Puedes utilizar el objeto `process` de Node para acceder a ellos.

Utiliza nano para crear un nuevo archivo `environment.js`:

```bash
nano environment.js
``` 

Agrega el siguiente código:

```javascript
console.log(process.env);
``` 

El objeto `env` almacena todas las variables de entorno que están disponibles cuando Node.js está ejecutando el programa.

Guarda y sal como antes, y ejecuta el archivo `environment.js` con el comando `node`.

```bash
node environment.js
``` 

Al ejecutar el programa, deberías ver un resultado similar al siguiente:

```bash
{ SHELL: '/bin/bash',
  SESSION_MANAGER:
   'local/digitalocean:@/tmp/.ICE-unix/1003,unix/digitalocean:/tmp/.ICE-unix/1003',
  COLORTERM: 'truecolor',
  SSH_AUTH_SOCK: '/run/user/1000/keyring/ssh',
  XMODIFIERS: '@im=ibus',
  DESKTOP_SESSION: 'ubuntu',
  SSH_AGENT_PID: '1150',
  PWD: '/home/sammy/first-program',
  LOGNAME: 'sammy',
  GPG_AGENT_INFO: '/run/user/1000/gnupg/S.gpg-agent:0:1',
  GJS_DEBUG_TOPICS: 'JS ERROR;JS LOG',
  WINDOWPATH: '2',
  HOME: '/home/sammy',
  USERNAME: 'sammy',
  IM_CONFIG_PHASE: '2',
  LANG: 'en_US.UTF-8',
  VTE_VERSION: '5601',
  CLUTTER_IM_MODULE: 'xim',
  GJS_DEBUG_OUTPUT: 'stderr',
  LESSCLOSE: '/usr/bin/lesspipe %s %s',
  TERM: 'xterm-256color',
  LESSOPEN: '| /usr/bin/lesspipe %s',
  USER: 'sammy',
  DISPLAY: ':0',
  SHLVL: '1',
  PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin',
  DBUS_SESSION_BUS_ADDRESS: 'unix:path=/run/user/1000/bus',
  _: '/usr/bin/node',
  OLDPWD: '/home/sammy' }
``` 

Ten en cuenta que muchas de las variables de entorno que ves dependen de la configuración y los ajustes de tu sistema, y tu resultado puede verse sustancialmente diferente de lo que ves aquí. En lugar de ver una larga lista de variables de entorno, es posible que necesites recuperar un valor específico.

## Paso 5 - Acceder a una variable de entorno específica

En este paso, verás las variables de entorno y sus valores mediante el objeto global `process.env` e imprimirás sus valores en la consola.

El objeto `process.env` es un mapeo simple entre los nombres de las variables de entorno y sus valores almacenados como cadenas. Como todos los objetos en JavaScript, puedes acceder a una propiedad individual haciendo referencia a su nombre entre corchetes.

Abre el archivo `environment.js` para editarlo:

```bash
nano environment.js
``` 

Cambia `console.log(process.env);` por:

```javascript
console.log(process.env["HOME"]);
``` 

Guarda el archivo y ciérralo. Ahora ejecuta el programa `environment.js`:

```bash
node environment.js
``` 

La salida ahora se ve así:

```bash
/home/sammy
``` 

En lugar de imprimir todo el objeto, ahora solo se imprime la propiedad `HOME` de `process.env`, que almacena el valor de la variable de entorno `$HOME`.

Nuevamente, ten en cuenta que la salida de este código probablemente será diferente a la que ves aquí porque es específica de tu sistema. Ahora que puedes especificar la variable de entorno a recuperar, puedes mejorar tu programa preguntando al usuario la variable que desea ver.

## Paso 6 - Recuperación de un argumento en respuesta a la entrada del usuario

A continuación, utilizarás la capacidad de leer argumentos de línea de comando y variables de entorno para crear una utilidad de línea de comando que imprima el valor de una variable de entorno en la pantalla.

Utiliza nano para crear un nuevo archivo `echo.js`:

```bash
nano echo.js
``` 

Agrega el siguiente código:

```javascript
const args = process.argv.slice(2);
console.log(process.env[args[0]]);
``` 

La primera línea de `echo.js` almacena todos los argumentos de la línea de comandos que el usuario proporcionó en una variable constante llamada `args`. La segunda línea imprime la variable de entorno almacenada en el primer elemento de `args`, es decir, el primer argumento de línea de comando que proporcionó el usuario.

Guarda los cambios y sal de nano, luego ejecuta el programa de la siguiente manera:

```bash
node echo.js HOME
``` 

Ahora, la salida sería:

```bash
/home/sammy
```

El argumento `HOME` se guardó en el array `args`, valor que luego se usó como clave para encontrar su valor en el entorno a través del objeto `process.env`.

En este punto, ahora puedes acceder al valor de cualquier variable de entorno en tu sistema. Para verificar esto, intenta ver las siguientes variables: `PWD`, `USER`, `PATH`.

Recuperar variables individuales es bueno, pero dejar que el usuario especifique cuántas variables quiere sería mejor.

## Paso 7 - Visualización de múltiples variables de entorno

Actualmente, la aplicación solo puede inspeccionar una variable de entorno a la vez. Sería útil si pudiéramos aceptar múltiples argumentos de línea de comandos y obtener su valor correspondiente en el entorno. Utiliza nano para editar `echo.js`:

```bash
nano echo.js
``` 

Edita el archivo para que tenga el siguiente código:

```javascript
const args = process.argv.slice(2);

args.forEach(arg => {
  console.log(process.env[arg]);
});
``` 

El método `forEach` es un método estándar de JavaScript en todos los objetos array. Acepta una función de devolución de llamada que se usa mientras itera sobre cada elemento de la matriz. Utiliza `forEach` en el array de argumentos, proporcionándole una función de devolución de llamada que imprime el valor del argumento actual en el entorno.

Guarda los cambios y sal del archivo. Ahora vuelve a ejecutar el programa con dos argumentos:

```bash
node echo.js HOME PWD
``` 

Verás el siguiente resultado:

```bash
/home/sammy
/home/sammy/first-program
``` 

La función `forEach` asegura que se impriman todos los argumentos de la línea de comandos en el array `args`.

Ahora tienes una forma de recuperar las variables que solicita el usuario, pero aún tenemos que manejar el caso en el que el usuario ingresa datos incorrectos.

## Paso 8 - Manejo de entrada indefinida

Para ver qué sucede si le das al programa un argumento que no es una variable de entorno válida, ejecuta lo siguiente:

```bash
node echo.js HOME PWD NOT_DEFINED
``` 

La salida se verá similar a la siguiente:

```bash
/home/sammy
/home/sammy/first-program
undefined
``` 

Las dos primeras líneas se imprimen como se esperaba y la última línea genera una salida `undefined`. En JavaScript, un valor `undefined` significa que a una variable o propiedad no se le ha asignado un valor. Debido a que `NOT_DEFINED` no es una variable de entorno válida, se muestra como `undefined`.

Sería más útil para un usuario ver un mensaje de error si su argumento de línea de comando no se encuentra en el entorno.

Abre `echo.js` para editarlo:

```bash
nano echo.js
``` 

Edita `echo.js` para que tenga el siguiente código:

```javascript
const args = process.argv.slice(2);

args.forEach(arg => {
  let envVar = process.env[arg];
  if (envVar === undefined) {
    console.error(`Could not find "${arg}" in environment`);
  } else {
    console.log(envVar);
  }
});
``` 

Aquí, has modificado la función de devolución de llamada proporcionada a `forEach` para hacer las siguientes cosas:

1. Obtener el valor del argumento de la línea de comando en el entorno y guardarlo en una variable `envVar`.
2. Comprobar si el valor de `envVar` es `undefined`.
3. Si `envVar` es `undefined`, se imprime un mensaje útil que indica que no se pudo encontrar.
4. Si se encontró una variable de entorno, imprimimos su valor.

> **Nota**: La función `console.error` imprime un mensaje en la pantalla a través del stream `stderr`, mientras que `console.log` imprime en la pantalla a través del stream `stdout`. Cuando ejecutas este programa a través de la línea de comando, no notará la diferencia entre los streams `stdout` y `stderr`, pero es una buena práctica imprimir los errores a través del stream `stderr` para que puedan ser identificados y procesados más fácilmente por otros programas, que sí pueden notar la diferencia.

Ahora ejecuta el siguiente comando una vez más:

```bash
node echo.js HOME PWD NOT_DEFINED
``` 

Esta vez la salida será:

```bash
/home/sammy
/home/sammy/first-program
Could not find "NOT_DEFINED" in environme
``` 

Ahora, cuando proporcionas un argumento de línea de comando que no es una variable de entorno, obtienes un mensaje de error claro que lo indica.

## Conclusión

Tu primer programa mostró un mensaje `"Hello World"` en la pantalla, y ahora has escrito una utilidad de línea de comandos Node.js que lee los argumentos del usuario para mostrar las variables de entorno.

Si deseas llevar esto más allá, puedes cambiar aún más el comportamiento de este programa. Por ejemplo, es posible que desees validar los argumentos de la línea de comandos antes de imprimir. Si un argumento no está definido, puede devolver un error y el usuario solo obtendrá resultados si todos los argumentos son variables de entorno válidas.
