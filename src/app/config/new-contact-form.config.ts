import { Validators } from '@angular/forms';

import { ICustomField } from '../models/custom-field.models';

export const NEW_CONTACT_FORM_FIELDS: ICustomField[] = [
  {
    id: 'lastName',
    type: 'text',
    label: 'Фамилия',
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
    placeholder: 'Введите имя',
    control: {
      name: 'firstName',
      initialValue: '',
      validators: [
        Validators.required,
        Validators.maxLength(20),
      ],
    },
  },
  {
    id: 'patronymic',
    type: 'text',
    label: 'Отчество',
    placeholder: 'Введите отчество',
    control: {
      name: 'patronymic',
      initialValue: '',
      validators: [
        Validators.required,
        Validators.maxLength(20),
      ],
    },
  },
  {
    id: 'phoneNumber',
    type: 'text',
    label: 'Телефон',
    placeholder: 'Введите телефон',
    control: {
      name: 'phoneNumber',
      initialValue: '',
      validators: [
        Validators.required,
        Validators.minLength(22),
      ],
    },
    mask: {
      prefix: '+7 ',
      pattern: '(000) 000 - 00 - 00',
    },
  },
];
