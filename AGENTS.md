# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Optimización del tiempo de carga del portal transaccional**.

| | |
|---|---|
| Tema | Optimización de rendimiento en aplicaciones web |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | capas estándar con módulos lazy-loaded y optimización de rendimiento |
| Tiempo estimado | 10 horas |

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis de rendimiento**: Informe de análisis de rendimiento con propuestas de mejora.
- **Fase 2 — Implementación de mejoras**: Portal transaccional con mejoras de rendimiento aplicadas.
- **Fase 3 — Validación y ajustes finales**: Documentación de los resultados de la prueba de carga y ajustes finales realizados.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Boilerplate del stack (1)

Sin esto el proyecto no compila ni arranca. **Es tu trabajo crearlo**, y no toca nada de lo pedagogico: es andamiaje del stack.

- [ ] **src/index.html** — Sin index.html no hay documento raiz donde Angular monte la aplicacion y ng serve no tiene que servir.

### 2. Archivos que la arquitectura declara (1 de 18)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `src/app/shared/shared.module.ts`

### Presentes (17)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/main.ts`
- `src/app/core/core.module.ts`
- `src/app/core/services/transaction.service.ts`
- `src/app/app.config.ts`
- `src/app/features/transactions/transactions.module.ts`
- `src/app/features/transactions/transactions.component.ts`
- `src/app/features/transactions/transactions.component.html`
- `src/app/features/transactions/transactions.component.scss`
- `src/app/shared/components/transaction-card/transaction-card.component.ts`
- `src/assets/optimized/.gitkeep`
- `src/styles/configs/variables.scss`
- `src/styles/configs/mixins.scss`
- `reports/performance-analysis.md`
- `reports/load-test-results.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core`
- `src/app/features/transactions`
- `src/app/shared`
- `src/assets/optimized`
- `src/styles/configs`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar con módulos lazy-loaded y optimización de rendimiento**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced
- Brecha que el reto ataca: Aplica conceptos de Core Web Vitals y los usa para tomar decisiones de codigo que potencien soluciones en el contexto de negocio
- Mision: Mejorar el tiempo de carga del portal transaccional

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
