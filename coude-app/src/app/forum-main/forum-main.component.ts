import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumService } from '../services/forum.service';
import {Topic} from 'src/models/topic';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
  styleUrls: ['./forum-main.component.css']
})
export class ForumMainComponent implements OnInit {
  topics!: Topic[];
  errorMsg: string = "";
  selectedTag: any;
  selectedId: any;
  //khai báo biến cho các bên filter
  filteredString: string = '';

  // check FE form
  // title: any =null;
  // public formNewTopic = this._formBuilder.group({
  //   name: ['', Validators.required, Validators.minLength(3)],
  //   file: [''],
  // })
  constructor(private _service: ForumService, 
              private _router: Router, 
              private _activeRoute: ActivatedRoute) {  }
  ngOnInit(): void {
    this.getTopics();
  }
  getTopics(){
    this._service.getAllTopics().subscribe({
      next: data => this.topics = data,
      error: err => this.errorMsg = err
    })
    console.log("topics: ",this.topics);
  }

  onSelected(topic: Topic){
    this._router.navigate(['/view-topic', topic._id]
     )
  }
  
}