import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addEmployeeRequest: Employee={
    id:'',
    name:'',
    email:'',
    phone:0
  }
  constructor(private employeeService: EmployeesService,private router: Router) { }

  ngOnInit(): void {
  }
  addEmployee()
  {
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>
      {
        this.router.navigate(['employees']);
      }
    });
  }

}
