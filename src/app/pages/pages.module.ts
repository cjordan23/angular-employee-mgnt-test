import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListEmployeeComponent,
    AddEmployeeComponent,
    DetailEmployeeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
