export class User{
    _id:any;
    accountName:string;
  email: string;
  pw: string;
  confirmPw: string
    constructor(){
        this._id="";
        this.accountName="";
        this.email="";
        this.pw="";
        this.confirmPw=""
    }
}