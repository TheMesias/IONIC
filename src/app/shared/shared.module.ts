import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginInputComponent } from './components/login-input/login-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInputComponent,
    LogoComponent,
    UpdateEmployeeComponent
  ],
  exports: [
    HeaderComponent,
    LoginInputComponent,
    LogoComponent,
    UpdateEmployeeComponent,
    FormsModule,
    ReactiveFormsModule,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class SharedModule { }
