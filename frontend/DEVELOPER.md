📘 Manual del Desarrollador - Portafolio & E-commerce

1. Arquitectura de Datos y Caché
   Este proyecto utiliza una arquitectura de 3 capas para garantizar un rendimiento de 10/10 y minimizar las peticiones al CMS Strapi.

Capas de Optimización:
Persistencia (Data Cache): Implementada en strapi-client.ts. Next.js guarda el JSON de Strapi en el disco duro del VPS usando etiquetas (tags).

Memoización (Request Memoization): Implementada en los archivos de /services mediante cache() de React. Evita ejecuciones duplicadas de lógica durante un mismo renderizado.

Invalidación (On-Demand Revalidation): El sistema es estático por defecto. Solo se actualiza cuando Strapi envía un Webhook al endpoint /api/revalidate.

2. Estructura del Proyecto
   types/strapi.ts: Moldes de TypeScript. Cualquier cambio en Strapi debe reflejarse aquí primero.

lib/strapi-client.ts: Único punto de contacto con la API. Gestiona los tags de caché.

services/: Contiene los "Especialistas". Aquí se limpia y transforma la data cruda de Strapi en objetos fáciles de usar para los componentes.

app/api/revalidate/route.ts: El controlador que escucha a Strapi y decide qué etiquetas de caché borrar.

3. Flujo de Trabajo: Añadir una nueva Funcionalidad
   Para mantener el orden profesional, sigue estos pasos si deseas agregar, por ejemplo, un sistema de "Testimonios":

Strapi: Crea el Content-Type Testimonial.

Types: Agrega la interface Testimonial en src/types/strapi.ts.

Service: Crea src/services/testimonials.ts.

Usa strapiFetch(path, "testimonials").

Envuelve la función en cache().

Webhook: En src/app/api/revalidate/route.ts, añade al mapa:

TypeScript
const tagsMap = {
testimonial: "testimonials",
};
Trigger: En el panel de Strapi, asegúrate de que el Webhook esté configurado para enviar eventos de Testimonial a tu URL de producción.

4. Comandos de Mantenimiento
   Modo Desarrollo: npm run dev (La caché de datos se comporta de forma más agresiva; a veces requiere reiniciar para ver cambios estructurales).

Limpiar Caché Manual: Si el Webhook falla, se puede forzar la revalidación haciendo un POST manual al endpoint de revalidate con el Token de autorización.

Verificar Caché: Los archivos cacheados residen en .next/cache/fetch-cache.

5. Variables de Entorno (.env)
   NEXT_PUBLIC_STRAPI_URL: URL base de la API (ej. http://localhost:1337).

STRAPI_REVALIDATE_TOKEN: Token de seguridad compartido entre Strapi y Next.js para validar Webhooks.

6. Glosario de Decisiones Técnicas (2026)
   ¿Por qué no use cache? Se priorizó revalidateTag para tener control granular en el E-commerce (precios y stock).

¿Por qué force-static? Para maximizar la velocidad en el VPS; el servidor solo "despierta" cuando el contenido cambia realmente.
