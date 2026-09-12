# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Boilerplate del stack que falta

Sin esto no compila ni arranca. Es andamiaje, no toca nada de lo pedagogico:

- **src/index.html** — Sin index.html no hay documento raiz donde Angular monte la aplicacion y ng serve no tiene que servir.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/app/shared/shared.module.ts`

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced

### Brecha de conocimiento
Aplica conceptos de Core Web Vitals y los usa para tomar decisiones de codigo que potencien soluciones en el contexto de negocio

### Misión / candidato
Mejorar el tiempo de carga del portal transaccional

### Reto
- Tema: Optimización de rendimiento en aplicaciones web
- Seniority: advanced-l2
- Tipo: practical
- Título: Optimización del tiempo de carga del portal transaccional
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis de rendimiento — objetivo: Identificar los principales cuellos de botella en el tiempo de carga del portal. — entregable (NO resolver): Informe de análisis de rendimiento con propuestas de mejora.
- Fase 2: Implementación de mejoras — objetivo: Aplicar las mejoras identificadas para reducir el tiempo de carga del portal. — entregable (NO resolver): Portal transaccional con mejoras de rendimiento aplicadas.
- Fase 3: Validación y ajustes finales — objetivo: Validar que las mejoras aplicadas cumplen con los objetivos de rendimiento y realizar ajustes finales si es necesario. — entregable (NO resolver): Documentación de los resultados de la prueba de carga y ajustes finales realizados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "transactional-portal",
  "version": "1.0.0",
  "description": "Portal transaccional optimizado para entidad financiera",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:prod": "ng build --configuration=production",
    "build:analyze": "ng build --stats-json && npx webpack-bundle-analyzer dist/transactional-portal/stats.json",
    "test": "ng test",
    "test:ci": "ng test --watch=false --browsers=ChromeHeadless",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "lighthouse": "lighthouse http://localhost:4200 --output=html --output-path=./reports/lighthouse.html --chrome-flags='--headless'",
    "lighthouse:ci": "lighthouse http://localhost:4200 --preset=perf --output=json --output-path=./reports/lighthouse.json --chrome-flags='--headless --no-sandbox --disable-gpu'",
    "optimize:images": "node scripts/optimize-images.js"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.0.0",
    "@angular/common": "~20.0.0",
    "@angular/compiler": "~20.0.0",
    "@angular/core": "~20.0.0",
    "@angular/forms": "~20.0.0",
    "@angular/material": "~20.0.0",
    "@angular/platform-browser": "~20.0.0",
    "@angular/platform-browser-dynamic": "~20.0.0",
    "@angular/router": "~20.0.0",
    "rxjs": "^7.8.0",
    "tslib": "^2.6.0",
    "zone.js": "^0.14.0",
    "web-vitals": "^4.0.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.0.0",
    "@angular/cli": "~20.0.0",
    "@angular/compiler-cli": "~20.0.0",
    "@angular/language-service": "~20.0.0",
    "@types/jasmine": "~5.1.0",
    "@types/node": "^20.11.0",
    "jasmine-core": "~5.1.0",
    "jasmine-spec-reporter": "~7.0.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "lighthouse": "^12.0.0",
    "protractor": "~7.0.0",
    "ts-node": "~10.9.0",
    "typescript": "~5.7.0",
    "webpack-bundle-analyzer": "^4.10.0"
  },
  "engines": {
    "node": ">=18.19.0 <21.0.0",
    "npm": ">=10.2.0 <11.0.0"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "transactional-portal": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "standalone": true,
          "changeDetection": "OnPush"
        },
        "@schematics/angular:directive": {
          "standalone": true
        },
        "@schematics/angular:pipe": {
          "standalone": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/transactional-portal",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all",
              "optimization": {
                "scripts": true,
                "styles": {
                  "minify": true,
                  "inlineCritical": true
                },
                "fonts": {
                  "inline": true
                }
              },
              "sourceMap": false,
              "namedChunks": false
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "transactional-portal:build:production"
            },
            "development": {
              "buildTarget": "transactional-portal:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": ["zone.js", "zone.js/testing"],
            "tsConfig": "tsconfig.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false,
    "cache": {
      "enabled": true,
      "path": ".angular/cache",
      "environment": "all"
    }
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": ["ES2022", "dom"],
    "paths": {
      "@core/*": ["src/app/core/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"],
      "@env/*": ["src/environments/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { errorInterceptor } from './app/core/interceptors/error.interceptor';
import { retryInterceptor } from './app/core/interceptors/retry.interceptor';
import { transactionReducer } from './app/core/store/transaction.reducer';
import { TransactionEffects } from './app/core/store/transaction.effects';
import { provideServiceWorker } from '@angular/service-worker';
import { environment } from './environments/environment';

interface BootstrapConfig {
  providers: any[];
}

function initializePerformanceMonitoring(): void {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const originalMark = window.performance.mark;
    const originalMeasure = window.performance.measure;

    window.performance.mark = function(measureName: string, startMark?: string, endMark?: string): void {
      const markedEntry = originalMark.call(window.performance, measureName);
      if (startMark && endMark) {
        window.performance.measure(measureName, startMark, endMark);
      }
      return markedEntry;
    };

    window.performance.measure = function(measureName: string, startMark?: string, endMark?: string): PerformanceMeasure | undefined {
      return originalMeasure.call(window.performance, measureName, startMark, endMark);
    };
  }
}

function configureServiceWorker(): any[] {
  if (environment.production && 'serviceWorker' in navigator) {
    return [
      provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
      })
    ];
  }
  return [];
}

function buildBootstrapConfig(): BootstrapConfig {
  const performanceProviders = [
    {
      provide: 'PERFORMANCE_MARK',
      useFactory: () => initializePerformanceMonitoring
    }
  ];

  const stateProviders = [
    provideStore({ transactions: transactionReducer }),
    provideEffects([TransactionEffects]),
    !isDevMode() ? provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      trace: false,
      traceLimit: 75
    }) : []
  ].flat();

  const httpProviders = [
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, retryInterceptor, errorInterceptor])
    )
  ];

  const routerProviders = [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    )
  ];

  const animationProviders = [
    provideAnimations()
  ];

  const swProviders = configureServiceWorker();

  return {
    providers: [
      ...performanceProviders,
      ...stateProviders,
      ...httpProviders,
      ...routerProviders,
      ...animationProviders,
      ...swProviders
    ]
  };
}

async function bootstrap(): Promise<void> {
  const startTime = performance.now();

  try {
    const bootstrapConfig = buildBootstrapConfig();

    bootstrapApplication(AppComponent, appConfig)
      .then((appRef) => {
        const bootstrapTime = performance.now() - startTime;

        if (typeof window !== 'undefined') {
          window.performance.mark('angular-bootstrap-complete', undefined, undefined);
          window.performance.measure('app-bootstrap', 'angular-bootstrap-start', 'angular-bootstrap-complete');

          const metrics = {
            bootstrapTime,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
          };

          console.log('[Performance] Application bootstrapped in', bootstrapTime.toFixed(2), 'ms', metrics);
        }

        return appRef;
      })
      .catch((error) => {
        console.error('[Bootstrap] Error durante el inicio de la aplicación:', error);
        throw error;
      });
  } catch (error) {
    console.error('[Bootstrap] Error crítico al configurar la aplicación:', error);
    throw error;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    bootstrap();
  });
} else {
  bootstrap();
}

// === ARCHIVO: src/app/core/core.module.ts ===
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TransactionService } from './services/transaction.service';
import { CacheService } from './services/cache.service';
import { PerformanceService } from './services/performance.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { RetryInterceptor } from './interceptors/retry.interceptor';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

export interface CoreModuleConfig {
  httpInterceptors?: boolean;
  cachingEnabled?: boolean;
  performanceMonitoring?: boolean;
}

const DEFAULT_CONFIG: CoreModuleConfig = {
  httpInterceptors: true,
  cachingEnabled: true,
  performanceMonitoring: true
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService,
    TransactionService,
    CacheService,
    PerformanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RetryInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  private static moduleConfig: CoreModuleConfig = DEFAULT_CONFIG;

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule ya ha sido cargado. Importa CoreModule en el AppModule raíz únicamente.'
      );
    }
  }

  static forRoot(config: CoreModuleConfig = DEFAULT_CONFIG): any {
    CoreModule.moduleConfig = { ...DEFAULT_CONFIG, ...config };
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: 'CORE_MODULE_CONFIG',
          useValue: config
        }
      ]
    };
  }

  static getConfig(): CoreModuleConfig {
    return CoreModule.moduleConfig;
  }

  static isInterceptorsEnabled(): boolean {
    return CoreModule.moduleConfig.httpInterceptors ?? true;
  }

  static isCachingEnabled(): boolean {
    return CoreModule.moduleConfig.cachingEnabled ?? true;
  }

  static isPerformanceMonitoringEnabled(): boolean {
    return CoreModule.moduleConfig.performanceMonitoring ?? true;
  }
}

// === ARCHIVO: src/app/core/services/transaction.service.ts ===
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of, timer } from 'rxjs';
import { map, catchError, shareReplay, tap, retry, delayWhen, retryWhen } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { PerformanceService } from './performance.service';
import { environment } from '../../../environments/environment';

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  category: string;
  merchantName: string;
  merchantCategory: string;
  accountId: string;
  reference: string;
  metadata?: Record<string, any>;
}

export interface TransactionFilter {
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  status?: string[];
  category?: string[];
  merchantName?: string;
  accountId?: string;
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface TransactionSummary {
  totalTransactions: number;
  totalAmount: number;
  averageAmount: number;
  pendingCount: number;
  completedCount: number;
  failedCount: number;
  byCategory: Record<string, { count: number; total: number }>;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private readonly http = inject(HttpClient);
  private readonly cacheService = inject(CacheService);
  private readonly performanceService = inject(PerformanceService);

  private readonly apiUrl = `${environment.apiUrl}/transactions`;
  private readonly cacheKey = 'transactions';
  private readonly cacheTTL = 5 * 60 * 1000;

  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  readonly transactions$ = this.transactionsSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();
  readonly error$ = this.errorSubject.asObservable();

  getTransactions(filter: TransactionFilter = {}): Observable<Transaction[]> {
    const cacheKey = this.buildCacheKey('list', filter);
    const cached = this.cacheService.get<Transaction[]>(cacheKey);

    if (cached) {
      this.transactionsSubject.next(cached);
      return of(cached);
    }

    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    const params = this.buildQueryParams(filter);
    const headers = this.buildHeaders();

    const markId = this.performanceService.mark('transaction-list-start');

    return this.http.get<PaginatedResponse<Transaction>>(this.apiUrl, { params, headers }).pipe(
      map(response => response.data),
      tap(transactions => {
        this.cacheService.set(cacheKey, transactions, this.cacheTTL);
        this.transactionsSubject.next(transactions);
        this.loadingSubject.next(false);
        this.performanceService.mark('transaction-list-end');
        this.performanceService.measure('transaction-list', 'transaction-list-start', 'transaction-list-end');
      }),
      retry({
        count: 3,
        delay: (error, retryCount) => {
          console.warn(`Retry ${retryCount} for transaction list after error:`, error);
          return timer(retryCount * 1000);
        }
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        const errorMessage = this.extractErrorMessage(error);
        this.errorSubject.next(errorMessage);
        return throwError(() => new Error(errorMessage));
      }),
      shareReplay(1)
    );
  }

  getTransactionById(id: string): Observable<Transaction> {
    const cacheKey = `transaction-${id}`;
    const cached = this.cacheService.get<Transaction>(cacheKey);

    if (cached) {
      return of(cached);
    }

    this.loadingSubject.next(true);

    const headers = this.buildHeaders();
    const markId = this.performanceService.mark('transaction-detail-start');

    return this.http.get<Transaction>(`${this.apiUrl}/${id}`, { headers }).pipe(
      map(transaction => {
        this.cacheService.set(cacheKey, transaction, this.cacheTTL);
        this.performanceService.mark('transaction-detail-end');
        this.performanceService.measure('transaction-detail', 'transaction-detail-start', 'transaction-detail-end');
        return transaction;
      }),
      tap(() => this.loadingSubject.next(false)),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      }),
      shareReplay(1)
    );
  }

  getTransactionSummary(filter: TransactionFilter = {}): Observable<TransactionSummary> {
    const cacheKey = this.buildCacheKey('summary', filter);
    const cached = this.cacheService.get<TransactionSummary>(cacheKey);

    if (cached) {
      return of(cached);
    }

    const params = this.buildQueryParams(filter);
    const headers = this.buildHeaders();

    return this.http.get<TransactionSummary>(`${this.apiUrl}/summary`, { params, headers }).pipe(
      map(summary => {
        this.cacheService.set(cacheKey, summary, this.cacheTTL);
        return summary;
      }),
      catchError(error => {
        return throwError(() => new Error(this.extractErrorMessage(error)));
      }),
      shareReplay(1)
    );
  }

  createTransaction(transaction: Partial<Transaction>): Observable<Transaction> {
    this.loadingSubject.next(true);

    const headers = this.buildHeaders();

    return this.http.post<Transaction>(this.apiUrl, transaction, { headers }).pipe(
      tap(created => {
        this.cacheService.invalidate(this.cacheKey);
        const current = this.transactionsSubject.getValue();
        this.transactionsSubject.next([created, ...current]);
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  updateTransaction(id: string, updates: Partial<Transaction>): Observable<Transaction> {
    this.loadingSubject.next(true);

    const headers = this.buildHeaders();

    return this.http.patch<Transaction>(`${this.apiUrl}/${id}`, updates, { headers }).pipe(
      tap(updated => {
        this.cacheService.invalidate(this.cacheKey);
        this.cacheService.invalidate(`transaction-${id}`);
        const current = this.transactionsSubject.getValue();
        const index = current.findIndex(t => t.id === id);
        if (index >= 0) {
          const updatedList = [...current];
          updatedList[index] = updated;
          this.transactionsSubject.next(updatedList);
        }
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  deleteTransaction(id: string): Observable<void> {
    this.loadingSubject.next(true);

    const headers = this.buildHeaders();

    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }).pipe(
      tap(() => {
        this.cacheService.invalidate(this.cacheKey);
        this.cacheService.invalidate(`transaction-${id}`);
        const current = this.transactionsSubject.getValue();
        this.transactionsSubject.next(current.filter(t => t.id !== id));
        this.loadingSubject.next(false);
      }),
      catchError(error => {
        this.loadingSubject.next(false);
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  exportTransactions(format: 'csv' | 'json' | 'pdf', filter: TransactionFilter = {}): Observable<Blob> {
    const params = this.buildQueryParams(filter).set('format', format);
    const headers = this.buildHeaders();

    return this.http.get(`${this.apiUrl}/export`, {
      params,
      headers,
      responseType: 'blob'
    }).pipe(
      catchError(error => {
        return throwError(() => new Error(this.extractErrorMessage(error)));
      })
    );
  }

  clearCache(): void {
    this.cacheService.invalidate(this.cacheKey);
    this.transactionsSubject.next([]);
  }

  private buildQueryParams(filter: TransactionFilter): HttpParams {
    let params = new HttpParams();

    if (filter.startDate) params = params.set('startDate', filter.startDate);
    if (filter.endDate) params = params.set('endDate', filter.endDate);
    if (filter.minAmount !== undefined) params = params.set('minAmount', filter.minAmount.toString());
    if (filter.maxAmount !== undefined) params = params.set('maxAmount', filter.maxAmount.toString());
    if (filter.status?.length) params = params.set('status', filter.status.join(','));
    if (filter.category?.length) params = params.set('category', filter.category.join(','));
    if (filter.merchantName) params = params.set('merchantName', filter.merchantName);
    if (filter.accountId) params = params.set('accountId', filter.accountId);
    if (filter.page !== undefined) params = params.set('page', filter.page.toString());
    if (filter.pageSize !== undefined) params = params.set('pageSize', filter.pageSize.toString());
    if (filter.sortBy) params = params.set('sortBy', filter.sortBy);
    if (filter.sortOrder) params = params.set('sortOrder', filter.sortOrder);

    return params;
  }

  private buildHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Request-ID': this.generateRequestId()
    });
  }

  private buildCacheKey(prefix: string, filter: TransactionFilter): string {
    return `${this.cacheKey}-${prefix}-${JSON.stringify(filter)}`;
  }

  private generateRequestId(): string {
    return `req-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private extractErrorMessage(error: any): string {
    if (error.error?.message) return error.error.message;
    if (error.message) return error.message;
    return 'Error desconocido al procesar la solicitud';
  }
}

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, HttpInterceptorFn } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { transactionReducer } from './core/store/transaction.reducer';
import { TransactionEffects } from './core/store/transaction.effects';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { retryInterceptor } from './core/interceptors/retry.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { cacheInterceptor } from './core/interceptors/cache.interceptor';

const httpInterceptors: HttpInterceptorFn[] = [
  authInterceptor,
  retryInterceptor,
  errorInterceptor,
  cacheInterceptor
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors(httpInterceptors)
    ),
    provideAnimations(),
    provideStore({
      transactions: transactionReducer
    }),
    provideEffects([TransactionEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    })
  ]
};

// === ARCHIVO: src/app/features/transactions/transactions.module.ts ===
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TransactionsComponent } from './transactions.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionFiltersComponent } from './components/transaction-filters/transaction-filters.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionExportComponent } from './components/transaction-export/transaction-export.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: TransactionListComponent,
        data: { title: 'Lista de Transacciones' }
      },
      {
        path: 'detail/:id',
        component: TransactionDetailComponent,
        data: { title: 'Detalle de Transacción' }
      },
      {
        path: 'export',
        component: TransactionExportComponent,
        data: { title: 'Exportar Transacciones' }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatProgressBarModule,
    TransactionsComponent,
    TransactionDetailComponent,
    TransactionFiltersComponent,
    TransactionListComponent,
    TransactionExportComponent
  ],
  exports: [
    RouterModule,
    TransactionsComponent
  ]
})
export class TransactionsModule {
  static forRoot(): any {
    return {
      ngModule: TransactionsModule,
      providers: []
    };
  }
}

// === ARCHIVO: src/app/features/transactions/transactions.component.ts ===
import { 
  Component, 
  OnInit, 
  OnDestroy, 
  ChangeDetectionStrategy, 
  ChangeDetectorRef,
  Signal,
  computed,
  signal,
  effect
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { filter, takeUntil, debounceTime, distinctUntilChanged, tap, map, catchError, finalize } from 'rxjs/operators';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TransactionService } from '@core/services/transaction.service';
import { Transaction, TransactionFilter, TransactionSummary, PaginatedResponse } from '@core/models/transaction.model';
import { LoadingState } from '@core/models/loading-state.model';
import { PerformanceService } from '@core/services/performance.service';
import { CacheService } from '@core/services/cache.service';

interface TransactionViewModel {
  transactions: Transaction[];
  summary: TransactionSummary | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  filters: TransactionFilter;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatBadgeModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly performanceService: PerformanceService;
  private readonly cacheService: CacheService;
  
  readonly viewModel = signal<TransactionViewModel>({
    transactions: [],
    summary: null,
    loading: false,
    error: null,
    currentPage: 0,
    pageSize: 25,
    totalItems: 0,
    filters: this.getDefaultFilters()
  });

  readonly isLoading$: Observable<boolean>;
  readonly error$: Observable<string | null>;
  readonly transactions$: Observable<Transaction[]>;
  readonly summary$: Observable<TransactionSummary | null>;

  readonly hasTransactions = computed(() => this.viewModel().transactions.length > 0);
  readonly hasError = computed(() => this.viewModel().error !== null);
  readonly transactionCount = computed(() => this.viewModel().transactions.length);
  readonly totalAmount = computed(() => {
    const summary = this.viewModel().summary;
    return summary?.totalAmount || 0;
  });

  private readonly transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly errorSubject = new BehaviorSubject<string | null>(null);
  private readonly summarySubject = new BehaviorSubject<TransactionSummary | null>(null);
  private readonly pageSubject = new BehaviorSubject<{ page: number; size: number }>({ page: 0, size: 25 });

  readonly activeTab = signal<number>(0);
  readonly sidebarOpen = signal<boolean>(true);
  readonly lastSyncTime = signal<Date | null>(null);

  constructor(
    private readonly transactionService: TransactionService,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly snackBar: MatSnackBar
  ) {
    this.performanceService = new PerformanceService();
    this.cacheService = new CacheService();
    
    this.isLoading$ = this.loadingSubject.asObservable();
    this.error$ = this.errorSubject.asObservable();
    this.transactions$ = this.transactionsSubject.asObservable();
    this.summary$ = this.summarySubject.asObservable();

    effect(() => {
      const vm = this.viewModel();
      if (vm.loading) {
        this.performanceService.mark('transactions-loading-start');
      } else if (vm.transactions.length > 0) {
        this.performanceService.mark('transactions-loading-end');
        const duration = this.performanceService.measure('transactions-loading-start', 'transactions-loading-end');
        this.performanceService.logMetric('transactions_load_time', duration);
      }
    });
  }

  ngOnInit(): void {
    this.setupRouteTracking();
    this.loadInitialData();
    this.setupFilterSubscription();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.cacheService.clearPattern('transactions_*');
  }

  private setupRouteTracking(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  private loadInitialData(): void {
    this.setLoading(true);
    const filters = this.viewModel().filters;
    const { page, size } = this.pageSubject.value;

    combineLatest([
      this.transactionService.getTransactions({ ...filters, page, size }),
      this.transactionService.getTransactionSummary(filters)
    ]).pipe(
      takeUntil(this.destroy$),
      debounceTime(300),
      catchError(error => {
        this.handleError(error);
        return [];
      })
    ).subscribe(([transactionsResponse, summary]) => {
      this.handleTransactionsResponse(transactionsResponse);
      this.summarySubject.next(summary);
      this.setLoading(false);
      this.lastSyncTime.set(new Date());
      this.cdr.markForCheck();
    });
  }

  private setupFilterSubscription(): void {
    this.pageSubject.pipe(
      takeUntil(this.destroy$),
      debounceTime(200),
      distinctUntilChanged((prev, curr) => prev.page === curr.page && prev.size === curr.size)
    ).subscribe(({ page, size }) => {
      this.loadTransactions({ page, size });
    });
  }

  loadTransactions(params?: { page?: number; size?: number }): void {
    const currentPage = params?.page ?? this.pageSubject.value.page;
    const pageSize = params?.size ?? this.pageSubject.value.pageSize;
    
    this.pageSubject.next({ page: currentPage, size: pageSize });
    this.setLoading(true);

    this.transactionService.getTransactions({
      ...this.viewModel().filters,
      page: currentPage,
      size: pageSize
    }).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.handleError(error);
        return [];
      }),
      finalize(() => {
        this.setLoading(false);
        this.cdr.markForCheck();
      })
    ).subscribe(response => {
      this.handleTransactionsResponse(response);
    });
  }

  onPageChange(page: number, pageSize: number): void {
    this.loadTransactions({ page, size: pageSize });
  }

  onFilterChange(filters: TransactionFilter): void {
    this.updateViewModel('filters', filters);
    this.loadTransactions({ page: 0, size: this.pageSubject.value.size });
  }

  onTransactionSelect(transaction: Transaction): void {
    this.router.navigate(['/transactions/detail', transaction.id]);
  }

  onTransactionDelete(transaction: Transaction): void {
    if (confirm(`¿Está seguro de eliminar la transacción ${transaction.id}?`)) {
      this.setLoading(true);
      this.transactionService.deleteTransaction(transaction.id).pipe(
        takeUntil(this.destroy$),
        catchError(error => {
          this.handleError(error);
          return [];
        }),
        finalize(() => {
          this.setLoading(false);
          this.cdr.markForCheck();
        })
      ).subscribe(() => {
        this.showNotification('Transacción eliminada correctamente', 'success');
        this.loadTransactions();
      });
    }
  }

  refreshData(): void {
    this.cacheService.clearPattern('transactions_*');
    this.loadTransactions();
    this.showNotification('Datos actualizados', 'info');
  }

  exportTransactions(format: 'csv' | 'json' | 'pdf'): void {
    this.setLoading(true);
    this.transactionService.exportTransactions(format, this.viewModel().filters).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.handleError(error);
        return [];
      }),
      finalize(() => {
        this.setLoading(false);
        this.cdr.markForCheck();
      })
    ).subscribe(() => {
      this.showNotification(`Exportación en formato ${format.toUpperCase()} iniciada`, 'success');
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  setActiveTab(index: number): void {
    this.activeTab.set(index);
  }

  private handleTransactionsResponse(response: PaginatedResponse<Transaction>): void {
    this.transactionsSubject.next(response.data || []);
    this.updateViewModel({
      transactions: response.data || [],
      totalItems: response.total || 0,
      currentPage: response.page || 0,
      pageSize: response.size || 25
    });
  }

  private handleError(error: any): void {
    const errorMessage = this.extractErrorMessage(error);
    this.errorSubject.next(errorMessage);
    this.updateViewModel('error', errorMessage);
    this.showNotification(errorMessage, 'error');
  }

  private extractErrorMessage(error: any): string {
    if (error?.status === 401) {
      return 'Sesión expirada. Por favor, inicie sesión nuevamente.';
    }
    if (error?.status === 403) {
      return 'No tiene permisos para realizar esta operación.';
    }
    if (error?.status === 0) {
      return 'Error de conexión. Verifique su red.';
    }
    return error?.message || 'Error desconocido. Intente más tarde.';
  }

  private showNotification(message: string, type: 'success' | 'error' | 'info'): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [`snackbar-${type}`]
    });
  }

  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
    this.updateViewModel('loading', loading);
  }

  private updateViewModel(partial: Partial<TransactionViewModel>): void {
    this.viewModel.update(vm => ({ ...vm, ...partial }));
  }

  private getDefaultFilters(): TransactionFilter {
    return {
      page: 0,
      size: 25,
      sortBy: 'date',
      sortOrder: 'desc',
      status: undefined,
      type: undefined,
      dateFrom: undefined,
      dateTo: undefined,
      minAmount: undefined,
      maxAmount: undefined
    };
  }
}

// === ARCHIVO: src/app/features/transactions/transactions.component.html ===
<div class="transactions-container"
     role="region"
     aria-label="Lista de transacciones">
  
  <header class="transactions-header">
    <h1 class="transactions-title">Transacciones</h1>
    <div class="transactions-actions">
      <button mat-raised-button 
              color="primary"
              (click)="exportTransactions('csv')"
              aria-label="Exportar transacciones en formato CSV">
        <mat-icon>download</mat-icon>
        Exportar CSV
      </button>
      <button mat-raised-button 
              color="accent"
              (click)="exportTransactions('pdf')"
              aria-label="Exportar transacciones en formato PDF">
        <mat-icon>picture_as_pdf</mat-icon>
        Exportar PDF
      </button>
    </div>
  </header>

  <section class="transactions-filters" aria-label="Filtros de búsqueda">
    <mat-form-field appearance="outline" class="filter-field">
      <mat-label>Fecha inicio</mat-label>
      <input matInput 
             [matDatepicker]="startPicker"
             [(ngModel)]="filterStartDate"
             (dateChange)="applyFilters()"
             aria-label="Fecha de inicio del filtro">
      <mat-datepicker-toggle matSuffix [for]="startPicker"></mat-datepicker-toggle>
      <mat-datepicker #startPicker></mat-datepicker>
    </mat-form-field>

    <mat-form-field appearance="outline" class="filter-field">
      <mat-label>Fecha fin</mat-label>
      <input matInput 
             [matDatepicker]="endPicker"
             [(ngModel)]="filterEndDate"
             (dateChange)="applyFilters()"
             aria-label="Fecha de fin del filtro">
      <mat-datepicker-toggle matSuffix [for]="endPicker"></mat-datepicker-toggle>
      <mat-datepicker #endPicker></mat-datepicker>
    </mat-form-field>

    <mat-form-field appearance="outline" class="filter-field filter-field--type">
      <mat-label>Tipo de transacción</mat-label>
      <mat-select [(ngModel)]="filterType" 
                  (selectionChange)="applyFilters()"
                  aria-label="Tipo de transacción">
        <mat-option value="">Todos</mat-option>
        <mat-option value="credit">Crédito</mat-option>
        <mat-option value="debit">Débito</mat-option>
        <mat-option value="transfer">Transferencia</mat-option>
        <mat-option value="payment">Pago</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline" class="filter-field filter-field--status">
      <mat-label>Estado</mat-label>
      <mat-select [(ngModel)]="filterStatus"
                  (selectionChange)="applyFilters()"
                  aria-label="Estado de la transacción">
        <mat-option value="">Todos</mat-option>
        <mat-option value="completed">Completada</mat-option>
        <mat-option value="pending">Pendiente</mat-option>
        <mat-option value="failed">Fallida</mat-option>
      </mat-select>
    </mat-form-field>

    <button mat-stroked-button 
            (click)="clearFilters()"
            class="clear-filters-btn"
            aria-label="Limpiar filtros">
      <mat-icon>clear</mat-icon>
      Limpiar
    </button>
  </section>

  <app-loader *ngIf="loading$ | async" 
              message="Cargando transacciones">
  </app-loader>

  <div *ngIf="error$ | async as error" 
       class="error-message" 
       role="alert"
       aria-live="assertive">
    <mat-icon>error_outline</mat-icon>
    <span>{{ error }}</span>
    <button mat-button (click)="retryLoad()">Reintentar</button>
  </div>

  <main class="transactions-list" 
        role="list" 
        aria-label="Listado de transacciones"
        *ngIf="!(loading$ | async) && !(error$ | async)">
    
    <app-transaction-card *ngFor="let transaction of transactions$ | async; trackBy: trackByTransactionId"
                         [transaction]="transaction"
                         [highlighted]="selectedTransactionId === transaction.id"
                         (cardClick)="selectTransaction($event)"
                         role="listitem"
                         [attr.aria-selected]="selectedTransactionId === transaction.id">
    </app-transaction-card>

    <div *ngIf="(transactions$ | async)?.length === 0" 
         class="empty-state"
         role="status"
         aria-label="No hay transacciones">
      <mat-icon>receipt_long</mat-icon>
      <h3>No se encontraron transacciones</h3>
      <p>Intenta modificar los filtros de búsqueda</p>
    </div>
  </main>

  <nav class="transactions-pagination" 
       aria-label="Paginación de transacciones"
       *ngIf="totalPages > 1">
    <button mat-icon-button 
            [disabled]="currentPage === 1"
            (click)="goToPage(currentPage - 1)"
            aria-label="Página anterior">
      <mat-icon>chevron_left</mat-icon>
    </button>
    
    <span class="pagination-info" aria-live="polite">
      Página {{ currentPage }} de {{ totalPages }}
    </span>
    
    <button mat-icon-button
            [disabled]="currentPage === totalPages"
            (click)="goToPage(currentPage + 1)"
            aria-label="Página siguiente">
      <mat-icon>chevron_right</mat-icon>
    </button>
  </nav>

  <aside class="transactions-summary" aria-label="Resumen de transacciones">
    <h2 class="summary-title">Resumen</h2>
    <dl class="summary-list">
      <div class="summary-item">
        <dt>Total transacciones</dt>
        <dd>{{ (summary$ | async)?.totalCount || 0 }}</dd>
      </div>
      <div class="summary-item">
        <dt>Monto total</dt>
        <dd>{{ (summary$ | async)?.totalAmount | currency:'USD' }}</dd>
      </div>
      <div class="summary-item">
        <dt>Transacciones crédito</dt>
        <dd>{{ (summary$ | async)?.creditCount || 0 }}</dd>
      </div>
      <div class="summary-item">
        <dt>Transacciones débito</dt>
        <dd>{{ (summary$ | async)?.debitCount || 0 }}</dd>
      </div>
    </dl>
  </aside>
</div>

<picture class="lazy-image-container" aria-hidden="true">
  <source srcset="assets/optimized/decorative-pattern.webp" type="image/webp">
  <img src="assets/optimized/decorative-pattern.png" 
       alt=""
       loading="lazy"
       decoding="async"
       width="200"
       height="200">
</picture>

// === ARCHIVO: src/app/features/transactions/transactions.component.scss ===
@use '../../../styles/configs/variables' as v;
@use '../../../styles/configs/mixins' as m;

:host {
  display: block;
  width: 100%;
  min-height: 100vh;
  background-color: v.$background-primary;
}

.transactions-container {
  display: grid;
  grid-template-areas:
    "header header"
    "filters filters"
    "main summary"
    "pagination pagination";
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto auto 1fr auto;
  gap: v.$spacing-lg;
  padding: v.$spacing-lg;
  max-width: 1440px;
  margin: 0 auto;

  @include m.tablet {
    grid-template-areas:
      "header"
      "filters"
      "main"
      "pagination";
    grid-template-columns: 1fr;
  }
}

.transactions-header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: v.$spacing-md;
  border-bottom: 1px solid v.$border-color;
}

.transactions-title {
  font-family: v.$font-family-primary;
  font-size: v.$font-size-h1;
  font-weight: v.$font-weight-bold;
  color: v.$text-primary;
  margin: 0;
}

.transactions-actions {
  display: flex;
  gap: v.$spacing-sm;

  button {
    display: flex;
    align-items: center;
    gap: v.$spacing-xs;
  }
}

.transactions-filters {
  grid-area: filters;
  display: flex;
  flex-wrap: wrap;
  gap: v.$spacing-md;
  padding: v.$spacing-md;
  background-color: v.$background-secondary;
  border-radius: v.$border-radius-md;
}

.filter-field {
  flex: 1;
  min-width: 180px;
  max-width: 250px;

  &--type {
    flex-basis: 200px;
  }

  &--status {
    flex-basis: 180px;
  }
}

.clear-filters-btn {
  align-self: center;
  height: 56px;
}

.transactions-list {
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: v.$spacing-md;
}

.error-message {
  grid-area: main;
  display: flex;
  align-items: center;
  gap: v.$spacing-sm;
  padding: v.$spacing-md;
  background-color: v.$color-error-light;
  border: 1px solid v.$color-error;
  border-radius: v.$border-radius-sm;
  color: v.$color-error;

  mat-icon {
    font-size: 24px;
    width: 24px;
    height: 24px;
  }

  span {
    flex: 1;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: v.$spacing-xl;
  text-align: center;
  background-color: v.$background-secondary;
  border-radius: v.$border-radius-md;

  mat-icon {
    font-size: 64px;
    width: 64px;
    height: 64px;
    color: v.$text-secondary;
    margin-bottom: v.$spacing-md;
  }

  h3 {
    font-family: v.$font-family-primary;
    font-size: v.$font-size-h3;
    color: v.$text-primary;
    margin: 0 0 v.$spacing-sm;
  }

  p {
    font-size: v.$font-size-body;
    color: v.$text-secondary;
    margin: 0;
  }
}

.transactions-pagination {
  grid-area: pagination;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: v.$spacing-md;
  padding: v.$spacing-md;
  background-color: v.$background-secondary;
  border-radius: v.$border-radius-md;
}

.pagination-info {
  font-family: v.$font-family-primary;
  font-size: v.$font-size-body;
  color: v.$text-primary;
}

.transactions-summary {
  grid-area: summary;
  padding: v.$spacing-md;
  background-color: v.$background-secondary;
  border-radius: v.$border-radius-md;
  height: fit-content;
  position: sticky;
  top: v.$spacing-lg;

  @include m.tablet {
    position: static;
  }
}

.summary-title {
  font-family: v.$font-family-primary;
  font-size: v.$font-size-h3;
  font-weight: v.$font-weight-semibold;
  color: v.$text-primary;
  margin: 0 0 v.$spacing-md;
  padding-bottom: v.$spacing-sm;
  border-bottom: 1px solid v.$border-color;
}

.summary-list {
  display: flex;
  flex-direction: column;
  gap: v.$spacing-sm;
  margin: 0;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  dt {
    font-family: v.$font-family-primary;
    font-size: v.$font-size-body;
    color: v.$text-secondary;
  }

  dd {
    font-family: v.$font-family-primary;
    font-size: v.$font-size-body;
    font-weight: v.$font-weight-semibold;
    color: v.$text-primary;
    margin: 0;
  }
}

.lazy-image-container {
  position: fixed;
  bottom: -200px;
  right: -200px;
  width: 200px;
  height: 200px;
  opacity: 0;
  pointer-events: none;
}

::ng-deep .mat-mdc-form-field {
  .mat-mdc-text-field-wrapper {
    background-color: v.$background-primary;
  }
}

::ng-deep .mat-mdc-raised-button {
  border-radius: v.$border-radius-sm;
}


// === ARCHIVO: src/app/shared/components/transaction-card/transaction-card.component.ts ===
import { Component, Input, ChangeDetectionStrategy, Signal, computed } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

export interface TransactionCardData {
  id: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed' | 'reversed';
  merchantName: string;
  merchantCategory: string;
  reference: string;
  balanceAfter?: number;
}

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    DatePipe,
    CurrencyPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card class="transaction-card" [class.credit]="data.type === 'credit'" [class.debit]="data.type === 'debit'">
      <mat-card-header>
        <div mat-card-avatar class="transaction-icon" [class.credit]="data.type === 'credit'" [class.debit]="data.type === 'debit'">
          <mat-icon>{{ data.type === 'credit' ? 'arrow_downward' : 'arrow_upward' }}</mat-icon>
        </div>
        <mat-card-title>{{ data.merchantName }}</mat-card-title>
        <mat-card-subtitle>{{ data.merchantCategory }}</mat-card-subtitle>
        <div class="status-chip">
          <mat-chip [class]="'status-' + data.status">
            {{ data.status | titlecase }}
          </mat-chip>
        </div>
      </mat-card-header>
      
      <mat-card-content>
        <div class="amount-section">
          <span class="amount" [class.positive]="data.type === 'credit'" [class.negative]="data.type === 'debit'">
            {{ data.type === 'credit' ? '+' : '-' }}{{ data.amount | currency:'USD':'symbol':'1.2-2' }}
          </span>
          <span class="balance-after" *ngIf="data.balanceAfter !== undefined">
            Balance: {{ data.balanceAfter | currency:'USD':'symbol':'1.2-2' }}
          </span>
        </div>
        
        <div class="details-grid">
          <div class="detail-item">
            <span class="detail-label">Descripción</span>
            <span class="detail-value">{{ data.description }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Fecha</span>
            <span class="detail-value">{{ data.date | date:'medium' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Referencia</span>
            <span class="detail-value reference">{{ data.reference }}</span>
          </div>
          <div class="detail-item" *ngIf="data.id">
            <span class="detail-label">ID</span>
            <span class="detail-value id">{{ data.id }}</span>
          </div>
        </div>
      </mat-card-content>
      
      <mat-card-actions align="end">
        <button mat-button color="primary" (click)="onViewDetails()">
          <mat-icon>visibility</mat-icon>
          Ver Detalles
        </button>
        <button mat-button (click)="onDownloadReceipt()">
          <mat-icon>receipt</mat-icon>
          Comprobante
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .transaction-card {
      margin: 16px 0;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      border-left: 4px solid transparent;
    }
    
    .transaction-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }
    
    .transaction-card.credit {
      border-left-color: #4caf50;
    }
    
    .transaction-card.debit {
      border-left-color: #f44336;
    }
    
    mat-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 8px;
    }
    
    .transaction-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    
    .transaction-icon.credit {
      background: linear-gradient(135deg, #4caf50, #2e7d32);
    }
    
    .transaction-icon.debit {
      background: linear-gradient(135deg, #f44336, #c62828);
    }
    
    .status-chip {
      margin-left: auto;
    }
    
    .status-completed {
      background-color: #e8f5e9 !important;
      color: #2e7d32 !important;
    }
    
    .status-pending {
      background-color: #fff3e0 !important;
      color: #e65100 !important;
    }
    
    .status-failed {
      background-color: #ffebee !important;
      color: #c62828 !important;
    }
    
    .status-reversed {
      background-color: #e3f2fd !important;
      color: #1565c0 !important;
    }
    
    .amount-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid #e0e0e0;
      margin-bottom: 16px;
    }
    
    .amount {
      font-size: 24px;
      font-weight: 600;
    }
    
    .amount.positive {
      color: #2e7d32;
    }
    
    .amount.negative {
      color: #c62828;
    }
    
    .balance-after {
      font-size: 14px;
      color: #757575;
    }
    
    .details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    
    .detail-item {
      display: flex;
      flex-direction: column;
    }
    
    .detail-label {
      font-size: 12px;
      color: #9e9e9e;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .detail-value {
      font-size: 14px;
      color: #212121;
      margin-top: 4px;
    }
    
    .detail-value.reference,
    .detail-value.id {
      font-family: 'Roboto Mono', monospace;
      font-size: 12px;
    }
    
    mat-card-actions {
      padding: 8px 0;
    }
    
    mat-card-actions button {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
  `]
})
export class TransactionCardComponent {
  @Input({ required: true }) data!: TransactionCardData;
  @Input() showActions: boolean = true;
  
  private _isExpanded = false;
  
  get isExpanded(): boolean {
    return this._isExpanded;
  }
  
  readonly formattedDate: Signal<string> = computed(() => {
    if (!this.data?.date) return '';
    return new Date(this.data.date).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  });
  
  readonly formattedTime: Signal<string> = computed(() => {
    if (!this.data?.date) return '';
    return new Date(this.data.date).toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  });
  
  readonly amountClass: Signal<string> = computed(() => {
    return this.data?.type === 'credit' ? 'positive' : 'negative';
  });
  
  readonly statusColor: Signal<string> = computed(() => {
    const statusColors: Record<string, string> = {
      completed: '#2e7d32',
      pending: '#e65100',
      failed: '#c62828',
      reversed: '#1565c0'
    };
    return statusColors[this.data?.status] || '#757575';
  });
  
  toggleExpanded(): void {
    this._isExpanded = !this._isExpanded;
  }
  
  onViewDetails(): void {
    console.log(`[TransactionCard] Viewing details for transaction: ${this.data.id}`);
  }
  
  onDownloadReceipt(): void {
    console.log(`[TransactionCard] Downloading receipt for transaction: ${this.data.id}`);
  }
  
  onDisputeTransaction(): void {
    console.log(`[TransactionCard] Opening dispute dialog for transaction: ${this.data.id}`);
  }
}

// === ARCHIVO: src/assets/optimized/.gitkeep ===
# Directorio para imágenes y recursos optimizados para producción
# Usa formatos modernos como WebP para mejorar el rendimiento de carga
# Ejecuta npm run optimize:images para optimizar las imágenes de src/assets


// === ARCHIVO: src/styles/configs/variables.scss ===
// Tokens de diseño para el portal transaccional
// Sistema de diseño basado en Material Design para entidad financiera

// Paleta de colores primarios - identidad institucional
$color-primary-50: #e8f5e9;
$color-primary-100: #c8e6c9;
$color-primary-200: #a5d6a7;
$color-primary-300: #81c784;
$color-primary-400: #66bb6a;
$color-primary-500: #43a047;
$color-primary-600: #388e3c;
$color-primary-700: #2e7d32;
$color-primary-800: #1b5e20;
$color-primary-900: #1b5e20;
$color-primary: $color-primary-600;

// Colores secundarios - acentos y acciones secundarias
$color-secondary-50: #e3f2fd;
$color-secondary-100: #bbdefb;
$color-secondary-200: #90caf9;
$color-secondary-300: #64b5f6;
$color-secondary-400: #42a5f5;
$color-secondary-500: #1e88e5;
$color-secondary-600: #1976d2;
$color-secondary-700: #1565c0;
$color-secondary-800: #0d47a1;
$color-secondary: $color-secondary-600;

// Estados de la interfaz - feedback visual para el usuario
$color-success: #2e7d32;
$color-success-light: #4caf50;
$color-success-bg: #e8f5e9;

$color-warning: #ed6c02;
$color-warning-light: #ff9800;
$color-warning-bg: #fff3e0;

$color-error: #d32f2f;
$color-error-light: #f44336;
$color-error-bg: #ffebee;

$color-info: #0288d1;
$color-info-light: #03a9f4;
$color-info-bg: #e1f5fe;

// Escala de grises - neutralidad para textos y fondos
$color-gray-50: #fafafa;
$color-gray-100: #f5f5f5;
$color-gray-200: #eeeeee;
$color-gray-300: #e0e0e0;
$color-gray-400: #bdbdbd;
$color-gray-500: #9e9e9e;
$color-gray-600: #757575;
$color-gray-700: #616161;
$color-gray-800: #424242;
$color-gray-900: #212121;
$color-gray: $color-gray-700;

// Colores de fondo - jerarquía visual
$bg-color-base: #ffffff;
$bg-color-alt: $color-gray-50;
$bg-color-hover: rgba(0, 0, 0, 0.04);
$bg-color-active: rgba(0, 0, 0, 0.08);
$bg-color-overlay: rgba(0, 0, 0, 0.5);

// Tipografía del sistema
$font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$font-family-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;   // 14px
$font-size-base: 1rem;     // 16px
$font-size-lg: 1.125rem;   // 18px
$font-size-xl: 1.25rem;    // 20px
$font-size-2xl: 1.5rem;    // 24px
$font-size-3xl: 1.875rem;  // 30px
$font-size-4xl: 2.25rem;   // 36px

$font-weight-light: 300;
$font-weight-regular: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;

$line-height-tight: 1.25;
$line-height-base: 1.5;
$line-height-relaxed: 1.75;

// Sistema de espaciado - escala base 4px
$spacing-0: 0;
$spacing-1: 0.25rem;   // 4px
$spacing-2: 0.5rem;    // 8px
$spacing-3: 0.75rem;   // 12px
$spacing-4: 1rem;      // 16px
$spacing-5: 1.25rem;   // 20px
$spacing-6: 1.5rem;    // 24px
$spacing-8: 2rem;      // 32px
$spacing-10: 2.5rem;   // 40px
$spacing-12: 3rem;     // 48px
$spacing-16: 4rem;     // 64px

// Breakpoints para diseño responsive
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-2xl: 1400px;

// Contenedores - anchos máximos
$container-sm: 540px;
$container-md: 720px;
$container-lg: 960px;
$container-xl: 1140px;
$container-2xl: 1320px;

// Sistema de sombras - profundidad y jerarquía
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
$shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
$shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
$shadow-none: none;

// Radio de bordes - consistencia visual
$radius-none: 0;
$radius-sm: 0.125rem;   // 2px
$radius-base: 0.25rem;  // 4px
$radius-md: 0.375rem;   // 6px
$radius-lg: 0.5rem;     // 8px
$radius-xl: 0.75rem;    // 12px
$radius-2xl: 1rem;      // 16px
$radius-full: 9999px;

// Grosores de borde
$border-width-0: 0;
$border-width-1: 1px;
$border-width-2: 2px;
$border-width-3: 3px;
$border-width-4: 4px;
$border-width-5: 5px;

// Z-index - gestión de capas
$z-dropdown: 1000;
$z-sticky: 1020;
$z-fixed: 1030;
$z-modal-backdrop: 1040;
$z-modal: 1050;
$z-popover: 1060;
$z-tooltip: 1070;
$z-toast: 1080;

// Transiciones - optimización de rendimiento
$transition-fast: 150ms ease;
$transition-base: 200ms ease;
$transition-slow: 300ms ease;
$transition-slower: 500ms ease;

$transition-timing-ease-in: cubic-bezier(0.4, 0, 1, 1);
$transition-timing-ease-out: cubic-bezier(0, 0, 0.2, 1);
$transition-timing-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

// Duraciones para animaciones
$duration-instant: 0ms;
$duration-fast: 100ms;
$duration-normal: 200ms;
$duration-slow: 300ms;
$duration-slower: 500ms;

// Opacidades
$opacity-0: 0;
$opacity-25: 0.25;
$opacity-50: 0.5;
$opacity-75: 0.75;
$opacity-100: 1;

// Tokens específicos del dominio financiero
$color-positive: #2e7d32;
$color-negative: #c62828;
$color-pending: #f57c00;
$color-completed: #1565c0;
$color-cancelled: #757575;

$font-size-balance: 2rem;
$font-size-amount: 1.5rem;
$font-size-account: 1.125rem;

$spacing-form-field: 1.5rem;
$spacing-card-padding: 1.5rem;
$spacing-section: 2rem;

// Exportación para uso en TypeScript
:export {
  colorPrimary: $color-primary;
  colorSecondary: $color-secondary;
  colorSuccess: $color-success;
  colorError: $color-error;
  colorWarning: $color-warning;
  colorGray: $color-gray;
  fontFamilyBase: $font-family-base;
  fontSizeBase: $font-size-base;
  spacing4: $spacing-4;
  shadowMd: $shadow-md;
  radiusLg: $radius-lg;
}

// === ARCHIVO: src/styles/configs/mixins.scss ===
// Mixins reutilizables para optimización de estilos y consistencia del diseño

// Breakpoints responsive - mobile first
@mixin breakpoint-sm {
  @media (min-width: $breakpoint-sm) {
    @content;
  }
}

@mixin breakpoint-md {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin breakpoint-lg {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}

@mixin breakpoint-xl {
  @media (min-width: $breakpoint-xl) {
    @content;
  }
}

@mixin breakpoint-2xl {
  @media (min-width: $breakpoint-2xl) {
    @content;
  }
}

// Mixin para optimización de renderizado
@mixin will-change($property: auto) {
  will-change: $property;
  backface-visibility: hidden;
}

@mixin contain-layout {
  contain: layout style;
}

@mixin contain-strict {
  contain: strict;
}

// Focus visible para accesibilidad
@mixin focus-visible {
  &:focus {
    outline: none;
  }

  &:focus-visible {
    @content;
  }
}

@mixin focus-ring {
  @include focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
}

// Tipografía responsiva
@mixin heading-1 {
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  letter-spacing: -0.025em;

  @include breakpoint-md {
    font-size: 2.5rem;
  }

  @include breakpoint-lg {
    font-size: $font-size-4xl;
  }
}

@mixin heading-2 {
  font-size: $font-size-2xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-tight;
  letter-spacing: -0.025em;

  @include breakpoint-md {
    font-size: 1.75rem;
  }

  @include breakpoint-lg {
    font-size: $font-size-2xl;
  }
}

@mixin heading-3 {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-base;

  @include breakpoint-md {
    font-size: 1.25rem;
  }

  @include breakpoint-lg {
    font-size: $font-size-xl;
  }
}

@mixin body-text {
  font-size: $font-size-base;
  font-weight: $font-weight-regular;
  line-height: $line-height-base;
}

@mixin caption-text {
  font-size: $font-size-sm;
  font-weight: $font-weight-regular;
  line-height: $line-height-base;
  color: $color-gray-600;
}

// Flexbox utilities
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@mixin flex-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

@mixin flex-column {
  display: flex;
  flex-direction: column;
}

@mixin flex-wrap {
  display: flex;
  flex-wrap: wrap;
}

// Grid system
@mixin grid-auto-fit($min-width: 280px, $gap: $spacing-4) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min-width, 1fr));
  gap: $gap;
}

@mixin grid($columns: 1, $gap: $spacing-4) {
  display: grid;
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}

// Layout containers
@mixin container {
  width: 100%;
  max-width: $container-xl;
  margin-left: auto;
  margin-right: auto;
  padding-left: $spacing-4;
  padding-right: $spacing-4;

  @include breakpoint-md {
    padding-left: $spacing-6;
    padding-right: $spacing-6;
  }
}

@mixin container-narrow {
  @include container;
  max-width: $container-lg;
}

// Cards y superficies
@mixin card-base {
  background-color: $bg-color-base;
  border-radius: $radius-lg;
  box-shadow: $shadow-base;
  border: 1px solid $color-gray-200;
}

@mixin card-interactive {
  @include card-base;
  transition: box-shadow $transition-base, transform $transition-base;
  cursor: pointer;

  &:hover {
    box-shadow: $shadow-md;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: $shadow-base;
  }
}

// Botones
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-2 $spacing-4;
  font-family: $font-family-base;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  line-height: 1;
  border-radius: $radius-md;
  border: $border-width-1 solid transparent;
  cursor: pointer;
  transition: all $transition-base;
  text-decoration: none;
  white-space: nowrap;

  &:disabled {
    opacity: $opacity-50;
    cursor: not-allowed;
    pointer-events: none;
  }
}

@mixin button-primary {
  @include button-base;
  background-color: $color-primary;
  color: white;

  &:hover:not(:disabled) {
    background-color: $color-primary-700;
  }

  &:active:not(:disabled) {
    background-color: $color-primary-800;
  }
}

@mixin button-secondary {
  @include button-base;
  background-color: transparent;
  color: $color-primary;
  border-color: $color-primary;

  &:hover:not(:disabled) {
    background-color: rgba($color-primary, 0.08);
  }

  &:active:not(:disabled) {
    background-color: rgba($color-primary, 0.16);
  }
}

@mixin button-ghost {
  @include button-base;
  background-color: transparent;
  color: $color-gray-700;

  &:hover:not(:disabled) {
    background-color: $bg-color-hover;
  }

  &:active:not(:disabled) {
    background-color: $bg-color-active;
  }
}

// Formularios
@mixin input-base {
  width: 100%;
  padding: $spacing-2 $spacing-3;
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $color-gray-900;
  background-color: $bg-color-base;
  border: 1px solid $color-gray-300;
  border-radius: $radius-md;
  transition: border-color $transition-fast, box-shadow $transition-fast;

  &::placeholder {
    color: $color-gray-500;
  }

  &:hover:not(:disabled):not(:focus) {
    border-color: $color-gray-400;
  }

  &:focus {
    outline: none;
    border-color: $color-primary;
    box-shadow: 0 0 0 3px rgba($color-primary, 0.15);
  }

  &:disabled {
    background-color: $color-gray-100;
    cursor: not-allowed;
  }
}

@mixin label-base {
  display: block;
  margin-bottom: $spacing-1;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-gray-700;
}

// Truncate text
@mixin text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@mixin text-clamp($lines: 2) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Visually hidden - accesible
@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

// Animaciones optimizadas para rendimiento
@mixin fade-in($duration: $duration-normal) {
  animation: fadeIn $duration $transition-timing-ease-out forwards;
}

@mixin slide-up($duration: $duration-normal) {
  animation: slideUp $duration $transition-timing-ease-out forwards;
}

@mixin pulse {
  animation: pulse 2s $transition-timing-ease-in-out infinite;
}

// Skeleton loading
@mixin skeleton {
  background: linear-gradient(
    90deg,
    $color-gray-200 25%,
    $color-gray-100 50%,
    $color-gray-200 75%
  );
  background-size: 200% 100%;
  animation: skeleton 1.5s ease-in-out infinite;
  border-radius: $radius-base;
}

// Scrollbar personalizada
@mixin custom-scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: $color-gray-100;
    border-radius: $radius-full;
  }

  &::-webkit-scrollbar-thumb {
    background: $color-gray-400;
    border-radius: $radius-full;

    &:hover {
      background: $color-gray-500;
    }
  }
}

// Overlay
@mixin overlay($z-index: $z-modal-backdrop) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $bg-color-overlay;
  z-index: $z-index;
}

// Smooth scroll
@mixin smooth-scroll {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

// Hide scrollbar but keep functionality
@mixin hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}


// === ARCHIVO: reports/performance-analysis.md ===
# Informe de Análisis de Rendimiento - Portal Transaccional

## Resumen Ejecutivo

El presente informe documenta el análisis de rendimiento realizado sobre el portal transaccional de la entidad financiera, identificando los principales cuellos de botella que afectan el tiempo de carga actual de **8 segundos** frente al objetivo de **3 segundos**. El análisis fue ejecutado utilizando Lighthouse y Chrome DevTools, siguiendo las mejores prácticas de rendimiento web y los Core Web Vitals como criterio de evaluación.

## Metodología de Análisis

### Herramientas Utilizadas

- **Lighthouse v12.0.0**: Auditoría completa de rendimiento, accesibilidad, mejores prácticas y SEO
- **Chrome DevTools (Performance, Network, Memory)**: Análisis profundo de timeline, carga de recursos y consumo de memoria
- **Angular DevTools**: Inspección del árbol de componentes y change detection
- **Webpack Bundle Analyzer**: Análisis del tamaño de bundles y dependencias

### Entorno de Prueba

| Parámetro | Valor |
|-----------|-------|
| Navegador | Chrome 120+ (Headless) |
| Red | Simulación 4G Fast |
| CPU | Throttling 4x slowdown |
| Estado caché | Cold Start |
| Resolución | 1920x1080 |

## Hallazgos Principales

### 1. Tamaño Inicial del Bundle

**Valor Actual**: 1.2 MB (excede el budget de 500kb en 140%)
**Valor Objetivo**: < 500 KB

El análisis reveló que el bundle principal contiene la totalidad del código de la aplicación, incluyendo módulos que podrían cargarse de forma diferida. El desglose por chunk muestra:

- `main.js`: 780 KB (código de aplicación + Angular core)
- `polyfills.js`: 180 KB
- `runtime.js`: 85 KB
- `vendor.js`: 155 KB

### 2. Tiempo de Bloqueo de Renderizado (TBT)

**Valor Actual**: 1,850 ms
**Valor Objetivo**: < 200 ms

El Total Blocking Time excede significativamente el umbral recomendado. Las causas identificadas incluyen:

- Ejecución de scripts de terceros durante el bootstrap
- Inicialización de Angular Zone.js con detección de cambios agresiva
- Hydration de componentes con templates complejos

### 3. Largest Contentful Paint (LCP)

**Valor Actual**: 6.2 segundos
**Valor Objetivo**: < 2.5 segundos

El LCP se dispara porque el contenido principal (tabla de transacciones) depende de datos del backend. La cadena de dependencias bloquea la renderización:

1. Carga de scripts iniciales (1.2s)
2. Bootstrap de Angular (0.8s)
3. Inicialización de módulos (1.5s)
4. Fetch de datos de transacciones (2.2s)

### 4. Cumulative Layout Shift (CLS)

**Valor Actual**: 0.18
**Valor Objetivo**: < 0.1

Se detectaron shifts durante la carga de imágenes de avatares de usuario y la renderización de la tabla de transacciones, causados por:

- Imágenes sin dimensiones explícitas
- Carga diferida de componentes que alteran el layout
- Inserción dinámica de elementos en el DOM

### 5. Solicitudes HTTP Bloqueantes

Se identificaron **23 solicitudes sin paralelizar** durante el inicio, incluyendo:

- 5 archivos de fuentes (Google Fonts blocking render)
- 3 scripts de analytics y tracking
- 2 hojas de estilos CSS no críticas
- 13 imágenes de assets

## Análisis Detallado por Área

### 6. Rendimiento de Componentes Angular

El análisis con Angular DevTools reveló que el componente `TransactionsComponent` utiliza:

- **ChangeDetectionStrategy.Default**: Forza detección de cambios en cada evento del navegador
- **Carga síncrona de datos**: Sin uso de skeletons o estados de carga optimizados
- **Pipe sin memoización**: Filtros de fecha y moneda recalculan en cada ciclo

### 7. Gestión de Estado

El servicio `TransactionService` implementa un patrón reactivo con RxJS, pero:

- Cache en memoria sin política de expiración configurable
- Sin uso de Angular Signals para estado local
- Suscripciones sin unsubscribe explícito (potential memory leaks)

### 8. Renderizado de Lista de Transacciones

La tabla de transacciones renderiza **todos los registros** simultáneamente:

- 500+ elementos DOM para una página típica
- Sin virtual scrolling implementado
- Cada fila contiene 8 columnas con pipes de formato

## Propuestas de Mejora

### Prioridad Alta (Impacto > 500ms)

| # | Mejora | Impacto Estimado | Esfuerzo |
|---|--------|------------------|----------|
| 1 | Implementar Lazy Loading para rutas secundarias | -800ms | Bajo |
| 2 | Habilitar ChangeDetectionStrategy.OnPush | -400ms | Bajo |
| 3 | Implementar Virtual Scrolling en tablas | -600ms | Medio |
| 4 | Optimizar imágenes con WebP + lazy loading | -350ms | Bajo |
| 5 | Eliminar scripts de terceros del crítico path | -300ms | Bajo |

### Prioridad Media (Impacto 200-500ms)

| # | Mejora | Impacto Estimado | Esfuerzo |
|---|--------|------------------|----------|
| 6 | Implementar Skeleton Loaders | -250ms | Medio |
| 7 | Migrar a Angular Signals | -200ms | Alto |
| 8 | Configurar Service Worker para offline | -180ms | Medio |
| 9 | Comprimir y splitear fuentes | -150ms | Bajo |
| 10 | Implementar HTTP caching con interceptores | -200ms | Bajo |

### Prioridad Baja (Impacto < 200ms)

- Reducir uso de third-party libraries
- Implementar preloading de rutas
- Optimizar CSS crítica con critical CSS inlining
- Configurar prefetching de recursos

## Recomendaciones de Implementación

### Fase 1: Optimizaciones Inmediatas (1-2 días)

1. Activar `ChangeDetectionStrategy.OnPush` en todos los componentes
2. Implementar lazy loading en el módulo de transacciones
3. Agregar dimensiones explícitas a todas las imágenes
4. Mover scripts de terceros fuera del `<head>`

### Fase 2: Optimizaciones Estructurales (1 semana)

1. Implementar Angular CDK Virtual Scroll
2. Migrar a Signals para estado local
3. Configurar budgets más estrictos en angular.json
4. Implementar skeleton loaders

### Fase 3: Optimizaciones Avanzadas (2 semanas)

1. Implementar Service Worker con Workbox
2. Configurar Edge Caching con CDN
3. Implementar SSR con Angular Universal (Hydration)
4. Optimizar bundle con tree-shaking avanzado

## Conclusión

El análisis demuestra que el portal transaccional tiene un potencial de reducción de tiempo de carga del **62.5%** (de 8s a 3s) mediante la implementación de las optimizaciones propuestas. Las mejoras de mayor impacto son la migración a lazy loading y la implementación de virtual scrolling, que en conjunto pueden reducir el TTI en más de 1.4 segundos.

## Métricas Objetivo Post-Optimización

| Métrica | Actual | Objetivo | Prioridad |
|---------|--------|----------|----------|
| TTI | 8.0s | 3.0s | Crítica |
| LCP | 6.2s | 2.5s | Crítica |
| TBT | 1,850ms | 200ms | Alta |
| CLS | 0.18 | 0.1 | Media |
| Bundle Size | 1.2MB | 450KB | Alta |

---
*Informe generado con Lighthouse v12.0.0 y Chrome DevTools* | *Fecha: 2024* | *Versión del portal: 1.0.0*

// === ARCHIVO: reports/load-test-results.md ===
# Documentación de Resultados de Prueba de Carga - Portal Transaccional

## Resumen de Ejecución

Este documento registra los resultados definitivos de las pruebas de carga realizadas sobre el portal transaccional después de implementar las mejoras de rendimiento identificadas en el análisis de la Fase 1. Las pruebas validan el cumplimiento de los objetivos de rendimiento bajo condiciones de producción simuladas.

## Objetivos de Rendimiento

| Métrica | Valor Inicial | Objetivo | Resultado Final | Estado |
|---------|---------------|----------|-----------------|--------|
| Tiempo de Carga (TTI) | 8.0s | 3.0s | 2.8s | ✓ CUMPLIDO |
| Largest Contentful Paint | 6.2s | 2.5s | 2.1s | ✓ CUMPLIDO |
| Total Blocking Time | 1,850ms | 200ms | 185ms | ✓ CUMPLIDO |
| Cumulative Layout Shift | 0.18 | 0.1 | 0.06 | ✓ CUMPLIDO |
| Tasa de Error HTTP | N/A | < 0.1% | 0.02% | ✓ CUMPLIDO |

## Configuración de Pruebas

### Escenario de Carga

| Parámetro | Valor |
|-----------|-------|
| Usuarios Simultáneos | 10,000 |
| Duración de Prueba | 30 minutos |
| Rampa de Entrada | 5 minutos (gradual) |
| Patrón de Tráfico | Picos en minutos 10, 18, 25 |
| Think Time | 3-7 segundos (distribución uniforme) |
| География | Latencia simulada: US-East (50ms), EU-West (120ms), SA-East (180ms) |

### Infraestructura de Prueba

- **Load Balancer**: NGINX con configuración de balanceo round-robin
- **Servidor de Aplicación**: Node.js v18 con cluster de 8 workers
- **Base de Datos**: PostgreSQL 15 con replica de lectura
- **Caché**: Redis 7.2 con persistencia RDB
- **CDN**: CloudFront configurado con edge locations en 6 regiones

## Resultados Detallados por Métrica

### 1. Tiempo de Carga Inicial (TTI)

```
Distribución de TTI (muestra: 50,000 solicitudes)
================================================
Percentil 50% (P50): 2.4s
Percentil 90% (P90): 3.1s
Percentil 95% (P95): 3.8s
Percentil 99% (P99): 4.5s
Valor Máximo: 5.2s
Media: 2.8s
Desviación Estándar: 0.6s
```

El tiempo de carga se redujo en un **65%** respecto al valor inicial de 8 segundos. La mejora se atribuye principalmente a:

- Lazy loading implementado en módulos secundarios (-800ms)
- Virtual scrolling en tablas de transacciones (-600ms)
- Optimización de imágenes con WebP (-350ms)
- Change Detection Strategy OnPush (-400ms)

### 2. Largest Contentful Paint (LCP)

```
Distribución de LCP (muestra: 50,000 solicitudes)
================================================
Percentil 50% (P50): 1.8s
Percentil 90% (P90): 2.4s
Percentil 95% (P95): 2.9s
Percentil 99% (P99): 3.5s
Valor Máximo: 4.1s
Media: 2.1s
```

La optimización del Critical Rendering Path redujo el LCP en un **66%**. Los skeleton loaders implementados mejoran la percepción del usuario durante la carga de datos.

### 3. Throughput y Capacidad

```
Métricas de Throughput
======================
Solicitudes Totales: 1,847,293
Solicitudes Exitosas: 1,846,883 (99.98%)
Solicitudes Fallidas: 410 (0.02%)
Tiempo Promedio por Solicitud: 145ms
Tiempo Máximo por Solicitud: 2.3s
Solicitudes por Segundo (RPS): 1,025 avg, 1,450 peak
```

El portal soporta una tasa de **1,450 solicitudes por segundo** en pico, superando el requisito de 500 TPS establecido en el SLA.

### 4. Uso de Recursos del Cliente

| Recurso | Utilización Promedio | Pico | Umbral Crítico |
|---------|---------------------|------|----------------|
| CPU (Main Thread) | 28% | 52% | 70% |
| Memoria JS Heap | 45MB | 78MB | 150MB |
| Network Bandwidth | 2.1 MB/s | 4.8 MB/s | 10 MB/s |
| DOM Nodes | 1,250 | 2,100 | 5,000 |

La implementación de virtual scrolling mantuvo el número de DOM nodes en niveles óptimos incluso con grandes volúmenes de datos.

### 5. Distribución Geográfica

| Región | Latencia Promedio | P95 | Disponibilidad |
|--------|-------------------|-----|----------------|
| US-East | 45ms | 85ms | 99.98% |
| US-West | 78ms | 120ms | 99.95% |
| EU-West | 115ms | 165ms | 99.92% |
| SA-East | 165ms | 220ms | 99.89% |
| AP-South | 195ms | 280ms | 99.85% |

## Ajustes Realizados Post-Prueba

### Ajuste 1: Optimización de Cache HTTP

**Problema detectado**: Alto volumen de solicitudes重复idas para assets estáticos.

**Solución implementada**: Se ajustó la configuración de headers de caché en el CDN:

```nginx
# Configuración optimizada de caché
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
}

location /api/ {
    expires -1;
    add_header Cache-Control "no-store, must-revalidate";
}
```

**Resultado**: Reducción del 34% en tráfico hacia el origin server.

### Ajuste 2: Tuning de Conexiones de Base de Datos

**Problema detectado**: Timeouts ocasionales en consultas de transacciones durante picos.

**Solución implementada**: Optimización de pool de conexiones y agregar índices:

```sql
-- Índices agregados para optimizar consultas frecuentes
CREATE INDEX idx_transactions_user_date 
ON transactions(user_id, created_at DESC);

CREATE INDEX idx_transactions_status 
ON transactions(status) WHERE status != 'completed';

-- Configuración de pool
-- max_connections: 100 → 200
-- connection_timeout: 30s → 10s
-- idle_timeout: 600s → 300s
```

**Resultado**: Reducción del 89% en tiempo de consulta promedio (de 180ms a 20ms).

### Ajuste 3: Compression de Fonts

**Problema detectado**: Carga bloqueante de fuentes web.

**Solución implementada**: Se migró a WOFF2 con preloading y display:swap:

```html
<link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/inter-var.woff2') format('woff2');
    font-display: swap;
  }
</style>
```

**Resultado**: Eliminación de FOIT (Flash of Invisible Text), mejora de 280ms en LCP.

### Ajuste 4: Optimización de Bundle con Code Splitting

**Problema detectado**: Bundle inicial excede el budget configurado.

**Solución implementada**: Configuración agresiva de lazy loading y tree-shaking:

```typescript
// routes.ts - Lazy loading implementado
export const routes: Routes = [
  {
    path: 'transactions',
    loadComponent: () => import('./features/transactions/transactions.component')
      .then(m => m.TransactionsComponent),
    loadChildren: () => import('./features/transactions/transactions.routes')
      .then(m => m.TRANSACTIONS_ROUTES)
  },
  {
    path: 'reports',
    loadComponent: () => import('./features/reports/reports.component')
      .then(m => m.ReportsComponent)
  }
];
```

**Resultado**: Bundle inicial reducido de 1.2MB a 380KB (68% reducción).

## Validación de SLA

### Requisitos de Disponibilidad

| Requisito | Objetivo | Resultado | Margen |
|-----------|----------|-----------|--------|
| Uptime | 99.9% | 99.97% | +0.07% |
| Tiempo de respuesta P95 | < 3s | 3.8s | -0.8s ⚠️ |
| Tiempo de respuesta P99 | < 5s | 4.5s | +0.5s |
| Tasa de error | < 0.1% | 0.02% | +0.08% |

**Nota**: El P95 de respuesta (3.8s) excede ligeramente el objetivo de 3 segundos. Este resultado se atribuye a latencias de red en regiones lejanas y se mitiga mediante la implementación de CDN con edge computing.

### Capacidad de Tráfico

| Métrica | Requisito | Resultado | Estado |
|---------|-----------|-----------|--------|
| Usuarios simultáneos | 10,000 | 10,000 | ✓ |
| Transacciones por segundo | 500 | 1,450 | ✓ |
| Pico de solicitudes | N/A | 12,500 | ✓ |

## Recomendaciones para Fase de Producción

### Monitoreo Continuo

Se recomienda implementar dashboards en tiempo real con las siguientes métricas:

- **Core Web Vitals** por URL y navegador
- **Error Rate** por tipo de error y endpoint
- **Latencia P50/P95/P99** por geografía
- **Utilización de recursos** del cliente (RUM)

### Alerts Configurados

| Alerta | Condición | Severidad | Canal |
|--------|-----------|-----------|-------|
| LCP > 4s | Por más de 5 minutos | Crítico | Slack + PagerDuty |
| TBT > 500ms | Tasa > 5% | Alto | Email |
| Error Rate > 0.5% | Por más de 2 minutos | Crítico | Slack + PagerDuty |
| CPU Client > 80% | Por más de 10 minutos | Medio | Email |

### Próximas Iteraciones

1. **Corto plazo**: Implementar Angular Universal con hydration para mejorar TTI en dispositivos de gama baja
2. **Mediano plazo**: Migrar a micro-frontends con Module Federation para mejor aislamiento de módulos
3. **Largo plazo**: Implementar Edge Side Rendering con Cloudflare Workers

## Conclusión

Las pruebas de carga confirman que el portal transaccional cumple con los objetivos de rendimiento establecidos, logrando una reducción del **65%** en el tiempo de carga (de 8s a 2.8s). El sistema soporta la carga de 10,000 usuarios simultáneos con una disponibilidad del 99.97%, superando el SLA comprometido del 99.9%.

Los ajustes realizados durante la fase de pruebas optimizaron el uso de recursos y redujeron la carga sobre los componentes de backend, garantizando estabilidad durante picos de tráfico.

---
*Documento generado el 2024* | *Versión del portal: 1.0.0* | *Responsable: Equipo de Performance*
```
