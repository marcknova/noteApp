# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# noteApp

Aplicacion de notas que cumple con los siguientes parametros

Crear una aplicación de notas con las siguientes funcionalidades:
  - Inicio de sesión de usuarios: el usuario y contraseña son los siguientes : 
    Usuario : usuario2@prueba.com  // este usuario tiene dos tareas agregadas pueden ser editadas o eliminadas
    contraseña : usuario2
    Usuario : usuario1@prueba.com
    contraseña : usuario1
 1. Inicio de sesión de usuarios existentes con usuario y contraseña.
    El login se realizo con fireauthentication 
  - Pantalla principal con listado de notas:
    //Pantalla que muestra las notas y un boton para agregar notas nuevas 
 1. Mostrar las notas del usuario actual en una lista.
    tiene una funcion que permite en tiempo real agregar o eliminar notas de firestore
  - Funcionalidad para crear, editar y eliminar notas:
    cada una de las funcionalidades esta incluida 
 1. Crear nuevas notas con título y contenido.
    el formulario de nota tiene titulo y descripcion
 3. Editar notas existentes.
 4. Eliminar notas.
  - Persistencia de notas por usuario:
 1. Guardar las notas en una base de datos local
    se tomo la idea de hacerlo en firebase y firestore

para correr la aplicacion simplemente clone el repositorio 
y ejecute npm install dentro de la carpeta y ejecute npm run dev
