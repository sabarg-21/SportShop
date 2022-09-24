import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/employees/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/employees/edit-customer/edit-customer.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent
  },
  {
    path: 'employees',
    component : EmployeesListComponent
  },
  {
    path: 'employees/add',
    component : AddCustomerComponent
  },
  {
    path: 'employees/edit/:id',
    component : EditCustomerComponent
  },
  {
    path: 'items',
    component : ItemsListComponent
  },
  {
    path: 'items/add',
    component : AddItemComponent
  },
  {
    path: 'items/edit/:id',
    component : EditItemComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
