# Proyecto AngularJS + SASS + Grunt
Bases de inicio de un proyecto web basado en AngularJS (v1.6.4), SASS y Grunt (v.1.0.1).

AngularJS: incluye los módulos ngAnimate, ngAria y ngRoute. Para incluir otros módulos, consulte [Incluir módulos de AngularJS](#incluir-módulos-de-angularjs).

Grunt: incluye los plugins Copy, Sass, Uglify, Watch y FTP-Push. Para incluir otros plugins, consulte [Incluir plugins de Grunt](#incluir-plugins-de-grunt).

## Pre-requisitos

El sistema sobre el que piensa usar este proyecto base debe tener instalado el [Administrador de Paquetes de Node.js](https://nodejs.org/es/), ```npm```.

## Proceso de instalación

1. Clone este repositorio en la carpeta de su proyecto. Esa carpeta **debe** estar vacía.
```sh
git clone https://github.com/ocastelblanco/base-ng.scss.grunt.git ./
```

2. Modifique los valores de los objetos `name`, `author`, `description` en `package.json`; igualmente, las rutas al repositorio, sitio de seguimiento de errores y homepage, y, finalmente, las palabras clave de su proyecto.
```json
"name": "XXXXXXX",
"author": "XXXXXXXX",
"description": "XXXXXXX",
"repository": {
    "type": "git",
    "url": "git+https://github.com/XXXXXXXXX"
},
"keywords": [
    "XXXXXXXXX",
    "YYYYYY"
],
"bugs": {
    "url": "https://github.com/XXXXXXXXX/issues"
},
  "homepage": "https://github.com/XXXXXXXXXX/#readme"
```

3. Instale los módulos por defecto y sus dependencias.
```sh
npm install
```

4. Minimice (uglify) y copie a sus directorios respectivos las primeras versiones de las hojas de estilo y archivos de JavaScript.
```sh
grunt actualizar
```

5. Personalice los archivos de base; modifique el archivo `/dist/index.html` con el `<title>` deseado. Igualmente, reemplace los archivos de favicon en `/dist/favicon.ico` y `/dist/assets/img/favicon.png` por sus favicon propios. Finalmente, personalice completamente el archivo `/README.md` con la descripción de su proyecto.

## Distribución de archivos

Luego de iniciada la aplicación, encontrará los siguientes archivos:

```
├── dist/ (carpeta de publicación final)
|   ├── assets/
|   |   ├── css/
|   |   |   ├── app.min.css (CSS final, creado automáticamente)
|   |   |   ├── app.min.css.map (creado automáticamente)
|   |   ├── img/
|   |   |   ├── favicon.png (favicon de 128px x 128px. Debe ser reemplazado)
|   |   ├── js/
|   |   |   ├── angular.min.js (AngularJS)
|   |   |   ├── angular.animate.min.js (ngAnimate)
|   |   |   ├── angular.aria.min.js (ngAria)
|   |   |   ├── angular.route.min.js (ngRoute)
|   |   ├── views/ (carpeta de vistas; todas deberían crearse y modificarse en esta carpeta)
|   |       ├── contenedor.html (Vista incial por defecto. Debe modificarse acá mismo)
|   ├── favicon.ico (favicon de 16px x 16px. Debe ser reemplazado)
|   ├── index.html (HTML principal. Todos los enlaces a nuevos CSS o JS deben hacerse acá)
|   ├── modules.min.js (módulo principal y controladores AngularJS. Se crea automáticamente)
|   ├── route.min.js (enrutador principal. Se crea automáticamente)
|   ├── node_modules/ (carpeta que crea `npm` para almacenar los módulos utilizados. No debe ser modificada)
|   |   ├── ...
|   ├── src/ (carpeta de archivos JS y SASS fuente)
|       ├── js/
|       |   ├── modules.js (módulo y controladores AngularJS. Deben ser modificados acá)
|       |   ├── route.js (enrutador principal. Debe ser modificado acá)
|       ├── sass/
|       |   ├── app/
|       |       ├── _app.scss (archivo principal de hoja de estilo en formato SCSS)
|       ├── app.scss (archivo principal que incluye los estilos aplicados en el sitio)
├── gruntfile.js (archivo de comandos Grunt. Debe modificarse si se incluyen nuevos módulos o fuentes SASS)
├── package.json (archivo de descripción y dependencias para `npm`)
├── README.md (archivo de presentación del proyecto)
```

## Construcción de la aplicación

Los archivos que se deben publicar están alojados en la carpeta `/dist`. En la carpeta `/src` encontrará los archivos SCSS y JS fuentes.

Para iniciar la construcción de la aplicación, lance el sistema de automatización de tareas con el comando `grunt`. El sistema iniciará el seguimiento de los archivos presentes en las carpetas `/src/sass` y `/src/js` de tal manera cualquier cambio que realice sobre los mismos se minimizará y guardará automáticamente en las carpetas correspondientes de `/dist`.

La vista que se carga por defecto es la `/dist/views/contenedor.html` que, automáticamente, llama al controlador `'contenedor'`en `modules.js`.

## Extender la aplicación

### Incluir módulos de AngularJS
`En construcción`

### Incluir plugins de Grunt
`En construcción`
