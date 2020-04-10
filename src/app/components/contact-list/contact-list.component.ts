import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { IContact } from '../../models/contact.models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
  @Input()
  public contactList: IContact[];

  @Output()
  public favoriteMarkToggle = new EventEmitter<IContact>();

  @Output()
  public contactDelete = new EventEmitter<IContact>();

  public readonly displayedColumns: string[] = [
    'isFavorite',
    'lastName',
    'firstName',
    'patronymic',
    'phoneNumber',
    'actions',
  ];
  public readonly faTrash = faTrash;

  public get noContacts(): boolean {
    return this.contactList.length === 0;
  }

  public toggleFavoriteMark(contact: IContact): void {
    this.favoriteMarkToggle.emit(contact);
  }

  public deleteContact(contact: IContact): void {
    this.contactDelete.emit(contact);
  }
}
