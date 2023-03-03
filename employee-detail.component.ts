import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employee-detail',
  template: `<ul *ngFor="let employee of employees">
  <li>{{ employee.name }}</li>
 </ul>`,
  styles: []
})

export class EmployeeDetailComponent implements OnInit {

  public employees: { id: number, name: string, age: number }[] = [];
  constructor(private _employeService : EmployeService){

  }
  ngOnInit(){
    this.employees = this._employeService.getEmployees();
    
  }
}