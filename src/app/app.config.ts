import { ApplicationConfig, ɵprovideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ɵprovideZonelessChangeDetection(),
    provideTanStackQuery(new QueryClient(), withDevtools())
  ]
};
