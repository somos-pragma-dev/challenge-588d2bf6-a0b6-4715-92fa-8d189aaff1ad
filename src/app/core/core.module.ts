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