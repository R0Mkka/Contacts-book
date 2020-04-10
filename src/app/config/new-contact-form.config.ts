import { Validators } from '@angular/forms';

import { ICustomField } from '../models/custom-field.models';

export const NEW_CONTACT_FORM_FIELDS: ICustomField[] = [
  {
    id: 'lastName',
    type: 'text',
    label: 'Фамилия',
    required: true,
    placeholder: 'Введите фамилию',
    control: {
      name: 'lastName',
      initialValue: '',
      validators: [
        Validators.required,
        Validators.maxLength(20),
      ],
    },
  },
  {
    id: 'firstName',
    type: 'text',
    label: 'Имя',
    required: false,
    placeholder: 'Введите имя',
    control: {
      name: 'firstName',
      initialValue: '',
      validators: [
        Validators.maxLength(20),
      ],
    },
  },
  {
    id: 'patronymic',
    type: 'text',
    label: 'Отчество',
    required: false,
    placeholder: 'Введите отчество',
    control: {
      name: 'patronymic',
      initialValue: '',
      validators: [
        Validators.maxLength(20),
      ],
    },
  },
  {
    id: 'phoneNumber',
    type: 'text',
    label: 'Телефон',
    required: true,
    placeholder: 'Введите телефон',
    control: {
      name: 'phoneNumber',
      initialValue: '',
      validators: [
        Validators.required,
        Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/),
      ],
    },
    mask: {
      pattern: ['+', '7', '(', /\d/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
    },
  },
];
