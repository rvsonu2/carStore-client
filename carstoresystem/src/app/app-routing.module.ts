import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./widgets/home/home.module').then(m => m.HomeModule) },
  { path: 'header', loadChildren: () => import('./widgets/header/header.module').then(m => m.HeaderModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
