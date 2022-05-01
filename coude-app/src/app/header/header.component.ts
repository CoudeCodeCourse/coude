import { Component, OnInit } from '@angular/core';
// import { SearchFilterPipe } from '../pipe/searchFilter.pipe';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  })
export class HeaderComponent implements OnInit {
  // guest = false;
  login = true;
  admin = false;
  searchText = "";
  courses = [{
    "name": "Back-end Engineer",
    "image": "https://winerp.vn/wp-content/uploads/2022/01/nt.jpg"
  },
    {
      "name": "Learn HTML",
    "image": "https://tmarketing.vn/wp-content/uploads/2021/09/html.jpg"
  },
  {
    "name": "Learn Javascript",
  "image": "https://tmarketing.vn/wp-content/uploads/2021/09/html.jpg"
  },
  {
    "name": "Learn Angular",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
  },
  {
    "name": "Master C#, C+ bla bla bla bla bla bla bla blaaaa",
    "image": "https://fasttrack.edu.vn/wp-content/uploads/2021/06/C-Sharp-1920x960.jpeg"
  },
  ]
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.login);
    console.log(this.searchText)
  }
  
}
