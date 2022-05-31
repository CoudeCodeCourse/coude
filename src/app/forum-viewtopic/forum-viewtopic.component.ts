import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Topic } from 'src/models/topic';
import { ForumService } from '../services/forum.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forum-viewtopic',
  templateUrl: './forum-viewtopic.component.html',
  styleUrls: ['./forum-viewtopic.component.css'],
  providers: [Title]
})
export class ForumViewtopicComponent implements OnInit {
  id: any;
  ngOnInit(): void {
    this._service.getAllTopics().subscribe( {
      next: data => this.topics = data,
      error: (error) => this.errMessage = error
    });
  }
  topics: Array<Topic> = [];
  errMessage = "";
  selectedId: any;
  selectedTopic!: Topic;
  constructor(private _service: ForumService, private _activeRoute: ActivatedRoute, private _router: Router, private _title: Title) {
    this._activeRoute.params.subscribe((params) => {
      this.selectedId = params['id'];
      console.log(this.selectedId);
    })
  }

  getTopicById(){
    this._service.GetTopicById(this.selectedId).subscribe(
      {
      next: data => this.selectedTopic = data,
      error: err => this.errMessage = err
    });
    console.log("selected Topic: ",this.selectedTopic);
  }
}
