import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validator';

import { UserService } from '../services/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

public regForm: any;

user:User=new User;
users:any;
errMessage: string=""
 

constructor(private _formBuilder: FormBuilder, private _service:UserService) { }

ngOnInit(): void {
  this.regForm = this._formBuilder.group({
    accountName:['',[Validators.required,Validators.minLength(3), customValidator(/\@|\#|\$|\%|\^|\&/g)]],
    email:['',[Validators.required]],
    pw:[''],
    confirmPw:['']
  },{validators:[passwordValidator]}) 
  this.getUser();
};


submitData(regForm:NgForm){
 console.log("form", regForm.value)
  if(this.user._id==''){
      this._service.postUser(this.user).subscribe(res=>{
    let resData=JSON.parse(JSON.stringify(res));       
  if(resData.message==="success"){
     alert("Success signup!");
    //this._toast.success("Insert successfully!","Insert")
     this.getUser();
    }else{
      alert("Fail sign up!");
    }
  })
  }
  else{
    this._service.updateUser(this.users._id,this.user).subscribe(res=>{
      let resData=JSON.parse(JSON.stringify(res));       
    if(resData.message==="success"){
      //  alert("Updated successfully!");
      // this._toast.info("Updated successfully!","Update")
      //this.onReset;
      this.getUser();
      }else{
        alert("Fail!");
      }
    })
  }
}

getUser(){
  this._service.getUser().subscribe( {
    next: data => this.users = data,
    error: err => this.errMessage = err
  })
}
get accountName(){
  return this.regForm.controls['accountName']
}
}
