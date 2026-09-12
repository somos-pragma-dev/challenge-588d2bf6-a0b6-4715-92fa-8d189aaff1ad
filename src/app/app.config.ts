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