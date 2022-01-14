---
title: '¿Cómo comparar strings en Python?'
excerpt: 'En este artículo vemos las dos formas que existen en Python para comparar cadenas de texto (strings).'
coverImage: '/assets/python-con-ejemplos/python-con-ejemplos-comparar-strings.jpg'
date: '2022-01-14T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/python-con-ejemplos/python-con-ejemplos-comparar-strings.jpg'
---

Si necesitas comparar cadenas de texto (strings) en Python y verificar si dos strings tienen el mismo valor, existen dos formas de hacerlo en Python, utilizando `is` o utilizando `==`.

La primera forma (`is`) nos permite saber si dos variables hacen referencia al mismo objeto.

La segunda forma (`==`) nos permite comparar el valor actual de dos variables.

Veamos un ejemplo de comparación de strings:

```python
first_word = "Hola"
second_word = "mundo"

if first_word == second_word
  print("Los strings son iguales")
else
  print("Los strings no son iguales")
```

Esto código retorna:

```bash
Los strings son iguales
```

También puedes utilizar otros operadores de comparación de Python, como `!=`, `<`, o `>`.

## Código fuente de los ejemplos

Puedes acceder al código fuente utilizado en este artículo en este <a href="https://github.com/fabiankaraben/python-by-example/tree/main/comparing-strings" target="_blank">repositorio de GitHub</a>.