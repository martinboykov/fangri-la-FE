import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  console.log("🚀 ~ control:", control)
  return control.value.password === control.value.passwordConfirm
    ? null
    : { match: true };
};
