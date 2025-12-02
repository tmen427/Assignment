import { Routes } from '@angular/router';
import { UserManagementComponent } from '../components/user-management-component/user-management-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UserManagementComponent },
  { path: '**', component: UserManagementComponent },
];
