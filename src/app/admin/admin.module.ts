import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingComponents, AdminRoutingModule } from './admin-routing.module';
// import { Header1Component } from '../header1/header1.component';
// import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableHeader } from 'src/directives/sortable.directive';
import { AdminHomeComponent } from '../admin-home/admin-home.component';



@NgModule({
  declarations: [
    AdminRoutingComponents,
    // Header1Component,
    // AdminHeaderComponent,
    AdminComponent, 
    NgbdSortableHeader, 
    AdminHomeComponent,
    // NgbdTableSortable 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminComponent, AdminHomeComponent, NgbdSortableHeader],
  bootstrap: [AdminComponent]
})
export class AdminModule {}

