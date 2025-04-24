import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { UnitsAndProcessStatusComponent } from './units-and-process-status/units-and-process-status.component';
import { GeneralHealthStatusComponent } from './general-health-status/general-health-status.component';

export const routes: Routes = [
  { path: '', redirectTo: 'units-and-process-status', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'units-and-process-status', component: UnitsAndProcessStatusComponent, data: { text: 'Units-And-Process-Status' } },
  { path: 'general-health-status', component: GeneralHealthStatusComponent, data: { text: 'General-Health-Status' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
