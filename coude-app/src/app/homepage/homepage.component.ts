import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [Title]
})
export class HomepageComponent implements OnInit {

  constructor(private _title: Title) {
    this._title.setTitle("Homepage")
   }

  ngOnInit(): void {
  }

}
