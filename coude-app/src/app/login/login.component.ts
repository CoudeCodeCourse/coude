import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  form: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
  
}

}
