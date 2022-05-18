import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  // term: string;
  courses: any;
  errMess: string ="";


  constructor(private _services: CatalogService) { }

  ngOnInit(): void {
    this._services.getSampleData().subscribe({
      next: data => this.courses = data,
      error: err => this.errMess = err
     })
  }

}
