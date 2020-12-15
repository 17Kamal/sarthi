import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import  {EmployeesComponent} from './employees/employees.component';
import  {EmployeeComponent} from './employees/employee/employee.component';


import { DatePipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router'
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatSliderModule} from '@angular/material/slider'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';





import { EmployeeService } from './shared/employee.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { DepartmentService } from './shared/department.service';
import { EmployesModule } from './employes/employes.module';
// import { EmployeesModule } from './employees/employees/employees.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    MatFormFieldModule,
    // EmployeesModule,
    MatSnackBarModule,
    EmployesModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule


  ],
  providers: [EmployeeService,DepartmentService,DatePipe],
  bootstrap: [AppComponent],
  exports: [ MatFormFieldModule, MatInputModule,
    MatGridListModule ],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }
