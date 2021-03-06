import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : 'menu',
    children : [
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'list-employee',
        component : ListEmployeeComponent
      },
      {
        path : 'add-employee',
        component : AddEmployeeComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
