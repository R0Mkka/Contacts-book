import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MatTableModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ContactListComponent } from './contact-list.component';

import { Contact } from '../../classes/contact';

const contact = new Contact('Test', '+7(000)000-00-00', 'Contact', '#1');

describe('ContactListComponent', () => {
  let fixture: ComponentFixture<ContactListComponent>;
  let component: ContactListComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
      ],
      declarations: [
        ContactListComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should determine when the list of contacts is empty', () => {
    component.contactList = [];

    expect(component.noContacts).toBeTruthy();

    component.contactList = [contact];

    expect(component.noContacts).toBeFalsy();
  });

  it('should emit favoriteMarkToggle event', () => {
    const spyOnFavoriteMarkToggleEmit = spyOn(component.favoriteMarkToggle, 'emit');

    component.toggleFavoriteMark(contact);

    expect(spyOnFavoriteMarkToggleEmit).toHaveBeenCalled();
  });

  it('should emit contactDelete event', () => {
    const spyOnContactDeleteEmit = spyOn(component.contactDelete, 'emit');

    component.deleteContact(contact);

    expect(spyOnContactDeleteEmit).toHaveBeenCalled();
  });
});
