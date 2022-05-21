import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingComponents, AdminRoutingModule } from './admin-routing.module';
import { Header1Component } from '../header1/header1.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';


@NgModule({
  declarations: [
    AdminRoutingComponents,
    Header1Component,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
