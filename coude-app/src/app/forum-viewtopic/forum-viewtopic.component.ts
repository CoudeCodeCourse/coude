import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-viewtopic',
  templateUrl: './forum-viewtopic.component.html',
  styleUrls: ['./forum-viewtopic.component.css']
})
export class ForumViewtopicComponent implements OnInit {
  topics: any;
  selectedTopic: any;
  id: any;
  constructor(private _service: ForumService, 
            private _router: ActivatedRoute) { 
    this._router.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {
    this.topics = this._service.getTopics();
  }

}
