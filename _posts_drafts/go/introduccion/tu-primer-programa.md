---
title: 'Cómo crear tu primer programa en Go (Golang)'
excerpt: 'Este artículo te llevará a través de la creación de ese primer programa "¡Hola Mundo!" en Go. También lo modificaremos para hacerlo más interesante.'
coverImage: '/assets/go/primer-programa-go.png'
date: '2022-01-02T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/go/primer-programa-go.png'
---

El clásico programa "¡Hola Mundo!" es una tradición en programación. Es un simple pero completo programa para principiantes, y también es una buena manera de estar seguros de que el entorno de desarrollo está correctamente configurado.

Este artículo te llevará a través de la creación de ese primer programa en Go. Sin embargo, para hacer el programa más interesante, modificaremos el tradicional "¡Hola Mundo!" de tal manera que pregunte tu nombre y luego imprima un saludo.

Cuando finalices este artículo, tendrás un programa que lucirá así al ejecutarse:

```bash
go run hello.go
Por favor ingresa tu nombre:
Sammy
¡Hola Sammy!, yo soy Go.
```

## Prerrequisitos

Antes de iniciar este tutorial, necesitarás tener configurado tu entorno local de desarrollo en Go. Puedes consultar las siguientes guías si necesitas ayuda con esto:

-  [Cómo instalar Go en macOS](https://www.digitalocean.com/community/tutorials/how-to-install-go-and-set-up-a-local-programming-environment-on-macos) 
-  [Cómo instalar Go en Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-go-and-set-up-a-local-programming-environment-on-ubuntu-18-04) 
-  [Cómo instalar Go en Windows](https://www.digitalocean.com/community/tutorials/how-to-install-go-and-set-up-a-local-programming-environment-on-windows-10)

## Paso 1: Escribir el programa "¡Hola Mundo!" básico

Para escribir el programa "¡Hola Mundo!", abre un editor de línea de comandos, como por ejemplo `nano`, creando un nuevo archivo `hello.go`, así:

```bash
nano hello.go
```

Esto también se puede hacer en editores de interfaz gráfica, como el popular Visual Studio Code.

Ya con el editor abierto, escribe el siguiente código:

```go
package main

import "fmt"

func main() {
	fmt.Println("¡Hola Mundo!")
}
```

Analicemos cada parte de este código.

La palabra clave `package` define a qué paquete de código pertenece este archivo. Puede haber solo un paquete por carpeta y cada archivo `.go` debe declarar el mismo paquete en la parte superior de su contenido. En este ejemplo el código pertenece al paquete `main`.

La palabra clave `import` le dice al compilador de Go qué otros paquetes vas a usar en este archivo. Aquí estamos importando el paquete `fmt` que pertenece a la biblioteca estándar de Go. El paquete `fmt` provee funcionalidades para dar formato e imprimir contenido, lo cual es muy útil durante el desarrollo.

La función `Println`, perteneciente al paquete `fmt`, dice a la computadora que imprima el texto especificado en pantalla. El texto es `"¡Hola Mundo"`, el cual se encuentra entre comillas porque se trata de un `string`, el tipo de dato que representa los textos. La función `fmt.Println` imprimirá este `string` en la pantalla donde el programa se ejecute.

Para finalizar este paso, guarda el contenido y cierra el editor *nano* presionando las teclas `CTRL + X`, y luego la tecla `Y` para aceptar que los cambios se guarden.

En el siguiente paso probaremos este programa.

## Paso 2: Ejecutar el programa de Go

Con el programa "¡Hola Mundo!" escrito, ahora estás listo para ejecutarlo. Para esto, utilizarás el comando `go run` seguido del nombre del archivo que acabas de crear, de esta forma:

```bash
go run hello.go
```

La salida que verás en la misma consola debe ser:

```bash
¡Hola Mundo!
```

Analicemos qué es lo que ha pasado.

El programa necesita ser compilado antes de ejecutarse. Cuando ejecutas el comando `go run` seguido del nombre del archivo, en este caso `hello.go`, el comando `go` compila el código y luego ejecuta el binario resultante.

Para los programas escritos en lenguajes de programación compilados, el compilador toma el código del programa y genera otro tipo de código de bajo nivel (el código de máquina) que es el ejecutable final del programa.

Los programas de Go requieren un paquete `main` y exactamente una función `main()` que funciona como punto de entrada para la aplicación. La función `main` no recibe argumentos ni devuelve valores, pero le dice al compilador de Go que este paquete debe ser compilado como un ejecutable, ya que existen otros casos en los que un paquete está destinado a ser utilizado por otros paquetes y no a generar un archivo ejecutable.

Una vez compilado, el binario internamente ejecuta la instrucción correspondiente a la línea `fmt.Println("¡Hola Mundo!")`, lo cual envía este texto a ser impreso en pantalla.

Las comillas alrededor del texto `¡Hola Mundo!` no se imprimen, ya que estas son parte de la definición del `string`.

En este paso has compilado y ejecutado un programa "¡Hola Mundo!" completo.

## Paso 3: Solicitar entradas del usuario

Hasta ahora, cada vez que ejecutas tu programa, produces el mismo resultado. En este paso, agregarás a tu programa la funcionalidad de solicitar al usuario su nombre, para luego utilizar su nombre en la salida.

En lugar de modificar tu programa existente, crea un nuevo programa llamado `greeting.go` con el editor *nano*:

```bash
nano greeting.go
```

Primero, agrega este código, que solicita al usuario que ingrese su nombre:

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Por favor, escribe tu nombre.")
}
```

Una vez más, usa la función `fmt.Println` para imprimir texto en la pantalla.

Ahora agrega la línea `var name string` para almacenar la entrada del usuario:

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Por favor, escribe tu nombre.")
	var name string
}
```

La línea `var name string` creará una nueva variable utilizando la palabra clave `var`. Tú decides el nombre de la variable, pero deberá ser de tipo `string`. Luego, agrega la línea `fmt.Scanln(&name)` para capturar la entrada del usuario:

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Por favor, escribe tu nombre.")
	var name string
	fmt.Scanln(&name)
}
```

El método `fmt.Scanln` le dice a la computadora que espere la entrada del teclado que termine con una nueva línea o el carácter `\n`. Esto detiene el programa, lo que permite al usuario ingresar cualquier texto que desee. El programa continuará cuando el usuario presione la tecla *ENTER* en su teclado. Todas las pulsaciones de teclas, incluida la pulsación de tecla *ENTER*, se capturan y convierten en una cadena de caracteres. 

Ahora necesitamos utilizar esos caracteres en la salida del programa, por lo que guardaremos esos caracteres escribiéndolos en la variable `string` llamada `name`. *Go* almacena esa cadena en la memoria de tu computadora hasta que el programa termine de ejecutarse. 

Finalmente, agrega la línea `fmt.Printf("Hola, %s! Yoo soy Go!", name)` a tu programa para imprimir la salida:

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println("Por favor, escribe tu nombre.")
	var name string
	fmt.Scanln(&name)
	fmt.Printf("Hola, %s! Yoo soy Go!", name)
}
```

Esta vez, en lugar de usar el método `fmt.Println` nuevamente, estás usando `fmt.Printf`. La función `fmt.Printf` toma una cadena y, utilizando verbos de impresión especiales, (`%s`), inyecta el valor de `name` en la cadena. Hace esto porque *Go* no admite la interpolación de cadenas, lo que te permitiría tomar el valor asignado a una variable y colocarlo dentro de una cadena.

Guarda los cambios y sal de *nano* presionando *CTRL+X*, y luego *Y* cuando se te solicite guardar el archivo.

Ahora ejecuta el programa. Se te pedirá tu nombre, así que ingrésalo y presiona *ENTER*.

Es posible que el resultado no sea exactamente el esperado:

```bash
Por favor, escribe tu nombre.
Sammy
Hola Sammy
! Yo soy Go!
```

En lugar de `Hola, Sammy! Yo soy Go !`, hay un salto de línea justo después del nombre. El programa capturó todas nuestras pulsaciones de teclas, incluida la tecla *ENTER* que presionamos para decirle al programa que continúe. En una cadena, presionar la tecla *ENTER* crea un carácter especial que crea una nueva línea. La salida del programa está haciendo exactamente lo que se le dijo que hiciera; muestra el texto que ingresaste, incluida esa nueva línea.

No es lo que esperábamos que fuera el resultado, pero esto puede solucionarse con funciones adicionales.

Abre el archivo `greeting.go` en tu editor y localiza esta línea en tu programa:

```go
fmt.Scanln(&name)
```

Agrega la siguiente línea inmediatamente después:

```go
name = strings.TrimSpace(name)
```

Esto usa la función `TrimSpace`, del paquete `strings` de la biblioteca estándar de Go, en la cadena que capturaste con `fmt.Scanln`. La función `strings.TrimSpace` elimina cualquier carácter de espacio, incluidas las nuevas líneas, del principio y el final de una cadena. En este caso, elimina el carácter de nueva línea al final de la cadena creada cuando presionaste *ENTER*. 

Para utilizar la biblioteca `strings`, debes importarlo en la parte superior del programa. Busca estas líneas en tu programa:

```go
import (
	"fmt"
)
```

Agrega la siguiente línea para importar el paquete `strings`:

```go
import (
	"fmt"
	"strings"
)
```

Tu programa ahora contendrá lo siguiente:

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println("Por favor, escribe tu nombre.")
	var name string
	fmt.Scanln(&name)
	name = strings.TrimSpace(name)
	fmt.Printf("Hola, %s! Yo soy Go!", name)
}
```

Guarda y sal de *nano*. Presione *CTRL+X*, luego presione *Y*.

Ejecuta el programa nuevamente:

```bash
go run greeting.go
```

Esta vez, después de ingresar tu nombre y presionar *ENTER*, obtendrás el resultado esperado:

```bash
Por favor, escribe tu nombre.
Sammy
Hola, Sammy! Yo soy Go!
```

Ahora tienes un programa Go que toma la entrada de un usuario y la vuelve a imprimir en la pantalla.

## Código del artículo

Puedes encontrar el código fuente de este artículo en el siguiente repositorio de GitHub:

[How to code in Go (Code)](https://github.com/fabiankaraben/how-to-code-in-go) 

en el directorio `7-first-program`.

## Conclusión

En este tutorial, escribiste un programa "¡Hola, mundo!" y luego lo mejoraste para que tome la entrada de un usuario, procese los resultados y muestre una salida en pantalla.

Ahora que tiene un programa básico con el que trabajar, intente expandirlo aún más. Por ejemplo, pregunta por el color favorito del usuario y haz que el programa diga que su color favorito es el rojo. Incluso podría intentar utilizar esta misma técnica para crear un programa *Mad-Lib* simple.
