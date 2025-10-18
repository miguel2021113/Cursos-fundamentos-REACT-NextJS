# Fundamentos de React, Next.js, Prisma y Vercel

## Primer Curso: Fundamentos de React y NextJS

Este curso fue introductorio, y me permitió comprender muchos conceptos básicos. Además, repasé material que me ayudó a recordar aspectos muy necesarios y que me dieron una nueva visión para generar código de mejor calidad.

Se abordaron diferentes puntos de vista, tanto teóricos como prácticos, especialmente al comprender la manipulación del DOM, mostrando cómo se visualiza dentro de los navegadores y cómo se generan nuevos nodos al realizar manipulaciones.

Por ejemplo, insertando contenido mediante funciones y métodos de JavaScript, se mostró cómo, a través de funciones, se podía generar nuevo contenido HTML e insertarlo usando el método `appendChild()`. Sin embargo, al final se explicó que esta no es la mejor forma, ya que también se presentaron métodos modernos de manipulación del DOM, como el uso de las funciones `createRoot()` y `root.render()`, las cuales permiten generar una raíz en lugar de insertar el contenido uno por uno. Esto demuestra formas más eficientes y modernas de renderizar código.

También se abordó cómo aplicar la modularidad de forma correcta para no afectar el resto del código, además de buenas prácticas como anidar componentes, usar correctamente los props para el manejo de datos y aprovechar algunos hooks. Por ejemplo, con `useState`, se mostró cómo generar un botón de "likes", entendiendo su función y los parámetros utilizados para manejar estados y actualizar valores conforme estos se incrementaban.
```javascript
const [likes, setLikes] = React.useState();

// likes -> Valor actual  
// setLikes -> Valor actualizado
```

## Segundo Curso: Fundamentos de la Arquitectura

Este fue mi curso favorito de los tres, ya que me gustó aprender formas de generar una arquitectura más profesional y limpia.

Además, descubrí funcionalidades muy útiles que desconocía, como la posibilidad de crear archivos o carpetas privadas (no accesibles públicamente) simplemente agregando un guion bajo al inicio del nombre. Por ejemplo:

`_Auth` → Carpeta privada para la API de autenticación.

También se mostraron distintos tipos de manejo de rutas, tanto por archivos como de manera dinámica mediante el uso de slots. Por ejemplo:

`[id].jsx` → Archivo basado en enrutamiento dinámico.

Ejemplo de cómo se vería en el path:
```
pages/p/[id].jsx -> /p/123
pages/api/post/[id].js -> /api/post/123
```

Se abordó también la agrupación de páginas simultáneas mediante paréntesis:

`(auth)` → Agrupación para rutas relacionadas con autenticación.

Además, se explicaron las solicitudes HTTP utilizadas para extraer o enviar datos, como GET, POST, PUT y DELETE.

Otro punto importante fue la creación de estilos CSS mediante módulos, lo que hace el código más limpio y organizado:
```javascript
className={style.name}
```

## Tercer Curso: Implementación con Vercel, NextJS y Prisma

El uso de Prisma y Vercel me pareció muy interesante, ya que son tecnologías que antes no conocía. En este curso noté el uso de buenas prácticas, así como la forma en que se generan las páginas y los componentes, aplicando correctamente los tipos de enrutamiento (como el dinámico), la arquitectura del sistema, la implementación del manejo de usuarios y el despliegue de las APIs.

También aprendí qué tipos de archivos no deben ser públicos y cómo generar conexiones con la base de datos mediante los scripts de Prisma.

**Nota:** Este curso fue el más desafiante. Tuve que hacer mucho debugging, ya que hubo varios errores al intentar establecer la conexión con la base de datos.
