import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function customValidator(control: AbstractControl):{[key:string]:any} | null{
//     const check = /\@|\#|\$|\%|\^|\&/g.test(control.value)
//     return check ? {nameNotMatch: {value:control.value}} : null
// }

export function customValidator(regexp: RegExp): ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null=>{
            const check = regexp.test(control.value)
            return check ? {nameNotMatch: {value:control.value}} : null
    }
}

export function passwordValidator(control: AbstractControl):{[key:string]:any} | null{
    const pw = control.get('pw');
    const confirmPw = control.get('confirmPw');
    if ((pw && pw.pristine) || (confirmPw && confirmPw.pristine)){
        return null;
    }
    return pw && confirmPw && pw.value !== confirmPw.value ? {'misMatch': true} : null;
}
