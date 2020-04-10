import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Validators } from '@angular/forms';

import { CustomInputComponent } from './custom-input.component';

import { ICustomField } from '../../../models/custom-field.models';

const mockFieldInfo: ICustomField = {
  id: 'mock-control',
  type: 'text',
  label: 'Mock control',
  required: true,
  placeholder: 'Enter smth',
  control: {
    name: 'mock-control',
    initialValue: '',
    validators: [
      Validators.required,
    ]
  },
};

describe('CustomInputComponent', () => {
  let fixture: ComponentFixture<CustomInputComponent>;
  let component: CustomInputComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CustomInputComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;

    component.fieldInfo = { ...mockFieldInfo };
    component.ngOnInit();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the inner formControl', () => {
    expect(component.formControl).toBeDefined();
  });

  it('should set the initial value to the inner formControl', () => {
    expect(component.formControl.value).toBe(mockFieldInfo.control.initialValue);
  });

  it('should mark the inner formControl as touched and dirty by default', () => {
    expect(component.formControl.touched).toBeTruthy();
    expect(component.formControl.dirty).toBeTruthy();
  });

  it('should show invalid state when the corresponding parameter is set', () => {
    expect(component.showErrors).toBeFalsy();
    expect(component.showInvalid).toBeFalsy();

    component.showErrors = true;

    expect(component.showInvalid).toBeTruthy();
  });
});
