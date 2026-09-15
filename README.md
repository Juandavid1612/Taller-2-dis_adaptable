# 🎮 Retro Gaming Fest

Landing page desarrollada como proyecto académico para representar un festival dedicado a los videojuegos retro, arcades y cultura gamer.

El proyecto fue construido a partir de wireframes realizados manualmente y posteriormente transformado en una interfaz web responsive utilizando React, Vite y Tailwind CSS.

🌐 **Sitio web:**  
https://juandavid1612.github.io/Taller-2-dis_adaptable/

---

## 📌 Descripción del proyecto

**Retro Gaming Fest** es una landing page conceptual para un festival de videojuegos clásicos.

El objetivo principal del proyecto es transformar una idea inicial representada mediante wireframes manuales en una página web funcional, visualmente atractiva y adaptable a diferentes tamaños de pantalla.

La página busca transmitir una estética inspirada en los arcades clásicos y los videojuegos retro mediante:

- Colores neón.
- Fondos oscuros.
- Tarjetas con bordes y efectos de interacción.
- Imágenes relacionadas con máquinas arcade.
- Tipografía llamativa.
- Animaciones y efectos de hover.
- Diseño adaptable para computador y dispositivos móviles.

---

## 🎯 Objetivos

El proyecto fue desarrollado con los siguientes objetivos:

1. Diseñar una landing page a partir de wireframes realizados manualmente.
2. Aplicar los conceptos de diseño adaptable o responsive design.
3. Crear el proyecto utilizando Vite y React.
4. Implementar los estilos utilizando Tailwind CSS.
5. Organizar el contenido en cinco secciones principales.
6. Crear una navegación mediante un menú superior.
7. Incorporar imágenes y elementos visuales relacionados con la temática retro.
8. Publicar el resultado final utilizando GitHub Pages.

---

## 🧩 Estructura de la página

La landing page está dividida en cinco secciones principales, además de un header y un footer.

### 1. Inicio

La sección principal funciona como presentación del festival.

Incluye:

- Nombre del evento.
- Mensaje principal.
- Descripción breve.
- Imagen de fondo temática.
- Botón para explorar el contenido del festival.

El objetivo de esta sección es captar la atención del usuario desde el primer momento.

---

### 2. Juegos y actividades

Esta sección presenta las principales experiencias disponibles en el festival.

Se divide en cuatro tarjetas:

- **Classic Games**
- **Tournaments**
- **Panels**
- **Arcade Hall**

Cada tarjeta contiene:

- Imagen.
- Nombre de la actividad.
- Descripción.
- Efectos visuales al pasar el cursor.

La distribución utiliza un sistema de cuadrícula que permite adaptar el contenido dependiendo del tamaño de la pantalla.

---

### 3. Pases

Esta sección presenta diferentes opciones de entrada al evento.

Se diseñaron tres tipos de pases:

#### Básico

Incluye acceso general y algunas actividades del festival.

#### Pro

Incluye acceso general, arcade, torneos y paneles.

#### VIP

Incluye todas las experiencias disponibles junto con beneficios adicionales.

Esta sección utiliza tarjetas diferenciadas visualmente para facilitar la comparación entre las opciones.

---

### 4. Ubicación

La sección de ubicación contiene información relacionada con el lugar del evento.

Incluye:

- Lugar del evento.
- Ciudad.
- Dirección.
- Horarios.
- Botón de acceso a información de ubicación.
- Espacio visual destinado al mapa.

Para este proyecto, la información utilizada tiene carácter conceptual y forma parte de la propuesta visual del festival.

---

### 5. Galería

La última sección presenta una colección de imágenes relacionadas con el ambiente del festival y los videojuegos arcade.

La galería utiliza una cuadrícula adaptable para mostrar las imágenes de forma organizada.

Las imágenes cuentan además con efectos visuales al pasar el cursor para aumentar la interacción del usuario.

---

## 🧭 Header y navegación

El sitio cuenta con un header ubicado en la parte superior de la página.

El menú contiene enlaces a:

- Inicio
- Juegos
- Pases
- Ubicación
- Galería

Cada opción utiliza enlaces internos mediante identificadores HTML (`id`) para desplazarse hacia la sección correspondiente.

También se implementó un efecto de desplazamiento suave entre secciones.

---

## 🦶 Footer

El footer contiene:

- Nombre del festival.
- Descripción breve.
- Enlaces de navegación.
- Redes sociales representativas.
- Información de derechos de autor.

Su propósito es cerrar visualmente la landing page y facilitar nuevamente el acceso a las distintas secciones.

---

# 🛠️ Tecnologías utilizadas

## Vite

Vite fue utilizado como herramienta de construcción y desarrollo del proyecto.

Permite:

- Crear rápidamente el entorno de desarrollo.
- Ejecutar la aplicación localmente.
- Realizar compilaciones para producción.
- Preparar el proyecto para su publicación.

---

## React

React fue utilizado para construir la interfaz de usuario.

La estructura principal de la página se encuentra dentro de `App.jsx`, donde se organizan:

- Header.
- Sección de inicio.
- Juegos y actividades.
- Pases.
- Ubicación.
- Galería.
- Footer.

---

## Tailwind CSS

Tailwind CSS fue utilizado para desarrollar los estilos visuales de la página.

Se utilizaron clases utilitarias para trabajar con:

- Colores.
- Espaciados.
- Tamaños.
- Tipografía.
- Bordes.
- Sombras.
- Layouts.
- Responsive design.
- Estados `hover`.

Esto permitió construir la interfaz directamente desde los componentes de React sin necesidad de crear grandes cantidades de CSS personalizado.

---

## JavaScript

JavaScript es utilizado junto con React para definir la estructura y comportamiento de la aplicación.

---

## Git y GitHub

Git fue utilizado para llevar el control de versiones del proyecto.

GitHub se utilizó como repositorio remoto para almacenar y compartir el código fuente.

---

## GitHub Pages

El sitio fue publicado utilizando GitHub Pages.

La versión desplegada puede visitarse en:

**https://juandavid1612.github.io/Taller-2-dis_adaptable/**

---

# 📁 Estructura del proyecto

La estructura principal del proyecto es:

```text
Taller-2-dis_adaptable/
│
├── public/
│   └── images/
│       ├── hero.jpg
│       ├── classic-games.jpg
│       ├── tournaments.jpg
│       ├── panels.jpg
│       ├── arcade-hall.jpg
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       └── gallery-4.jpg
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
