import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumService } from '../services/forum.service';
import { Topic } from 'src/models/topic';
import { FormBuilder, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

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
  topic: Topic = new Topic();
  // check FE form
  // title: any =null;
  //private _formBuilder: FormBuilder, private _toastr: ToastrService
  // public formUpload = this._formBuilder.group({
  // 	name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
  // 	//name:['',[Validators.required,Validators.minLength(3)]],
  // 	file: ['']
  // })

  constructor(private _service: ForumService, 
              private _router: Router, 
              private _activeRoute: ActivatedRoute) {  }

  ngOnInit(): void {
    this.getTopics();
  }
  getTopics() {
    this._service.getAllTopics().subscribe({
      next: data => this.topics = data,
      error: err => this.errorMsg = err
    })
    // console.log("topics: ", this.topics);
  }

  onSelected(topic: Topic) {
    this._router.navigate(['/view-topic', topic._id])
  }

  // form submit data
  submitData(form: NgForm) {
    let formData = new FormData();
    formData.append("tag", this.topic.tag);
    formData.append("title", this.topic.title);
    formData.append("content", this.topic.content);
    this._service.uploadData(this.topic).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if (resData.message === "Success!") {
        alert("Insert successfully >v<");
        this.onReset();
        this.getTopics();
      } else {
        alert("Insert failed!!!");
      }
    })
  }
  // onSubmit(data: any) {
  //   /* console.log("Data:",data); */
  //   let formData = new FormData();
  //   formData.append("tag", data.tag);
  //   formData.append("title", data.title);
  //   formData.append("content", data.content);

  //   //Send data to server
  //   this._service.uploadData(formData).subscribe({
  //     next: res => {
  //       console.log(res);
  //       this.getTopics();
  //     },
  //     error: err => {
  //       console.log(err.message);
  //     }
  //   })
  // }


  //reset form
  onReset(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.topic = new Topic();
  }
}