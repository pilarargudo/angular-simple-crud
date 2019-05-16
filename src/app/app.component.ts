import { Component } from '@angular/core';

import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular simple crud';

  // employeeArray: Employee[];
  employeeArray: Employee[] = [
    {id: 1, name: 'María', country: 'Spain'},
    {id: 2, name: 'Antonio', country: 'Colombia'},
    {id: 3, name: 'Jane', country: 'USA'}
  ];

  // ngModel directive
  // variable propiedad de la clase de tipo Employee
  selectedEmployee: Employee = new Employee();
  
  // method

}