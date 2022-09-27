import { Routes } from '@angular/router';
import { WelcomeComponent } from "../participant/welcome/welcome.component";
import { ParticipantGuard } from "../core/guards/participant.guard";

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(e => e.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(e => e.AdminModule)
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [ParticipantGuard]
  }
];
