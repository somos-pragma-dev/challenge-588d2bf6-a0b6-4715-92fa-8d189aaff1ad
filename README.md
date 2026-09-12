# Optimización del tiempo de carga del portal transaccional

El portal transaccional de la entidad financiera debe mejorar su tiempo de carga para ofrecer una experiencia de usuario más rápida y eficiente. El portal recibe tráfico de 10 000 usuarios simultáneos en hora pico, con un SLA de 99.9%. Los principales actores son los usuarios finales, el servicio de autenticación y el backend de transacciones. El portal debe mantener la consistencia de los datos mostrados y soportar una tasa de transacciones de 500 por segundo. El tiempo de carga actual es de 8 segundos, y el objetivo es reducirlo a 3 segundos. El portal utiliza Angular para el frontend y se comunica con un backend RESTful.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Optimización de rendimiento en aplicaciones web |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis de rendimiento

**Objetivo:** Identificar los principales cuellos de botella en el tiempo de carga del portal.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Realiza un análisis de rendimiento utilizando herramientas como Lighthouse y Chrome DevTools para identificar los componentes y recursos que más contribuyen al tiempo de carga.
- Documenta los hallazgos y propone al menos dos mejoras potenciales basadas en los resultados del análisis.

**Entregable:** Informe de análisis de rendimiento con propuestas de mejora.

<details>
<summary>Pistas de conocimiento</summary>

- Core Web Vitals
- Estrategias de carga diferida
- Optimización de imágenes y recursos

</details>

### Fase 2: Implementación de mejoras

**Objetivo:** Aplicar las mejoras identificadas para reducir el tiempo de carga del portal.

**Tiempo estimado:** 6 horas

**Instrucciones:**

- Implementa las mejoras propuestas en la fase anterior. Esto puede incluir la optimización de imágenes, la carga diferida de recursos, la reducción del tamaño de los archivos JavaScript y CSS, y la implementación de técnicas de caching.
- Verifica que las mejoras aplicadas efectivamente reduzcan el tiempo de carga del portal.

**Entregable:** Portal transaccional con mejoras de rendimiento aplicadas.

<details>
<summary>Pistas de conocimiento</summary>

- Técnicas de optimización de imágenes
- Carga diferida de recursos
- Reducción de tamaño de archivos
- Caching

</details>

### Fase 3: Validación y ajustes finales

**Objetivo:** Validar que las mejoras aplicadas cumplen con los objetivos de rendimiento y realizar ajustes finales si es necesario.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Realiza una prueba de carga para verificar que el tiempo de carga del portal se ha reducido a 3 segundos o menos.
- Realiza ajustes finales si es necesario para asegurar que el portal cumpla con los objetivos de rendimiento y mantenga la consistencia de los datos.
- Documenta los resultados de la prueba de carga y los ajustes realizados.

**Entregable:** Documentación de los resultados de la prueba de carga y ajustes finales realizados.

<details>
<summary>Pistas de conocimiento</summary>

- Pruebas de carga
- Ajustes de rendimiento
- Consistencia de datos

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los Core Web Vitals y por qué son importantes para el rendimiento de una aplicación web?
- **paraQueSirve**: ¿Cómo se pueden utilizar los Core Web Vitals para identificar y solucionar problemas de rendimiento en una aplicación web?
- **comoSeUsa**: ¿Qué técnicas de optimización se pueden aplicar para mejorar el tiempo de carga de una aplicación web?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden afectar el rendimiento de una aplicación web y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño y trade-offs se deben considerar al implementar mejoras de rendimiento en una aplicación web?

## Criterios de Evaluacion

- Identificar los principales cuellos de botella en el tiempo de carga del portal.
- Aplicar mejoras de rendimiento efectivas para reducir el tiempo de carga.
- Validar que las mejoras aplicadas cumplen con los objetivos de rendimiento y mantener la consistencia de los datos.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
