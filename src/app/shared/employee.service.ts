import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private firebase: AngularFireDatabase, private datePipe: DatePipe) { }

  employeeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    empid: new FormControl('', Validators.required),
    department: new FormControl(0),
    hireDate: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      empid: '',
      department: 0,
      hireDate: '',
    });
  }


  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      empid: employee.empid,
      department: employee.department,
       hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
    });
  }

  updateEmployee(employee) {
    this.employeeList.update(employee.$key,
      {
        fullName: employee.fullName,
        email: employee.email,
        empid: employee.empid,
        department: employee.department,
         hireDate: employee.hireDate == "" ? "" : this.datePipe.transform(employee.hireDate, 'yyyy-MM-dd'),
      });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }

  populateForm(employee) {
    this.form.setValue(_.omit(employee,'departmentName'));
  }
}
