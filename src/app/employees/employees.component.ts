import { Component, OnInit } from '@angular/core';
import  {EmployeeListComponent} from './employee-list/employee-list.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

}
