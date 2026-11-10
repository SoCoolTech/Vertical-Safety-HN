# Vertical Safety — sitio multipágina (GitHub Pages)

Sitio estático responsive con seis páginas independientes: Inicio, Nosotros, Servicios, Capacitaciones, Marcas y Contacto.

## Publicación
1. Descarga y descomprime el ZIP.
2. Sube **el contenido** de `vertical_safety_hn_site/` a la raíz del repositorio GitHub (deben quedar `index.html`, `styles.css`, `site.js`, `app.js` y `assets/` en la raíz).
3. En GitHub abre Settings → Pages.
4. Selecciona Deploy from a branch, rama `main`, carpeta `/ (root)`.
5. Guarda y espera el despliegue.

No requiere Node, compilación, framework ni configuración de rutas del servidor. Los enlaces entre páginas son relativos para funcionar en `usuario.github.io/repositorio/`.

## Convención de código
- JavaScript: variables, funciones y parámetros con prefijo `verticalSafety`.
- CSS: clases `vshn-` y variables `--vshn-`.
- Atributos personalizados: `data-vshn-`.

## Contacto Honduras
- WhatsApp: +504 9693-9045.
- Correo: ventashonduras@verticalsafetyes.com.
- El formulario prepara un mensaje y abre WhatsApp; no almacena ni envía datos a un servidor.

## Contenido y validación
- El usuario indicó presencia de Vertical Safety en Honduras y El Salvador, más de 25 años de experiencia en el rubro y credenciales del fundador relacionadas con IRATA, SPRAT, GWO e ITRA. El sitio atribuye estas credenciales al fundador y no a la empresa como entidad.
- Antes de publicar, conviene validar internamente la redacción exacta, vigencia y alcance documental de cada credencial del fundador.
- Las descripciones de productos y fabricantes son resúmenes generales por familia. La norma, certificación, capacidad y conformidad aplicables dependen del modelo exacto y su documentación técnica vigente; el sitio no afirma que todos los productos de una marca compartan una misma certificación.
- Las fotografías actuales son recursos temporales de la versión de diseño. En Inicio, el carrusel está preparado para reemplazarlas por fotografías reales que proporcionará el cliente. No presentar las imágenes temporales como evidencia de proyectos realizados por Vertical Safety.
- La sección de contacto funciona mediante WhatsApp y no es un formulario de correo con almacenamiento.

## Accesibilidad y responsive
- Menú móvil con estado accesible.
- Carrusel de Inicio con controles y etiquetas.
- Animaciones de entrada y hover con respeto a `prefers-reduced-motion`.
- Diseños adaptados a escritorio, tablet y móvil.
