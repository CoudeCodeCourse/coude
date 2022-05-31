export class User{
    _id:any;
    accountName:string;
  email: string;
  pw: string;
  confirmPw: string;
  lastName: string;
  firstName: string;
 //dateOfBirth: Date;
  //phoneNumber: number;
    constructor(){
        this._id="";
        this.accountName="";
        this.email="";
        this.pw="";
        this.confirmPw="";
        this.lastName="";
        this.firstName="";
      // this.dateOfBirth="";
        //this.phoneNumber="";
    }
}