---
title: 'Desestructurando en JavaScript'
excerpt: 'Ahora veamos algunas cosas que podemos aplicar a nuestro código para que sea más conciso y eficiente.'
coverImage: '/assets/javascript-tips/Desestructurando- JavaScript.png'
date: '2021-12-17T08:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/javascript-tips/Desestructurando- JavaScript.png'
---

Ahora veamos algunas cosas que podemos aplicar a nuestro código para que sea más conciso y eficiente.

Imaginemos que tenemos un objeto con datos de un animal:

```javascript
const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true, 
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}
``` 

Y necesitamos una función que nos diga cómo alimentar a este animal.

```javascript
// Mal código 💩

function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

console.log(feed(turtle))
``` 

Esto es solamente una función que retorna un *string*, y ese *string* se crea interpolando las propiedades del objeto animal.

Esto luce mal porque estamos repitiendo la palabra `animal` muchas veces.

Existe una técnica llamada "Desestructurar objetos", que podemos utilizar para eliminar las repeticiones.

En este ejemplo tenemos una función que recibe un objeto, pero nosotros solo necesitamos las propiedades de ese objeto, entonces para desestructurar este objeto, reemplacemos el parámetro de entrada de la función de `animal` a `{ name, meal, diet }`. Ahora en el bloque de la función podemos utilizar las propiedades directamente como variables: 

```javascript
// Buen código ✅

function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed(turtle))
``` 

Para analizar esta técnica con más detalle, agreguemos un paso extra colocando la desestructuración del objeto dentro del cuerpo de la función:

```javascript
// Buen código ✅

function feed(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed(turtle))
``` 

En la línea `const { name, meal, diet } = animal;` se crean tres constantes individuales, cada una de ellas con el nombre y el valor de una de las propiedades del objeto. Los nombres de las constantes deben coincidir con los nombres de las propiedades del objeto, aunque no es necesario utilizar todas las propiedades.

**Fuentes:**
- [JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)
- [Do THIS to Write Clean Code! | JavaScript Pro Tips (2021)](https://www.youtube.com/watch?v=ZI3q-_vjSZE)
- [Junior Vs Senior Code - How To Write Better Code](https://www.youtube.com/watch?v=g2nMKzhkvxw)