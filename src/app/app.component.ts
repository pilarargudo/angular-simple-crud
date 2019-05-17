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

  addOrEdit(){
    // si no hay ninguno seleccionado
    if(this.selectedEmployee.id === 0){
      // generamos nuevo id
      this.selectedEmployee.id = this.employeeArray.length + 1;
      // lo guardamos como nuevo con selectedEmployee
      this.employeeArray.push(this.selectedEmployee);
    } 
    // generamos nuevo y limpiamos input
    this.selectedEmployee = new Employee();
  }

  // le pasamos un employee de tipo Employee
  openForEdit(employee: Employee){
    // TODO deselect!
    this.selectedEmployee = employee;
  }

  delete(){
    // TODO modal bootstrap and name employee
    if(confirm('Are you sure you want to delete this employee?')){
      // actualizamos el array sin el seleccionado
      this.employeeArray = this.employeeArray.filter( employee => employee != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

}