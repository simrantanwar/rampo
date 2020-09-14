import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { SidemenuComponent } from './shared-component/sidemenu/sidemenu.component';
import { HeaderComponent } from './shared-component/header/header.component';
import { FooterComponent } from './shared-component/footer/footer.component';
import { LoaderComponent } from './shared-component/loader/loader.component';
import { ToasterComponent } from './shared-component/toaster/toaster.component';
import { LoaderService } from './shared-services/loader.service';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BreadcrumbModule} from 'angular-crumbs';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DateTimeFormatService } from './shared-services/date-time-format.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SidemenuComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ToasterComponent],

  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    BreadcrumbModule,
    MatCardModule,
    MatTabsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  exports: [
    // MAT EXPORTS
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    BreadcrumbModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // REACTIVE FORM MODULE
    ReactiveFormsModule,
    
    // PRIME NG TOAST
    ToastModule,
    MessagesModule,
    MessageModule,
    // SHARED COMPONENTS
    SidemenuComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    ToasterComponent

  ],
  providers:[LoaderService, MessageService, DateTimeFormatService,MatDatepickerModule]
})
export class SharedModule { }
