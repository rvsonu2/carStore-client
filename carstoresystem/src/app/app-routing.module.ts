import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./widgets/home/home.module').then(m => m.HomeModule) },
  { path: 'header', loadChildren: () => import('./widgets/header/header.module').then(m => m.HeaderModule) },
  { path: 'login', loadChildren: () => import('./widgets/login/login.module').then(m => m.LoginModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'registration', loadChildren: () => import('./widgets/registration/registration.module').then(m => m.RegistrationModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
