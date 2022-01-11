---
title: 'Mis apuntes git, conceptos y comandos'
excerpt: 'Aprender Git es fundamental en el desarrollo de software, no importa qué tecnología utilices, o si trabajas de forma individual o en grupo.'
coverImage: '/assets/apuntes/git.png'
date: '2021-12-18T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/apuntes/git.png'
---

## Introducción

Aprender Git es fundamental en el desarrollo de software, no importa qué tecnología utilices, o si trabajas de forma individual o en grupo.

Usualmente Git trabaja de una manera formidable si es orientado al código, porque Git va a poder analizar los archivos, determinar qué cambió, hacer uniones de código, y todo de manera automática.

Ahora, va a llegar un punto donde Git no lo va a poder hacer de manera automática, como cuando dos personas tocan el mismo código, se produce un conflicto y en esos casos Git necesita que ese conflicto se resuelva manualmente.

Enfrentarse a conflictos es algo normal, no hay que asustarse, e incluso existen técnicas para evitar tener una gran cantidad de conflictos.

Solo veremos la utilización de Git a través de comando de consola, para poder abarcar todos los conceptos necesarios, luego con esa información aprendida es sencillo que cada quien elija el gestor gráfico de repositorios Git que más le guste.


## Conceptos

### Repositorio

Es el nombre que Git da a cada proyecto de código, aunque un repositorio puede almacenar cualquier tipo de contenido, no solamente código de programación.

### Stage

Inicialmente un repositorio tiene todos sus archivos sin seguimiento. Posteriormente podemos agregar uno, varios o todos los archivos al "Stage" lo cual podríamos entenderlo con la analogía de un escenario donde se va a sacar una foto. Subimos archivos al escenario (agregándolo al stage) para luego tomar la fotografía (realizar un commit).

### Commit

Siguiendo la analogía del concepto de 'Stage', realizar un commit es como tomar una fotografía de todos los archivos que se encuentran en el 'stage', esto es, guardar el estado actual de todos esos archivos y dejarlo registrado en la línea del tiempo de nuestro repositorio Git.

## Comandos


#### Conocer la versión instalada de Git

```
git --version
```

#### Visualizar el contenido de ayuda del comando de Git

Ver la ayuda general:

```
git help
```

Ver la ayuda de un subcomando específico:

```
git help commit
```

#### Configuración inicial de Git

Configurar el nombre del usuario:

```
git config --global user.name = "Fabian Karaben"
```

Configurar el email del usuario:

```
git config --global user.email = "fabian@example.com"
```

Ver y opcionalmente editar la configuración actual del usuario:

```
git config --global -e
```

#### Inicializar un repositorio

```
git init
```

#### Ver el estado del repositorio

Este comando muestra información sobre los commits, sobre la rama actual, y más:

```
git status
```

#### Agregar y remover archivos del 'stage'

Agregar un archivo específico al stage:

```
git add index.html
```

Agregar todos los archivos al stage:

```
git add .
```

Remover un archivo específico del stage:

```
git reset index.html
```

#### Commits

Realizar un commit

```
git commit -m "Un mensaje descriptivo para este commit"
```

> Nota: este artículo será actualizado con más contenido.