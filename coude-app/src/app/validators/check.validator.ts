import { AbstractControl, ValidatorFn } from "@angular/forms";

export function customValidator (regexp: RegExp):ValidatorFn{
    return(control: AbstractControl):{[key:string]:any} | null =>{
        const check = regexp.test(control.value);
        return check ? {nameNotMatch:{value: control.value}} : null;
    }
}
export function passwordValidator (control: AbstractControl): {[key:string]:any} | null{
   const password = control.get('pw');
   const confirmPassword = control.get('confirmPw');
   if ((password && password.pristine) || (confirmPassword && confirmPassword.pristine))
   {
       return null;
   }
   return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch':true} : null;
}