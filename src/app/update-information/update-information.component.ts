import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.css']
})
export class UpdateInformationComponent implements OnInit {

  public registerForm: any;
  user: User = new User;
  users: any;
  errMessage: string = ""

  constructor(private _formBuilder: FormBuilder,
    private _service: UserService) {
  }

  ngOnInit(): void {
  }
  submitData(registerForm: NgForm) {
    console.log("form", registerForm.value)
    if (this.user._id == '') {
      this._service.postUser(this.user).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          alert("Success signup!");
          //this._toast.success("Insert successfully!","Insert")
          this.getUser();
        } else {
          alert("Fail sign up!");
        }
      })
    }
    else {
      this._service.updateUser(this.users._id, this.user).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if (resData.message === "success") {
          //  alert("Updated successfully!");
          // this._toast.info("Updated successfully!","Update")
          //this.onReset;
          this.getUser();
        } else {
          alert("Fail!");
        }
      })
    }
  }
  getUser() {
    this._service.getUser().subscribe({
      next: data => this.users = data,
      error: err => this.errMessage = err
    })
  }
}
