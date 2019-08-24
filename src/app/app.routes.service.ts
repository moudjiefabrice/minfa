

import { VehiculComponent } from './views/vehicul/vehicul1/vehicul.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import {LoginComponent} from "./login-layout/login/login.component";
import {AuthGuard} from "./guard/auth.guard";



const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'minfa/login' },
    { path: 'minfa', children:
        [
            { path: 'login', component: LoginComponent, },
        ]
    },

    { path: 'minfa', children:
    [
      { path: 'dashboard', component: Dashboard1Component , canActivate: [AuthGuard  ] },
    ]
  },
  { path: 'vehicules', children:
    [
      { path: 'vehicul1', component: VehiculComponent, canActivate: [AuthGuard  ] },
    ]
  },

  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
