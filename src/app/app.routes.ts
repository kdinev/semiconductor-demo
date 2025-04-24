import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { UnitsAndProcessStatusComponent } from './units-and-process-status/units-and-process-status.component';
import { View2Component } from './view-2/view-2.component';
import { View3Component } from './view-3/view-3.component';

export const routes: Routes = [
  { path: '', redirectTo: 'units-and-process-status', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'units-and-process-status', component: UnitsAndProcessStatusComponent, data: { text: 'Units-And-Process-Status' } },
  { path: 'view-2', component: View2Component, data: { text: 'View2' } },
  { path: 'view-3', component: View3Component, data: { text: 'View3' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
