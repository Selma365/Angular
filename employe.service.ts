import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name": "Ansa", "age": 40},
      {"id":2, "name": "Ema", "age": 16},
      {"id":3, "name": "Liam", "age": 25},
      {"id":4, "name": "Henry", "age": 34},
    ];
  }
}
