import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-viewtopic',
  templateUrl: './forum-viewtopic.component.html',
  styleUrls: ['./forum-viewtopic.component.css']
})
export class ForumViewtopicComponent implements OnInit {
  topics: any;
  constructor(private _service: ForumService) { }

  ngOnInit(): void {
    this.topics = this._service.getTopics();
  }

}
