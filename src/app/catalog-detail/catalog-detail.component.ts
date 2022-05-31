import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
  courses: any;
  errMess: string ="";

  constructor(private _services: CatalogService) { }

  ngOnInit(): void {
    this._services.getSampleData().subscribe({
      next: data => this.courses = data,
      error: err => this.errMess = err })
  }
}
