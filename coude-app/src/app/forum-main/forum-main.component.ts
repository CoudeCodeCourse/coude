import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
  styleUrls: ['./forum-main.component.css']
})
export class ForumMainComponent implements OnInit {
  topics: any;
  errorMsg: string = "";
  selectedId: any;
  constructor(private _service: DataService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id')
        if (id != null) {
          this.selectedId = parseInt(id);
        }
      }
    )
    this._service.getSampleData().subscribe(
      {
        next: data => this.topics = data,
        error: err => this.errorMsg = err.message,
      })
  }
  onSelect(data: any): void {
    this._router.navigate(['/topics', data.id])
  }
  isSelected(data: any) {
    return data.id === this.selectedId
  }
  viewsSort() {
    this.topics = this.topics.views.sort();
  }
  dateSort() {
    this.topics = this.topics.date.sort();
  }
}
