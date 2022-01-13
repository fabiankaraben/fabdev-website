---
title: 'Entendiendo a GOPATH'
excerpt: 'Este artículo te guiará por los conceptos necesarios para comprender qué es GOPATH, cómo funciona y cómo configurarlo.'
coverImage: '/assets/go/entendiendo-gopath.png'
date: '2022-01-03T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/go/entendiendo-gopath.png'
---

Este artículo te guiará por los conceptos necesarios para comprender qué es `GOPATH`, cómo funciona y cómo configurarlo. Este es un paso crucial para configurar un entorno de desarrollo de *Go*, así como para comprender cómo *Go* encuentra, instala y crea archivos fuente. En este artículo usaremos `GOPATH` para referirnos al concepto de estructura de carpetas que discutiremos. Utilizaremos `$GOPATH` para referirnos a la variable de entorno que utiliza *Go* para encontrar la estructura de carpetas.

Un espacio de trabajo de *Go* es la forma en que *Go* gestiona nuestros archivos de origen, binarios compilados y objetos almacenados en caché que se utilizan para una compilación más rápida. Es típico, y también aconsejable, tener solo un espacio de trabajo de Go, aunque es posible tener varios espacios. `GOPATH` actúa como la carpeta raíz de un espacio de trabajo.


> **Nota**: en el artículo siguiente veremos los *Módulos de Go*, los cuales nos permiten alojar el código fuente de nuestras aplicaciones desarrolladas fuera de `GOPATH`. Igualmente todos los conceptos de este artículo son válidos e incluso todavía es una opción colocar el código fuente de nuestros desarrollos dentro del directorio `src` que se encuentra dentro de `GOPATH`.

## Configuración de la variable de entorno `$GOPATH`.

La variable de entorno `$GOPATH` enumera los lugares en los que *Go* buscará espacios de trabajo de *Go*. De manera predeterminada, *Go* asume que nuestra ubicación de `GOPATH` está en `$HOME/go`, donde `$HOME` es el directorio raíz de nuestra cuenta de usuario en nuestra computadora. Podemos cambiar esto configurando la variable de entorno `$GOPATH`. 

Para información más detallada, puedes seguir este tutorial sobre [lectura y configuración de variables de entorno en Linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps). 

Para obtener más información sobre cómo configurar la variable `$GOPATH`, consulta la [documentación de Go](https://go.dev/doc/code#Command).

## `$GOPATH` no es `$GOROOT`

El directorio del *path* almacenado en `$GOROOT` es donde vive el código, el compilador y las herramientas propias de *Go*; este no es nuestro código fuente. `$GOROOT` suele ser algo así como `/usr/local/go`. Nuestro `$GOPATH` suele ser algo como `$HOME/go`.

Si bien ya no necesitamos configurar específicamente la variable `$GOROOT`, todavía se hace referencia a ella en materiales más antiguos.

Ahora, analicemos la estructura del espacio de trabajo de *Go*.

## Anatomía del espacio de trabajo de Go

Dentro de un espacio de trabajo de Go, o `GOPATH`, hay tres directorios: `bin`, `pkg` y `src`. Cada uno de estos directorios tiene un significado especial para la cadena de herramientas de Go.

```bash
├── bin
├── pkg
└── src
  └── github.com/foo/bar
    └── bar.go
```

Echemos un vistazo a cada uno de estos directorios.

El directorio `$GOPATH/bin` es donde Go coloca los binarios que van a instalar compilar luego de la compilación. Nuestro sistema operativo utiliza la variable de entorno `$PATH` para encontrar aplicaciones binarias que se pueden ejecutar sin una ruta completa. Se recomienda agregar este directorio a nuestra variable `$PATH` global.

Por ejemplo, si no agregamos `$GOPATH/bin` a `$PATH` para ejecutar un programa desde allí, necesitaríamos ejecutar:

```bash
$GOPATH/bin/myapp
```

Cuando se agrega `$GOPATH/bin` a `$PATH`, podemos hacer la misma llamada de esta forma:

```bash
myapp
```

El directorio `$GOPATH/pkg` es donde Go almacena los archivos de objetos pre compilados para acelerar la posterior compilación de programas. Normalmente, la mayoría de los desarrolladores no necesitarán acceder a este directorio. Si tienes problemas con la compilación, puedes eliminar este directorio de forma segura y Go lo reconstruirá.

El directorio `src` es donde se deben ubicar todos nuestros archivos `.go` o código fuente. Esto no debe confundirse con el código fuente que utiliza la herramienta Go, que se encuentra en `$GOROOT`. Mientras escribimos aplicaciones, paquetes y bibliotecas de Go, colocaremos estos archivos en `$GOPATH/src/path/to/code`.

## ¿Qué son los paquetes?

El código Go está organizado en paquetes. Un paquete representa todos los archivos en un solo directorio en el disco. Un directorio solamente puede contener los archivos de un mismo paquete. Los paquetes se almacenan, junto a todos los archivos fuente de Go escritos por el usuario, en el directorio `$GOPATH/src`. Podemos comprender la resolución de paquetes importando diferentes paquetes.

Si nuestro código vive en `$GOPATH/src/blue/red`, entonces su nombre de paquete debería ser `red`.

La declaración de importación para el paquete `red` sería:

```go
import "blue/red"
```

Los paquetes que viven en repositorios de código fuente, como *GitHub* y *Bitbucket*, tienen la ubicación completa del repositorio como parte de su ruta de importación.

Por ejemplo, importaríamos el código fuente en `https://github.com/gobuffalo/buffalo` usando la siguiente ruta de importación:

```go
import "github.com/gobuffalo/buffalo"
```

Por lo tanto, este código fuente estaría en la siguiente ubicación en el disco:

```bash
$GOPATH/src/github.com/gobuffalo/buffalo
```

## Conclusión

En este artículo discutimos `GOPATH` como un conjunto de carpetas en las que Go espera que viva nuestro código fuente, así como qué son esas carpetas y qué contienen. Discutimos cómo cambiar esa ubicación del valor predeterminado de `$HOME/go` a la elección del usuario estableciendo la variable de entorno `$GOPATH`. Finalmente, discutimos cómo Go busca paquetes dentro de esa estructura de carpetas.

Introducidos en Go 1.11, los módulos Go tienen como objetivo reemplazar los espacios de trabajo Go y `GOPATH`. Si bien se recomienda comenzar a usar módulos, es posible que algunos entornos, como los entornos corporativos, no estén listos para usar módulos.

