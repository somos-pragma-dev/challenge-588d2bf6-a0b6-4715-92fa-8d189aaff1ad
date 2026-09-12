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