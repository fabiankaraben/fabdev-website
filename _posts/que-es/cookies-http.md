---
title: '¿Qué son las Cookies HTTP?'
excerpt: 'En este artículo explicaré cómo funcionan las cookies HTTP'
coverImage: '/assets/que-es/Cookies-HTTP.png'
date: '2021-12-11T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/que-es/Cookies-HTTP.png'
---

De una forma u otra, todos los días utilizamos internet e interactuamos con cookies HTTP. Las cookies HTTP permiten a las páginas web personalizar la experiencia de usuario que nos entregan. Es una funcionalidad muy útil que algunas veces simplemente se ignora o incluso se malinterpreta.

Desde el otro lado de un sitio o aplicación web, las cookies HTTP permiten a los desarrolladores crear funcionalidades y comportamientos que se ajusten a las preferencias detectadas del usuario.

Más allá de todos estos beneficios es necesario tener en cuenta algunos riesgos de seguridad relacionados con las cookies HTTP, tópico bastante escuchado en los últimos años, sobre todo entre personas que se preocupan por cada detalle en la utilización de la información personal.

En este artículo explicaré cómo funcionan las cookies HTTP.

## ¿Qué son las cookies HTTP?

Las cookies son pequeñas piezas de datos almacenados en el navegador web y que se envían al servidor en cada solicitud. Son utilizadas para almacenar el estado de la sesión de usuario, preferencias y también seguimiento del usuario.

### Gestión de la sesión del usuario

La gestión de la sesión del usuario permite la interacción segura entre el usuario y algún servicio o aplicación. A medida que el usuario continúa interactuando con la aplicación web, se envían datos que especifican si la sesión del usuario continúa activa.

Algunos ejemplos: Logins (sesión iniciada con una cuenta de usuario), autocompletado de formularios, carros de compra.

### Personalizaciones del usuario

Almacena preferencias del usuario especificadas en la configuración, para ser  usadas las próximas veces que el usuario ingrese a la aplicación.

Algunos ejemplos: Preferencias, temas de interfaz (claro u oscuro), idioma.

### Seguimiento

Registra y analiza hábitos y búsquedas del usuario en el navegador web. Los detalles incluyen el tiempo que el usuario permanece en una página determinada dentro de la aplicación o sitio web, y la lista de las páginas visitadas. Debido a la información confidencial detrás del seguimiento, los usuarios deben estar al tanto de las vulnerabilidades al visitar páginas web inseguras.

Ejemplo: seguimiento de anuncios

## ¿Cómo crear cookies HTTP?

### En el lado del cliente

Desde la consola de tu navegador web, puedes configurar una cookie con JavaScript escribiendo el siguiente código:

```javascript
document.cookie="example=1"
``` 

Para comprobar si tu cookie está configurada, abre la pestaña "Aplicación" y haz clic en la pestaña "Cookies" para acceder a tu nueva cookie. Deberías ver algo como lo siguiente:

![cookie.png](/assets/que-es/Cookies-HTTP-dev-application-tab.png)

## Propiedades de las cookies

### Cookie scope

El alcance de una cookie determina a qué URL se deben enviar las cookies.

### `Expires` y `Max-age`

Otra propiedad a considerar es la vida útil de una cookie o, más simplemente, la fecha de vencimiento de la cookie. 

El atributo `Expires` eliminará una cookie en una fecha específica. Por el contrario, el atributo `Max-age` eliminará una cookie después de un período de tiempo específico.

### `SameSite`

Cubrimos anteriormente cómo se configuran las cookies HTTP para URL directas, pero ¿qué pasa al hacer clic en un enlace dentro de esa URL directa?

Al hacer clic en un enlace dentro de una página, sus cookies se pueden enviar desde la nueva página a la que se le dirige. Aquí es donde entra en juego el atributo `SameSite`. En pocas palabras, `Samesite` especifica si las cookies se envían con solicitudes entre sitios o cada vez que hace clic en un enlace en una página determinada. 

## Tipos de cookies HTTP

### Session cookies

También conocidas como cookies temporales, las cookies de sesión caducan una vez que cierra o abandona el navegador. Notarás que un sitio web está utilizando cookies de sesión cuando tengas que ingresar tus credenciales de inicio de sesión cada vez que abras la página.

### First-Party cookies

Las cookies de origen son almacenadas directamente en tu computadora por el sitio web que estás visitando. El sitio web recopila y análisis información útil para mejorar tu experiencia de usuario.

### Third-Party cookies

Las cookies de terceros son creadas por dominios distintos al que accede directamente. Generalmente, se usan con fines de seguimiento, las cookies de terceros se almacenan incluso después de que se cierra el navegador. 

Un caso de uso común implica el seguimiento de anuncios de sitios web distintos a los que visitas. 

### Secure cookies

Las cookies seguras evitan que las partes no autorizadas observen las cookies enviadas a un nuevo usuario dentro de una respuesta HTTP. Con el atributo `Secure`, las solicitudes HTTP solo incluirán la cookie si se transmiten a través de un canal seguro.

### Zombie cookies

Las cookies zombis son cookies que vuelven a la vida incluso cuando se eliminan o se cierra el navegador. Las cookies de Zombie se almacenan en lugares fuera del almacenamiento de cookies dedicado del navegador web. Cuando el usuario destruye una cookie, una cookie zombi puede tomar la réplica almacenada en otro lugar y adjuntarla al almacenamiento de cookies del usuario nuevamente.

## Conclusión

Hemos visto las principales características de las cookies HTML y aunque muchas veces se las presenta como algo muy peligroso a evitar siempre, normalmente son muy útiles y beneficiosas. 

Simplemente hay que evitar proveer datos sensibles a sitios web que no sean de confianza, incluso la mayoría de los sitios web nos muestran un mensaje dándonos la posibilidad de habilitar o no el uso de cookies.