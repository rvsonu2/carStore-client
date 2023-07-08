import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule} from '@angular/common/http';

const routes: Routes = [{ path: '', component: RegistrationComponent}]

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  bootstrap:[RegistrationComponent]
})
export class RegistrationModule { }
