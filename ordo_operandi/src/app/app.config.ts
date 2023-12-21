import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CombatPatrolListComponent } from './combat-patrol-list/combat-patrol-list.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
