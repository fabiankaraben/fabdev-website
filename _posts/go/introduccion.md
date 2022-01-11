---
title: 'Introducción a Go'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/go/introduccion-go.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/go/introduccion-go.png'
---

## ¿Qué es Go?

Go (o Golang) es un lenguaje de programación moderno desarrollado originalmente por Google, el cual posee una sintaxis de alto nivel similar a los lenguajes de scripting. Es popular por su sintaxis mínima y por su manejo de concurrencia, así como por las herramientas que provee para compilar de forma nativa para múltiples plataformas.

Go es un lenguaje de programación que nace de la frustración de Google. Los desarrolladores continuamente tenían que elegir entre un lenguaje que se ejecutaba eficientemente pero que demoraba un largo tiempo en compilar, o un lenguaje en el que era fácil programar pero que se ejecutaba ineficientemente en producción.

Por otra parte, Go es un lenguaje versátil ideal para ser utilizado en muchos proyectos diferentes, es particularmente bueno para desarrollar programas de redes distribuidas, e incluso se ha ganado la reputación de ser el "lenguaje de la nube", es decir, el lenguaje utilizado para desarrollar servicios cloud.

![Cómo programar en Go.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1639307256505/Zt-e7E8rG.jpeg)

Go se enfoca en ayudar al desarrollador moderno a hacer más con un potente conjunto de herramientas, evitando los debates acerca del formato, ya que esto forma parte de la especificación del propio lenguaje, como también logrando que los despliegues sean más sencillos compilando todo en un solo binario ejecutable.

Go es fácil de aprender, con un conjunto muy pequeño de palabras clave, lo cual lo convierte en una gran opción tanto para principiantes como para desarrolladores experimentados.

El código de Go es fácil de leer, lo que lo hace ideal para proyectos open source, ideal para el trabajo en equipo.

En esta serie nos sumergiremos en los conceptos básicos de Go, y un poco más allá, y vamos a descubrir por qué es un lenguaje tan popular.

Un gran dato extra es que Go está asociado con los lenguajes mejores pagados a nivel mundial.

## ¿Por qué Go?

Lenguajes compilados como Go, están desarrollados para que las máquinas donde se ejecutan los programas creados, puedan leer el código binario directamente, lo cual es rápido y sencillo. Los programas desarrollados en lenguajes interpretados como Python y Ruby, requieren un programa por separado para ser interpretados al ejecutarse.

Go fue intencionalmente desarrollado para ejecutarse en múltiples núcleos, lo cual permite el escalado al agregar más núcleos (cores). Esto también ayuda a crear programas concurrentes, ya que las goroutines se ejecutan en un segundo plano mientras otras tareas se están ejecutando.

Más adelante veremos en detalle qué son las goroutines, por ahora solo hay que entender que utilizamos goroutines para ejecutar varias tareas a la vez, por ejemplo, servir datos a múltiples usuarios desde una API a la vez, sin que las solicitudes tengan que esperar que la solicitud anterior termine de procesarse.

Go utiliza goroutines en lugar de hilos (threads), ya que requieren menos uso de la memoria RAM del sistema.

## Ventajas de Go

### Flexibilidad

Este lenguaje puede solucionar una gran cantidad de problemáticas típicas. Puede ser utilizado para desarrollar soluciones de red, programas del sistema operativo, aplicaciones audio/visuales como YouTube, y la mayoría de los desarrollos modernos, como Bid Data y Machine Learning.

### Documentación automática

GoDoc genera automáticamente la documentación técnica a partir del código. Esto provee referencias, ejemplos del código, y enlaces al repositorio. Este es un aspecto clave en desarrollos open source y hace que sea mucho más fácil entender el código de otras personas.

### Testeos integrados

El lenguaje viene con una API para pruebas (tests) y elaboración de perfiles, así como con sus propios ejemplos.

### Detección de race condition.

Cuando compiten varios subprocesos, pueden terminar completándose en un orden inesperado, lo que da como resultado errores que son difíciles de rastrear (esto se conoce como condición de carrera o race condition). Los ingenieros de Go decidieron crear un detector automático para eliminar el problema, lo que también garantiza la compatibilidad con versiones anteriores.

## Desventajas de Go

### Bibliotecas de interfaz gráfica (GUI)

Debido a la gran popularidad de Go en entornos de servidor, el desarrollo de bibliotecas para la implementación de interfaces gráficas no es muy grande y aunque existen opciones muy interesantes, en este aspecto otros lenguajes como Python o Java llevan la delantera.
