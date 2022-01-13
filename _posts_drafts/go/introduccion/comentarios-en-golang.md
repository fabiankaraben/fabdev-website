---
title: 'Cómo escribir comentarios en Go (Golang)'
excerpt: 'Los comentarios en el código pueden servir como notas para uno mismo, como recordatorios, o pueden escribirse para ayudar a otros programadores.'
coverImage: '/assets/go/comentarios-go.png'
date: '2022-01-04T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/go/comentarios-go.png'
---

Los comentarios son líneas que existen en el código de los programas, y que son ignoradas por compiladores e intérpretes.

La inclusión de comentarios en los programas hace que el código sea más legible para los humanos, puesto que proporciona cierta información o explicación sobre lo que hace cada parte de un programa.

Dependiendo del propósito del programa, los comentarios pueden servir como notas para uno mismo, como recordatorios, o pueden escribirse con la intención de que otros programadores puedan entender lo que está haciendo el código.

En general, es una buena idea escribir comentarios mientras escribes o actualizas un programa, ya que es fácil olvidar el hilo de pensamiento que tenías al escribirlo, y los comentarios pueden ser útiles a largo plazo.

## Sintaxis de comentarios

Los comentarios en Go comienzan con un conjunto de barras diagonales (`//`) y continúan hasta el final de la línea. Es idiomático tener un espacio en blanco después del conjunto de barras diagonales.

Generalmente, los comentarios se verán así:

```go
// Esto es un comentario
```

Los comentarios no se ejecutan, por lo que no habrá ninguna acción a partir de un comentario al ejecutar un programa. Los comentarios están en el código fuente para que los lean los humanos, no para que los ejecuten las computadoras.

En un programa "¡Hola, mundo!", un comentario puede verse así:

```go
package main

import (
	"fmt"
)

func main() {
	// Print “Hello, World!” to console
	fmt.Println("Hello, World!")
}
```

En un bucle `for` que itera sobre un segmento, los comentarios pueden verse así:

```go
package main

import (
	"fmt"
)

func main() {
	// Define sharks variable as a slice of strings
	sharks := []string{"hammerhead", "great white", "dogfish", "frilled", "bullhead", "requiem"}

	// For loop that iterates over sharks list and prints each string item
	for _, shark := range sharks {
		fmt.Println(shark)
	}
}
```

Los comentarios deben hacerse con la misma sangría que el código que se está comentando. Es decir, una definición de función sin sangría tendría un comentario sin sangría, y cada nivel de sangría siguiente tendría comentarios que están alineados con el código que se está comentando.

Por ejemplo, así es como se comenta la función `main`, con comentarios después de cada nivel de sangría del código:

```go
package main

import "fmt"

const favColor string = "blue"

func main() {
	var guess string
	// Create an input loop
	for {
		// Ask the user to guess my favorite color
		fmt.Println("Guess my favorite color:")
		// Try to read a line of input from the user. Print out the error 0
		if _, err := fmt.Scanln(&guess); err != nil {
			fmt.Printf("%s\n", err)
			return
		}
		// Did they guess the correct color?
		if favColor == guess {
			// They guessed it!
			fmt.Printf("%q is my favorite color!\n", favColor)
			return
		}
		// Wrong! Have them guess again.
		fmt.Printf("Sorry, %q is not my favorite color. Guess again.\n", guess)
	}
}
```

Los comentarios se hacen para ayudar a los programadores, ya sea el programador original o alguien más que esté usando o colaborando en el proyecto. Si los comentarios no se pueden mantener y actualizar correctamente junto con el código base, es mejor no incluir un comentario en lugar de escribir un comentario que  contradiga el código.

Al comentar el código, debes buscar responder el por qué detrás del código en lugar del qué o cómo. A menos que el código sea particularmente complicado, mirar el código generalmente puede responder el qué o el cómo, razón por la cual los comentarios generalmente se centran en el por qué.

## Comentarios en bloque

Los comentarios en bloque se pueden utilizar para explicar código más complicado o código con el que no esperas que el lector esté familiarizado.

Puedes crear comentarios en bloque de dos formas en Go. La primera es utilizar un conjunto de barras diagonales dobles y repetirlas para cada línea.

```go
// Primera línea de un comentario de bloque
// Segunda línea de un comentario de bloque
```

La segunda es usar etiquetas de apertura (`/*`) y etiquetas de cierre (`*/`). Para documentar código, se considera idiomático utilizar siempre la sintaxis `//`. Solo emplearías la sintaxis `/* ... */` para depurar, que cubriremos más adelante en este artículo.

```go
/ *
Todo aqui
será considerado
un comentario de bloque
* /
```

En este ejemplo, el comentario del bloque define lo que está sucediendo en la función `MustGet()`:

```go
// MustGet will retrieve a url and return the body of the page.
// If Get encounters any errors, it will panic.
func MustGet(url string) string {
	resp, err := http.Get(url)
	if err != nil {
		panic(err)
	}

	// don't forget to close the body
	defer resp.Body.Close()
	var body []byte
	if body, err = ioutil.ReadAll(resp.Body); err != nil {
		panic(err)
	}
	return string(body)
}
```

Es común ver comentarios de bloque al comienzo de las funciones exportadas en Go. Estos comentarios son también los que generan la documentación de tu código. 

Los comentarios de bloque también se utilizan cuando las operaciones son menos sencillas y, por lo tanto, exigen una explicación detallada. Con la excepción de las funciones de documentación, debes tratar de evitar comentar demasiado el código y confiar en que otros programadores comprenderán, a menos que estés escribiendo para una audiencia en particular.

## Comentarios en línea

Los comentarios en línea ocurren en la misma línea de una declaración, justo después del código mismo. Como otros comentarios, comienzan con una serie de barras diagonales. 

Nuevamente, no es necesario tener un espacio en blanco después de las barras diagonales, pero se considera idiomático hacerlo.

Generalmente, los comentarios en línea tienen este aspecto:

```go
// Comentario en línea sobre el código
```

Los comentarios en línea deben usarse con moderación, sin embargo, pueden ser efectivos para explicar partes complicadas o no obvias del código. También pueden ser útiles si crees que es posible que en el futuro no recuerdes una línea del código que estás escribiendo, o si estás colaborando con alguien que sabes que puede no estar familiarizado con todos los aspectos del código.

Por ejemplo, si no usas muchas matemáticas en tus programas Go, es posible que tú o tus colaboradores no sepan que lo siguiente crea un número complejo, por lo que puedes incluir un comentario en línea sobre eso:

```go
z := x % 2 // Obtiene el módulo de x
```

También puedes utilizar comentarios en línea para explicar la razón detrás de hacer algo, o para proporcionar información adicional, como en:

```go
x := 8 // Inicializar x con un número arbitrario
```

Solo debes utilizar comentarios en línea cuando sea necesario y cuando puedan proporcionar una guía útil para la persona que lee el programa.

## Comentar el código para realizar pruebas

Además de utilizar comentarios como una forma de documentar el código, también puedes emplear etiquetas de apertura (`/*`) y etiquetas de cierre (`*/`) para crear un comentario de bloque. Esto te permite comentar el código que no deseas ejecutar mientras estás probando o depurando un programa. Es decir, cuando experimentes errores después de implementar nuevas líneas de código, es posible que desees comentar algunas de ellas para ver si puedes solucionar el problema.

El uso de las etiquetas `/*` y `*/` también puede permitirte probar alternativas mientras determinas cómo configurar tu código. También puedes usar comentarios de bloque para comentar el código que falla mientras continúas trabajando en otras partes de tu código.

```go
// Function to add two numbers
func addTwoNumbers(x, y int) int {
	sum := x + y
	return sum
}

// Function to multiply two numbers
func multiplyTwoNumbers(x, y int) int {
	product := x * y
	return product
}

func main() {
	/*
	   In this example, we're commenting out the addTwoNumbers
	   function because it is failing, therefore preventing it from executing.
	   Only the multiplyTwoNumbers function will run

	   a := addTwoNumbers(3, 5)
	   fmt.Println(a)

	*/

	m := multiplyTwoNumbers(5, 9)
	fmt.Println(m)
}
```

>**Nota**: Comentar el código solamente debe hacerse con fines de prueba. No dejes fragmentos de código comentado en tu programa final.

Comentar el código con las etiquetas `/*` y `*/` puede permitirte probar diferentes métodos de programación, así como ayudarte a encontrar la fuente de un error al comentar sistemáticamente y ejecutar partes de un programa.

## Conclusión

El empleo de comentarios dentro de tu código Go ayudarán a que tus programas sean más legibles para los humanos, incluido tú mismo en el futuro. Agregar comentarios apropiados que sean relevantes y útiles puede facilitar que otros colaboren en tus proyectos.

Comentar tu código correctamente en Go también te permitirá utilizar la herramienta *Godoc*, la cual es una herramienta que extraerá comentarios de tu código y generará documentación automáticamente para tu programa Go.