import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {EmployeeListComponent} from '../employees/employee-list/employee-list.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatSliderModule} from '@angular/material/slider'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[EmployeeListComponent
    ]
})
export class EmployesModule { }
