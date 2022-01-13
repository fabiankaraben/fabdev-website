---
title: '¿Cómo concatenar strings en Python?'
excerpt: 'Si quieres crear un string (cadena de texto) formada por otros dos strings más pequeños, puedes utilizar un proceso llamado concatenación.'
coverImage: '/assets/python-con-ejemplos/python-con-ejemplos-concatenar-strings.jpg'
date: '2022-01-12T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/python-con-ejemplos/python-con-ejemplos-concatenar-strings.jpg'
---

Si quieres crear un string (cadena de texto) formada por otros dos strings más pequeños, puedes utilizar un proceso llamado **concatenación**.

## Concatenación básica

La concatenación es la forma más simple para unir dos cadenas de texto, y consiste en utilizar el operador `+` de la siguiente manera.

Ejemplo de *Concatenación básica*:

```python
new_str = "Hola " + "mundo"
print(new_str)
```

Salida producida:

```bash
Hola mundo
```

Este código devuelve el string "Hola mundo".

Para que exista un espacio en blanco entre las dos palabras, es necesario especificar explícitamente dicho espacio en una de las dos cadenas de texto de entrada.

## Concatenación multiplicativa

También puedes crear múltiples copias de un strings pequeño. Esto se logra utilizando el operador `*` seguido por el número de veces que deseas multiplicar ese string.

Veamos un ejemplo de *Concatenación multiplicativa*:

```python
new_str = "Hola" * 3
print(new_str)
```

Salida producida:

```bash
HolaHolaHola
```

Este código devuelve el string "HolaHolaHola".

## Concatenar valores que no son strings

Estos dos operadores funcionan muy bien para cadenas de texto, pero si necesitas añadir valores que no son cadenas de texto a la concatenación, previamente debes utilizar la función `str()` para convertir estos valores a strings.

Veamos un ejemplo:

```python
counter = 5
new_str = "Cantidad: " + str(counter)
print(new_str)
```

Salida producida:

```bash
Cantidad: 5
```

En este ejemplo el valor de la variable `counter` es convertido de `int` a `str` para luego ser utilizado en la concatenación.

Si no utilizamos la función `str()` obtendremos un error.

## Código fuente de los ejemplos

Puedes acceder al código fuente utilizado en este artículo en este <a href="https://github.com/fabiankaraben/python-by-example/tree/main/concatenating-strings" target="_blank">repositorio de GitHub</a>.