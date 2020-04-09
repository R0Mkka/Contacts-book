import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { IContact } from '../../models/contact.models';
import { ICustomField } from '../../models/custom-field.models';
import { Contact } from '../../classes/contact';
import { NEW_CONTACT_FORM_FIELDS } from '../../config/new-contact-form.config';

@Component({
  selector: 'app-new-contact-form',
  templateUrl: './new-contact-form.component.html',
  styleUrls: ['./new-contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewContactFormComponent implements OnInit {
  @Output()
  public contactAdd = new EventEmitter<IContact>();

  public showErrors = false;
  public newContactForm: FormGroup;
  public readonly newContactFormFields: ICustomField[] = NEW_CONTACT_FORM_FIELDS;
  public readonly faPlus = faPlus;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.subOnTyping();
  }

  public addContact(): void {
    if (this.newContactForm.invalid) {
      this.showErrors = true;

      return;
    }

    const { firstName, lastName, patronymic, phoneNumber } = this.newContactForm.value;
    const newContact = new Contact(firstName, lastName, patronymic, phoneNumber);

    this.contactAdd.emit(newContact);
    this.resetForm();
  }

  private resetForm(): void {
    this.newContactForm.reset();
  }

  private initForm(): void {
    this.newContactForm = this.formBuilder.group(
      this.newContactFormFields.reduce((prev, curr) => ({
        ...prev,
        [curr.control.name]: [curr.control.initialValue, curr.control.validators],
      }), {}),
    );
  }

  private subOnTyping(): void {
    this.newContactForm.valueChanges
      .subscribe(() => this.showErrors = false);
  }
}
