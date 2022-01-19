import { AbstractControl } from "@angular/forms";

export function tinyValidator(control: AbstractControl){
  const value = control.value as string;
  if (value !== value.toLowerCase()){
    return { tiny: true };
  } else {
    return null
  }
}
