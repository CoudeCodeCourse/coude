import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumService } from '../forum.service';
import { ITopic } from '../interfaces/forum';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
  styleUrls: ['./forum-main.component.css']
})
export class ForumMainComponent implements OnInit {
  topics: any;
  errorMsg: string = "";
  selectedTag: any;
  selectedId: any;


  // check FE form
  // title: any =null;
  // public formNewTopic = this._formBuilder.group({
  //   name: ['', Validators.required, Validators.minLength(3)],
  //   file: [''],
  // })
  constructor( private _service: ForumService, private _router: Router, private _activatedRoute: ActivatedRoute, private _activeRoute: ActivatedRoute) {
    this._activeRoute.queryParams.subscribe(params => {
      this.selectedId = params;
      console.log("tiel:", this.selectedId); // Print the parameter to the console. 
    });
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params) => {
      // console.log(typeof(params['id']))
      this.selectedId = params['id'];
      console.log(this.selectedId);
    })
    // this._activatedRoute.paramMap.subscribe(
    //   (param) => {
    //     let id = param.get('id')
    //     if (id != null) {
    //       this.selectedId = parseInt(id);
    //     }
    //   }
    // ) 
    this._service.getTopics().subscribe(
      {
        next: data => this.topics = data,
        error: err => this.errorMsg = err.message,
      })
  }
  onSelect(data: any): void {
    this._router.navigate(['/view-topic', data.id])
  }
  // isSelected(data: any) {
  //   return data.id === this.selectedId
  // }
  viewsSort() {
    this.topics = this.topics.views.sort();
  }
  dateSort() {
    this.topics = this.topics.date.sort();
  }
  onSelected(topic: ITopic) {
    this._router.navigate(['/view-topic', topic.id],
      {queryParams: {topic: topic},
     })
  }
  // onSubmit(data: any) {}
}