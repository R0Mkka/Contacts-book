import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ContactsService } from './services/contacts.service';

import { IContact } from './models/contact.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private contactsService: ContactsService,
  ) {}

  public get contactList(): IContact[] {
    return this.contactsService.getContacts();
  }

  public onContactAdd(contact: IContact): void {
    this.contactsService.addContact(contact);
  }

  public onFavoriteMarkToggle(contact: IContact): void {
    this.contactsService.toggleFavoriteMark(contact.id);
  }

  public onContactDelete(contact: IContact): void {
    this.contactsService.deleteContact(contact.id);
  }
}
