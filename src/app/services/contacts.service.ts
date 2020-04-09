import { Injectable } from '@angular/core';

import { IContact } from '../models/contact.models';

const initialContacts: IContact[] = [
  {
    id: 1,
    isFavorite: false,
    firstName: 'Контакт',
    lastName: 'Первый',
    patronymic: 'В телефоне',
    phoneNumber: '111 11 11',
  },
  {
    id: 2,
    isFavorite: false,
    firstName: 'Контакт',
    lastName: 'Второй',
    patronymic: 'В телефоне',
    phoneNumber: '222 22 22',
  },
];

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactList: IContact[] = initialContacts;

  public getContacts(): IContact[] {
    return this.contactList
      .slice()
      .sort((contA: IContact, contB: IContact) => {
        if (!contA.isFavorite && contB.isFavorite) {
          return 1;
        }

        if (contA.isFavorite && !contB.isFavorite) {
          return -1;
        }

        return 0;
      });
  }

  public addContact(newContact: IContact): void {
    this.contactList.push(newContact);
  }

  public deleteContact(contactId: number): void {
    this.contactList = this.contactList.filter(({ id }: IContact) => id !== contactId);
  }

  public toggleFavoriteMark(contactId: number): void {
    const contact: IContact = this.getContactById(contactId);

    if (!contact) {
      return;
    }

    contact.isFavorite = !contact.isFavorite;
  }

  private getContactById(contactId: number): IContact {
    return this.contactList.find(({ id }: IContact) => id === contactId);
  }
}
