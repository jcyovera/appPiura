import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeopleRegisterComponent } from "./people-register/people-register.component";
import { RefugeeRegisterComponent} from "./refugee-register/refugee-register.component";
import { CanActivateAuthGuard } from './shared/can-active.service';
import { RouteComponent } from './shared/route.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RouteComponent,
    canActivate: [CanActivateAuthGuard],
    canActivateChild: [CanActivateAuthGuard],
    children: [
      { path: '', component: PeopleRegisterComponent }
    ]
  },
  {
    path: 'refugee',
    component: RouteComponent,
    canActivate: [CanActivateAuthGuard],
    canActivateChild: [CanActivateAuthGuard],
    children: [
      { path: '', component: RefugeeRegisterComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
