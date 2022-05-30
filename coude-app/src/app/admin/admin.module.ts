import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingComponents, AdminRoutingModule } from './admin-routing.module';
import { Header1Component } from '../header1/header1.component';
// import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminRoutingComponents,
    Header1Component,
    // AdminHeaderComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
