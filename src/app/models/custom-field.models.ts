import { ValidatorFn } from '@angular/forms';

export interface ICustomField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder: string;
  control: {
    name: string;
    initialValue: string;
    validators: ValidatorFn[];
  };
  mask?: {
    pattern: (string | RegExp)[];
  };
}
