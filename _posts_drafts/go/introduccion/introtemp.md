---
title: 'Introducción a Go'
excerpt: 'Go es fácil de aprender, con un conjunto pequeño de palabras clave, es una gran opción para principiantes y para desarrolladores experimentados.'
coverImage: '/assets/go/introduccion-go.png'
date: '2022-01-01T05:35:07.322Z'
author:
  name: Fabián Karaben
  picture: '/assets/authors/fabian.png'
ogImage:
  url: '/assets/go/introduccion-go.png'
---

Entonces, lo primero que debemos saber es que go es creado por un pequeño equipo dentro de Google.

Y ese equipo estaba formado por Robert Griesemer, Rob Pike y Ken Thompson.

Ahora, estos muchachos han estado en la industria del software por un tiempo, por ejemplo, Ken diseñó e implementó el primer sistema operativo Unix, y también tuvo un papel clave en el desarrollo de Unicode.

Entonces, cuando estos muchachos se juntaron y decidieron que querían crear un idioma, teníamos mucho talento en la sala tan pronto como se juntaron.

Pero una de las preguntas que debemos entender es, ¿por qué crear un nuevo idioma? Bueno, para entender eso, tenemos que mirar los idiomas que son comunes dentro de Google.

Y ese es el momento en que se está diseñando, realmente había tres idiomas que eran clave.

El primero es Python, luego Java y luego C y C++.

Ahora, cada uno de estos lenguajes en sí mismo es muy poderoso.

Sin embargo, los diseñadores de go comenzaron a reconocer que había algunas limitaciones con las que se estaba topando Google, que tal vez no pudieran solucionarse, dada la historia y los diseños de los lenguajes existentes.

Entonces, por ejemplo, cuando observamos Python, Python es muy fácil de usar, pero es un lenguaje interpretado.

Y por lo que puede ser un poco difícil ejecutar aplicaciones a escala de Google que se basan en Python, sin duda puede suceder.

Pero ese es uno de los desafíos que puede encontrar en implementaciones de Python muy grandes.

Java es muy rápido, pero su sistema de tipos se ha vuelto cada vez más complejo con el tiempo.

Ahora bien, esta es una tendencia natural por la que pasan muchos idiomas.

Comienzan de manera muy simple, pero tiene casos de uso adicionales y características adicionales están superpuestas en el lenguaje, se vuelve cada vez más difícil navegar por las cosas C y c ++ también es rápido.

Sin embargo, adolece de un sistema de tipo complejo.

Y además, sus tiempos de compilación son notoriamente lentos.

Ahora, el sistema de tipos ha estado recibiendo mucha atención últimamente en las comunidades de C y c++.

Sin embargo, todavía tienen la carga de tener que administrar todo ese código heredado.

Y tan similar a Java, es muy difícil para ellos superar el historial que tienen, porque las aplicaciones C++ escritas hace 10 años aún necesitan compilarse hoy.

Y los tiempos de compilación lentos son otro problema heredado que C y c++ también han heredado.

Cuando se diseñaron C y c ++, las computadoras no tenían tanta memoria como hoy.

Entonces se tomó la decisión de optimizar los compiladores para usar una cantidad mínima de memoria.

Y uno de los compromisos que eso provocó fue que los tiempos de compilación pueden ser un poco lentos.

Además, estos tres lenguajes se crearon en una época en la que las aplicaciones de subprocesos múltiples eran extremadamente raras.

Casi todas las aplicaciones que se crearon realmente tenían que centrarse en un solo hilo a la vez.

Por lo tanto, los patrones de concurrencia integrados en estos lenguajes están parcheados en el mejor de los casos.

Y, por lo tanto, trabajar en aplicaciones altamente paralelas y concurrentes, como Google, a menudo se encuentra, puede ser un poco desafiante cuando se trabaja en estos tres idiomas.

Entonces ingrese go, ¿Qué aporta go a la fiesta para abordar algunas de estas preocupaciones? Bueno, lo primero que debemos entender es gozi, un lenguaje fuerte y de tipado estático, por lo que hereda el mismo conjunto de funciones de Java y C++.

Entonces, ¿qué queremos decir con tipado fuerte y estático con tipado fuerte significa que el tipo de una variable no puede cambiar con el tiempo?

Entonces, cuando declaras una variable a para que contenga un número entero, siempre va a contener un número entero, no puedes ponerle un valor booleano, no puedes ponerle una cadena.

Y la escritura estática significa que todas esas variables deben definirse en tiempo de compilación.

Ahora, ¿hay formas de evitar eso? Sí, go tiene características que le permiten sortear su sistema de tipos, pero el 99% del tiempo, vivirá en un mundo que es fuerte y estático.

Y obtener todos los beneficios que vienen con eso.

Ahora, si proviene de lenguajes como Java, es posible que le preocupe un poco que los lenguajes fuertes y de tipado estático tiendan a ser un poco detallados.

Bueno, veremos a medida que nos adentramos en la sintaxis de go, cómo se ha realizado un gran esfuerzo para que el compilador haga tanto trabajo para comprender de qué está hablando con una variable.

Por lo tanto, no tiene que explicarle al compilador cada vez cuáles son sus tipos de variables y cosas por el estilo.

Además, go como muchos idiomas recientes tiene un fuerte enfoque en la comunidad que lo apoya.

El hecho de que go sea un idioma excelente no garantiza el éxito.

Debido a que hay tantos lenguajes por ahí, puede resultar difícil para un nuevo desarrollador avanzar en cualquiera.

Como resultado, se ha creado una comunidad fuerte alrededor de go que está realmente enfocada en asegurarse de que el lenguaje go siga avanzando, y que a los nuevos desarrolladores les resulte más fácil avanzar en el lenguaje.

Entonces, ¿cuáles son algunas de las características clave del lenguaje en sí? Una de las primeras y yo diría que las características más importantes que tiene go es el reconocimiento de que la simplicidad es una característica.

Entonces, a medida que avancemos y comencemos a aprender sobre el lenguaje go, se encontrará con algunas características y se preguntará: Bueno, ¿por qué no existe esto? ¿O por qué no tenemos esa función? Y muchas de las razones Vuelve a esta función.

Hay un reconocimiento de que si el lenguaje go reconoce que la simplicidad es importante, eso significa que tendremos que decidir dejar de lado algunas otras funciones que podrían ser muy útiles, pero que agregarían complejidad al lenguaje.

Además, go se enfoca en tiempos de compilación extremadamente rápidos en muchos entornos de desarrollo modernos para escribir código rápido para construirlo rápido y probarlo rápido y enviar comentarios al desarrollador lo más rápido posible.

Bueno, si tiene un tiempo de compilación de 45 minutos, rompe ese ciclo.

Y a los desarrolladores les resulta muy difícil permanecer en ese bucle de prueba de construcción de diseño.

Y así, go se enfoca en mantener esos tiempos de compilación bajos, aunque al final nos dará binarios completamente compilados, go como un lenguaje de recolección de basura, lo que significa que no tendrá que administrar su propia memoria.

Ahora puedes administrar tu propia memoria.

Pero, en general, el tiempo de ejecución go se encargará de eso por usted.

Y la razón de eso vuelve a este argumento de simplicidad, hay un reconocimiento de que un lenguaje de recolección de basura tiene desafíos cuando se trata de ciertos casos de uso.

Por ejemplo, los sistemas de negociación en tiempo real para los sistemas del mercado de valores tienen dificultades cuando se trata de la recolección de basura.

Sin embargo, las ventajas para el desarrollador de no tener que administrar su propia memoria todo el tiempo se consideraron más importantes.

Ahora bien, eso no significa que no se haya prestado atención a los retrasos en los que incurre un recolector de elementos no utilizados; si revisa la historia del lenguaje go, verá que las últimas versiones han puesto un gran énfasis en reduciendo la cantidad de tiempo que la aplicación tiene que pausar durante un ciclo de recolección de basura.

Y en este punto, en realidad son muy rápidos, casi hasta el punto de que no sabes que ocurrió una recolección de basura, para abordar esa preocupación de concurrencia, go tiene primitivas de concurrencia integradas en el lenguaje.

Y hablaremos de eso a medida que avancemos en algunos de estos videos.

Pero en lugar de tener una biblioteca que tendremos que importar, para poder trabajar con concurrencia, podremos hacer desarrollo concurrente allí mismo en el lenguaje base.

Finalmente, go compila en una biblioteca independiente, lo que significa que cuando compila su aplicación go, todo se agrupará en ese binario único que está relacionado con la aplicación go en sí.

Entonces, el tiempo de ejecución go se incluirá allí, cualquier biblioteca de la que dependa, se compilará allí.

Por lo tanto, no tiene que preocuparse por buscar bibliotecas externas y archivos DLL y cosas por el estilo para que su aplicación funcione.

Y lo que eso le brinda es que la administración de versiones en tiempo de ejecución se vuelve trivial.

Debido a que simplemente tiene un binario, implementa ese binario, lo ejecuta y todas sus dependencias están allí.

Ahora tenga en cuenta que cuando digo dependencias, me refiero a las dependencias, si va a crear una aplicación web que tenga HTML, recursos y CSS, deben incluirse junto con el binario, pero el binario en sí es independiente y autónomo.

Bien, lo siguiente que me gustaría hacer es mostrarle algunos de los recursos que están disponibles para usted, a medida que comienza a explorar el lenguaje go.

Uno de los recursos más útiles que podrá aprovechar a medida que avanza, es el sitio web de go here@golang.org.

Ahora, ¿por qué es go lang.org? Bueno, si te tomas un minuto para pensar en un idioma llamado go, eso realmente no se presta a resultados de búsqueda únicos en Google o Bing.

Así que go lang.org es, de hecho, muchos lugares que ves que go mencionan, verás que en realidad se describen como go Lang, porque eso lo hace un poco más único cuando buscas para los resultados de búsqueda.

Entonces, lo primero que puede notar, a medida que ingresamos a la página de inicio aquí, es que en realidad no está diseñada como muchas de las páginas de inicio tradicionales.

Esto, en mi opinión, es en gran medida una página de inicio de ingeniería.

Entonces, en lugar de una gran cantidad de estética de diseño, esto se dirige directamente a los aspectos de ingeniería y le muestra cómo comenzar a trabajar con el lenguaje.

Entonces, este cuadro amarillo de aquí será su punto de entrada para su primera aplicación.

Entonces, si seguimos adelante y hacemos clic en este botón ejecutar, verá que casi instantáneamente recibimos una aplicación enviada de regreso al servidor, se compila y se ejecuta para nosotros.

Entonces podemos comenzar a jugar con el código go sin instalar nada en nuestras máquinas locales.

Y en realidad vamos a aprovechar eso a través de estos primeros videos.

De hecho, si hago un pequeño cambio aquí, tal vez si digo Hola, gente de YouTube y lo vuelvo a ejecutar, entonces les estoy diciendo hola a todos, así que hola.

Entonces es tan simple como eso para comenzar con el programa go.

Junto a esa ventana, vemos este botón GO de descarga.

Y eso lo llevará a los recursos que podrá usar para descargar los últimos binarios de go, así como descargar versiones anteriores del tiempo de ejecución.

Y si hay una versión no publicada, por ejemplo, en el momento en que estoy grabando este go 1.8 está en RC dos, puede seguir adelante y descargarlo, instalarlo y verificar que no haya errores y jugar con nuevas funciones en el idioma.

Si nos encontramos en la parte superior, vemos este enlace de documentos aquí.

Y este será otro recurso crítico a medida que comience con el idioma.

De hecho, volverá a consultar esta página con bastante frecuencia.

Pero si realmente quiere recorrer el sitio web, haga un recorrido por los idiomas de Go, y le recomendaría que vaya a este enlace de Introducción.

Esto lo ayudará a comenzar a descargar e instalar los compiladores y herramientas go y cosas por el estilo.

Y puede ver mientras navegamos allí, le mostrará las diferentes arquitecturas que podrá usar con go y hay bastantes y cómo comenzar con cada una de ellas.

Si continuamos, el recorrido de go es una especie de introducción al lenguaje go que lo lleva a través de una introducción gradual.

Así que va a comenzar con algo muy simple de Apple. Y luego se desarrollará más y más y lo ayudará a comprender lo que sucede con la simultaneidad y cosas por el estilo.

Go efectivo es un artículo muy útil, especialmente cuando comienzas a madurar en tu comprensión del lenguaje y realmente entiendes cómo se usa el lenguaje go.

Así que te animo a que ahondes en que es una lectura bastante larga.

Pero debe considerar esta lectura obligatoria si realmente va a comenzar a crear aplicaciones go no triviales.

Pero no nos vamos a preocupar por eso ahora.

Tenemos mucho camino por recorrer antes de que tengamos que superar todo esto.

Y luego aquí en la parte inferior hay información de referencia.

Esta es una documentación más avanzada que probablemente no necesitará de inmediato.

Pero, por ejemplo, la documentación del comando le brinda mucha información sobre la herramienta go en sí misma que va a usar para el desarrollo local con go, hay muchas cosas que hace el programa go.

Y esto te ayudará a entender cómo navegar por eso.

El enlace de los paquetes es quizás donde paso más tiempo en el sitio web de Gos.

Y esto le brinda documentación para todas las bibliotecas integradas en go.

Entonces, cuando instala go e instala los binarios y las herramientas de go, tendrá todas estas bibliotecas disponibles para usted.

Tan solo escaneando hacia abajo, puede ver que tenemos diferentes bibliotecas que están destinadas a trabajar con archivos, tenemos algunas bibliotecas de criptografía, controladores de bases de datos, continuando hacia abajo, tenemos algunas cosas para trabajar con HTML, y tráfico de red.

Ahora, algunas cosas que puede encontrar que faltan aquí son que no tenemos ninguna biblioteca GUI.

Esto se debe a que, en este momento, go realmente no se centra en el caso de uso del desarrollo de aplicaciones cliente.

Así que go está realmente dirigido a la creación de servidores y aplicaciones web.

Y ahí es donde se centrarán muchas de las bibliotecas.

Hay algunos proyectos que están trabajando en aplicaciones móviles que usan go, así como en aplicaciones del lado del cliente que usan go, pero no son oficialmente compatibles en este momento.

Si vamos al enlace del proyecto, encontraremos información sobre la historia del proyecto, qué lanzamientos han salido y cuándo, así como algunos enlaces a listas de correo y recursos que puede aprovechar.

Si desea realizar un seguimiento del desarrollo de go como idioma y si encuentra un problema en el idioma go, puede ver información aquí sobre cómo informar ese problema.

Y luego tenemos el vínculo Ayuda aquí.

Y este será uno de sus enlaces más importantes a medida que comience aquí porque será su acceso a la comunidad.

Ahora, según mi experiencia, los dos más activos son el foro go, que es un buen foro de discusión que le permite publicar sus preguntas y hacer que la gente responda.

Pero si desea algo un poco más en tiempo real, Gopher Slack es un canal de Slack específicamente dirigido al desarrollo de ONG.

Y hay múltiples subcanales para nuevos desarrolladores para desarrolladores de bibliotecas.

Incluso muchos de los grupos de reuniones de ONG tienen sus propios subcanales en Gopher Slack.

Entonces, si desea tomar la holgura de Gopher, lo animo a que venga a otro sitio web llamado Go Lang Bridge.

Y esto es lo que considero la rampa de acceso a la comunidad de ONG.

Porque la ONG Lang bridge está específicamente allí para abogar por el idioma go y para asegurarse de que la comunidad sea saludable y fuerte.

Como dije, uno de los aspectos clave del lenguaje go es centrarse en tener una comunidad excelente.

Y realmente, es Go Lang Bridge y la increíble gente que lo apoya, lo que está haciendo que eso suceda.

Entonces, si se desplaza un poco hacia abajo, puede ver algunos enlaces a las comunidades en línea.

Si desea unirse al canal de Slack, debe recibir una invitación.

Entonces, este enlace lo llevará al foro que le permitirá obtener esa invitación.

Y no hay problema en recibir la invitación, lo único que te pidieron es leer las pautas de la comunidad, hay un código de conducta que solo asegura que todos sean tratados con respeto en la comunidad, solo para asegurarse de que Todos estamos aquí tratando de ayudarnos unos a otros.

Y lo último que quiero mostrarles en el sitio web es este enlace de juego aquí.

Ahora este enlace simplemente sale volando de un editor.

Y esto es realmente bueno, porque está disponible en todo el sitio.

Entonces, si llego a los paquetes, y digamos que me sumerjo en el paquete de red, y estoy aprendiendo sobre alguna función de red, entonces puedo continuar y entrar en el juego, puedo crear una prueba de concepto realmente rápida. aplicación para asegurarme de que entiendo cómo funciona.

Y nuevamente, tal como vimos en esa página de inicio, si hago clic en Ejecutar, puedo seguir adelante y ejecutarlo.

Ahora hay algunas limitaciones, obviamente, esta aplicación se envía al back-end.

Y hay algunas limitaciones, por ejemplo, no podrá leer el sistema de archivos en el back-end.

Pero muchas de las cosas con las que quieres jugar, puedes jugar en este entorno en línea.

Ahora, otro lugar para llegar a este patio de recreo es aquí en play that golang.org.

Y esto es lo último que quiero mostrarles en este video introductorio.

Así que este va a ser el entorno en el que nos vamos a centrar.

Y, de hecho, déjame hacerlo un poco más grande.

Así que tal vez sea un poco más fácil de ver para ti.

Pero este será el entorno en el que nos centraremos a medida que empecemos a aprender el lenguaje go.

Así que vamos a aprender los conceptos básicos de la aplicación go aquí, vamos a empezar a jugar con la forma en que vamos a trabajar con variables, lógica, bucles y cosas por el estilo.

Ahora, eventualmente, llegaremos a instalar un entorno local.

Y ciertamente puede aprovechar los otros recursos en el sitio web de go Lang, si desea llegar allí antes de que cree un video sobre él.

Pero creo que hay mucho de lo que podemos hablar sin comprometernos a establecer un entorno de desarrollo local simplemente pasando por este patio de juegos aquí.

Entonces, si echamos un segundo vistazo a esta aplicación, vemos algunos de los aspectos clave de cualquier programa go.

Y lo primero que ve en la parte superior es este paquete de declaraciones principal.

Cada aplicación go está estructurada en paquetes.

Así que cada archivo go que vaya a tener tendrá que declarar qué paquete es parte de nain es un paquete especial, porque main va a ser el punto de entrada de cualquiera de sus aplicaciones.

Debajo de eso tenemos una declaración de importación.

Y esta es la declaración que vamos a usar para importar bibliotecas adicionales.

Así que esta biblioteca se llama thumped, que sí, en realidad dices eso en la comunidad de ONG, no me atrevo a decir eso.

Así que si lo llamo FMT, espero que me perdonen.

Pero en la comunidad de ONG, a menudo escuchará que esto se llama golpeado.

Y este es el paquete que nos permitirá formatear cadenas.

Así que ven abajo aquí y nuestra función principal, que es el punto de entrada de nuestra aplicación, por lo que la función principal en el paquete principal siempre será el punto de entrada de nuestra aplicación.

Y aquí será donde vamos a contener nuestro primer código que se ejecutará en go.

Así que vamos a llamar a la biblioteca FMT.

Y vamos a sacar su función print ln, y esa función print ln toma un argumento, y ese argumento en este caso es una cadena.

Así que vamos a imprimir Hello playground.

Ahora, si sigo adelante y ejecuto esto, luego abajo en la parte inferior de la pantalla, aquí, verás Hello, playground se imprime.

Y luego dice que el programa salió.

Si tenemos un error en la aplicación, digamos si elimino estas comillas y ejecuto, obtendrá un error del compilador impreso en la parte inferior, eso lo ayudará a depurar su aplicación.

Entonces, estos entornos en línea serán muy buenos para que comiences, porque te ayudarán a comprender lo que está sucediendo.

Entonces, por ejemplo, vemos aquí en la línea ocho, obtuvo un punto y coma inesperado o una nueva línea, cuando en cambio esperaba una coma o un paréntesis.

Y la razón de esto es que este paréntesis de cierre en realidad se convirtió en parte de la cadena.

Entonces, la línea terminó temprano y no tuvo un final para la llamada a la función.

Entonces, si continuamos y volvemos a agregar las comillas y ejecutamos, estamos listos para comenzar.

Y tenemos nuestro primer comienzo en una aplicación go.

Así que espero que esto haya sido útil para usted. Un poco de información sobre un idioma que va a aprender. Siempre encuentro que es un poco valioso, ayuda a comprender las motivaciones para la creación del idioma y las características principales. , con el fin de entender qué problemas ese lenguaje va a tratar de resolver y cómo va a tratar de resolverlos.