import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { NewContactFormComponent } from './new-contact-form.component';

import { Contact } from '../../classes/contact';

const contact = new Contact('Test', '+7(000)000-00-00', 'Contact', '#1');

describe('NewContactFormComponent', () => {
  let fixture: ComponentFixture<NewContactFormComponent>;
  let component: NewContactFormComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewContactFormComponent,
      ],
      providers: [
        FormBuilder,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactFormComponent);
    component = fixture.componentInstance;

    component.ngOnInit();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the newContactForm', () => {
    expect(component.newContactForm).toBeDefined();
  });

  it('should show errors while adding the contact if the form is invalid', () => {
    expect(component.showErrors).toBeFalsy();

    component.addContact();

    expect(component.showErrors).toBeTruthy();
  });

  it('should emit contactAdd event if contact was successfully created', () => {
    const spyOnContactAddEmit = spyOn(component.contactAdd, 'emit');
    component.newContactForm.patchValue(contact);
    component.addContact();

    expect(spyOnContactAddEmit).toHaveBeenCalled();
  });

  it('should reset the form if contact was successfully created', () => {
    const spyOnFormReset = spyOn(component.newContactForm, 'reset');
    component.newContactForm.patchValue(contact);
    component.addContact();

    fixture.detectChanges();

    expect(spyOnFormReset).toHaveBeenCalled();
    expect(component.newContactForm.value.firstName).toBe('');
    expect(component.newContactForm.value.lastName).toBe('');
    expect(component.newContactForm.value.patronymic).toBe('');
    expect(component.newContactForm.value.phoneNumber).toBe('');
  });
});
