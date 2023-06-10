import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
