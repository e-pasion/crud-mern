como instalar
1. npm init -y
2. crear el index.js
3. ir al package.json y poner "type":"module"
4. instalar dependencias necesarias con npm install
 * Dependencies
 - express: es un framework de node y es para crear un servidor 
 - bcryptjs: es para encriptar, leer y desencriptar informacion
 - cookie-parser: para generar y convertir las cookies en jsons
 - cors: es para la seguridad en las peticiones que se realicen
 - dotenv: para traer variables de entorno como la de mongoDB
 - jsonwebtoken: es para leer y generar tokens de seguridad
 - mongoose: es para trabajar con mongoDB en el proyecto
 - morgan: seguimiento de las solicitudes HTTP
 - zod: para gestionar los errores 

 * DevDependencias
 - nodemon: se suele usar para que cada que haya un cambio en el servidor y este se guarde el servidor se vuelva a ejecutar, esto solo se usa en el desarrollo de la aplicacion

 5. añadir el script "dev": "nodemon src/app.js"
 6. podemos empezar a crear los modelos, y creamos la carpeta models en src
 7. luego podemos realizar la concexion en el mongoDB, creamos un archivo env para guardar la variable de entorno por ejemplo "variables.env"
 8. despues de crear la variable de entorno creamos una carpeta llamada "config" la cual es para crear las conficuraciones de la conexion con la base de datos, dentro de esta carpeta podemos crear un archivo llamado "db.js" y realizar la conexion
 9. luego llamo la coneccion de db.js al app.js para que se ejecute apenas inicie el servidor
 10. luego podemos crear la carpeta de routes donde guardaremos las rutas delos models, se puede llamar "recipe.route.js" por ejemplo
 11. luego importamos las rutas al app y creamos las rutas que tendran por defecto junto con la ruta del puerto.
 12. generamos los verbos http "get, post, put, delete"
 13. ahora crearemos la carpeta "controllers" para generar los contraladores de cada ruta 