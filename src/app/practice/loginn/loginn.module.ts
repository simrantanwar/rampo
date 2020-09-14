import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginnComponent } from './loginn.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';
import { BooksListComponent } from '../books-list/books-list.component';


const routes:Routes = [
  {path : '', component:LoginnComponent},
  {path : 'book-list' , component:BooksListComponent}
]

@NgModule({
  declarations: [LoginnComponent],
  imports: [
    CommonModule,
     SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LoginnModule { }
