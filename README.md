# Proyecto final: RRHH System

## Descripción

Este proyecto cubre las necesidades de un sistema de reclutamiento, donde un administrador puede agregar posiciones y usuarios (candidatos) puede aplicar a dichas posiciones. Además, el sistema facilita la organización de los datos a través de filtros de búsqueda y ordenamiento.

### Especificaciones técnicas

Para el desarrollo de este proyecto de han utilizados las siguientes tecnologías:

#### Backend

- Node.js
- Express
- Mongoose

#### Persistencia

- MongoDB

#### Frontend

- Angular 10

#### Seguridad

- JWT (Jason Web Token)

#### Infraestructura en código

- Docker (con el fín de crear un contenedor del servidor de base de datos MongoDB)

## Documentación

### Paso 1

Se deben instalar las dependencias de ambos proyectos, para ello, desde la terminal navegamos a los diferentes dictorios y escribimos el comando ` npm install`.

**NOTA**: El sistema operativo donde se vaya a probar debe tener Node.js instalado, así también como el CLI de Angular.

- [Descargar Node.js](https://nodejs.org/es/)
- [Descargar Angular](https://cli.angular.io/)

Luego:

```shell
cd backend; npm install;
cd frontend; npm install;
```

### Paso 2

Se deben echar a andar ambos proyectos:

```shell
cd backend; npm start;
cd frontend; ng serve;
```

### Paso 3

Navegar al la ruta: `http://localhost:4200` que es la ruta por defecto de una aplicación Angular.

## Autor

- Nombre: Rosalía Arias
- Matrícula: 2018-2145
