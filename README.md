¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?
Se quiere desarrollar una aplicacion en la que despues de autenticarse sea posible ver informacion de temperatura, humedad, latitud y longitud que son enviados desde ciertos sensores que estaran conectados al sistema, asi como la informacion del usuario que los envia.


¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?
REQ-1: El sistema debe perimitir ingresar con un email y una contrasena a usuario que ya se encuentren registrados.
REQ-2: El sistema debe mostrar la informacion enviada por los sensores a los usuarios que se hayan autentificado.
REQ-3: 


¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?
REQNF-1: El sistema debe garantizar la transparencia e integridad de los datos que se encuentren alojados en el sistema.
REQNF-1: El sistema debe garantizar la transparencia e integridad de los datos de los usuario que se logean.
REQNF-1: El sistema debe ser facil de manejar 
REQNF-1: El sistema debe mostrar informacion entendible a los usuarios
REQNF-1: El sistema debe ejecutar cada una de sus funcionalidades en tiempo real.

¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?

4.1 EN EL BACKEND?
Para el desarrollo del backend de utilizo node.js, bajo el framework express, y para la base de datos se uso MongoDB, bajo el manejador mongoose.

4.2 EN EL FRONTEND?
En el frontend se uso react.js 


¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?
los metodos del backend son: 
Para los datos que son enviados por el sensor:
POST http://localhost:8000/inicio este metodo permite anadir nuevos datos sobre el sensor
GET http://localhost:8000/inicio // Este metodo permite adquirir los datos relacionados con los sensores que estan almacenados en la base de datos.
GET http://localhost:8000/:id // Este metodo permite adquirir el dato con el id especificado.

Para los datos relacionados con el usuario y su autenticacion
POST http://localhost:8000/login  //Este metodo valida los datos del usuario que son enviados desde la ventana de la autenticacion, y devuelve el jwt respectivo.


¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?
Por medio de un login que recibe correo y contrasena. la contrasena la maneje con jwt para evitar que fuera visible ante cualquiera, lo que me permitio encriptarla y manejarla dentro del sistema. Ademas, despues de validar los datos el sistema lo redirije a la pagina perfil o simplemente no hace nada.


¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?
7.1 POR DESCONOCIMIENTO DE LA TECNOLOGÍA?
Son un muy pocos los proyectos que he realizado bajo estas tecnologias, por lo que tenia un conocimiento muy limitado . Esto me dificulto muchisimo el desarrollo del proyecto pues era muy dificil avanzar y realizar exactamente lo que yo deseaba hacer. Aunque el producto final no quedo realmente como esperaba, si pude avanzar y desarrollar varias funcionaidades.

7.2 ¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?
Respecto a la autenticacion conocia muy poco, igual que lo relacionado con la encriptacion de contrasenas, por lo que fue una de las partes que mas problemas me trajoo.

7.3 ¿QUÉ HABILIDADES DE DESARROLLO LE FALTAN PARA PODER TERMINAR EL PROYECTO?
El conocimiento de muchos de los componentes necesarios a la hora de realizar paginas web, asociacion de lo que quiero hacer con lo que llevo hecho.

7.4 ¿QUÉ OTRAS COSAS LE FALTÓ PARA PODER DESARROLLAR EL PROYECTO 1?
El manejo de los jwt, respecto a la finalizacion de sesion, y poner mensajes de falla cuando hay problemas en la pagina

¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?
TODO, desde el uso de las tecnologias hasta el desarrollo desintegrado del back y el front fue un aprendizaje para mi. ME parecio supremamente interesante y aunque la fecha de la entrega ya paso seguire trabajando sibre este proyecto hasta aplicar todas las cosas que desde uun principio quise aplicar.

