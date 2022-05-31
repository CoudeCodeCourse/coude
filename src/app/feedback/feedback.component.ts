import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  public rating: any;
  constructor() { }

  ngOnInit(): void {
    this.rating = 0;
  }
  submitForm(form: NgForm) {
    form.resetForm();
    console.log("Rating: " + this.rating);
    this.rating = 0;
}

}
