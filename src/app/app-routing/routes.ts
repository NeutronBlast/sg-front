import { Routes } from '@angular/router';
import { WelcomeComponent } from "../participant/welcome/welcome.component";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(e => e.AuthModule)
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  }
];
