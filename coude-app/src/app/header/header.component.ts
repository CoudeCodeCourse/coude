import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  constructor() { }
  
  // collapseHeader(id: any) {
  //   let x = document.getElementById(id);
  //   // for (i of x) {
  //   if (x.className === "header__container") {
  //       x.className += " responsive";
  //   } else {
  //       x.className = "header__container";
  //   }
  ngOnInit(): void {
  }

}
