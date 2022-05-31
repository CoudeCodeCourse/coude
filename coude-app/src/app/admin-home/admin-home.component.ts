import { Component, OnInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbdSortableHeader, SortEvent } from 'src/directives/sortable.directive';
import { Course } from 'src/models/course';
import { CoursesDataService } from '../services/courses-data.service';

// export type SortColumn = keyof Course | '';
// export type SortDirection = 'asc' | 'desc' | '';
// const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

// export interface SortEvent {
//   column: SortColumn;
//   direction: SortDirection;
// }
// @Directive({
//   selector: 'th[sortable]',
//   host: {
//     '[class.asc]': 'direction === "asc"',
//     '[class.desc]': 'direction === "desc"',
//     '(click)': 'rotate()'
//   }
// })
// export class NgbdSortableHeader {

//   @Input() sortable: SortColumn = '';
//   @Input() direction: SortDirection = '';
//   @Output() sort = new EventEmitter<SortEvent>();

//   rotate() {
//     this.direction = rotate[this.direction];
//     this.sort.emit({column: this.sortable, direction: this.direction});
//   }
// }
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  courses!: Course[];
  sortCourses!: Array<Course>;
  errMessage = "";
  selectedId: any;
  selectedCourse: any;
  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {
    console.log(column, direction)
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    console.log(this.headers)
    // sorting courses
    if (direction === '' || column === '') {
      this.sortCourses = this.courses; 
    } else {
      this.sortCourses = [...this.courses].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
    console.log(this.sortCourses)
  }
  constructor(private _service: CoursesDataService,
              private _router: Router,
              private _activeRouter: ActivatedRoute) { 

              this.headers = new QueryList();
              }

  ngOnInit(): void {
    this.getCourses();
    console.log("sort",this.sortCourses)
    // this.getCourseId();
    // console.log("cous:",this.courses)
  }

  getCourses(){
    this._service.getCourses().subscribe({
      next: data => this.courses = data,
      error: err => this.errMessage = err
    })
    console.log("cou",this.courses);
    // this.sortCourses = this.courses;
    this._service.getCourses().subscribe({
      next: data => this.sortCourses = data,
      error: err => this.errMessage = err
    })
    console.log("sort",this.sortCourses)
  }

  onSelected(course: Course){
    // console.log(data._id);
    this._router.navigate(['/admin/courses', course._id]
      // {queryParams: {course: course},
    //  }
     )
  }
}
