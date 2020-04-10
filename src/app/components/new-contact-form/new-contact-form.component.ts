import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
export class NewContactFormComponent implements OnInit, OnDestroy {
  @Output()
  public contactAdd = new EventEmitter<IContact>();

  public showErrors = false;
  public newContactForm: FormGroup;
  public readonly newContactFormFields: ICustomField[] = NEW_CONTACT_FORM_FIELDS;
  public readonly faPlus = faPlus;

  private readonly destroySubscriptions$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.subOnTyping();
  }

  public ngOnDestroy(): void {
    this.destroySubscriptions$.next();
    this.destroySubscriptions$.complete();
  }

  public addContact(): void {
    if (this.newContactForm.invalid) {
      this.showErrors = true;

      return;
    }

    const { lastName, phoneNumber, firstName, patronymic } = this.newContactForm.value;
    const newContact = new Contact(lastName, phoneNumber, firstName, patronymic);

    this.contactAdd.emit(newContact);
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
      .pipe(takeUntil(this.destroySubscriptions$))
      .subscribe(() => this.showErrors = false);
  }
}
