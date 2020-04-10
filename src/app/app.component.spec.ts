import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ContactsService } from './services/contacts.service';

import { AppComponent } from './app.component';

import { Contact } from './classes/contact';

const contact = new Contact('Test', '+7(000)000-00-00', 'Contact', '#1');

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let contactsService: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        ContactsService,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    contactsService = TestBed.get(ContactsService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get the contacts from the service', () => {
    const spyOnGetContacts = spyOn(contactsService, 'getContacts');

    const contacts = component.contactList;

    expect(spyOnGetContacts).toHaveBeenCalled();
  });

  it('should add the contact when it comes from form component', () => {
    const spyOnAddContact = spyOn(contactsService, 'addContact');

    component.onContactAdd(contact);

    expect(spyOnAddContact).toHaveBeenCalled();
  });

  it('should delete the contact when there is a delete event', () => {
    const spyOnDeleteContact = spyOn(contactsService, 'deleteContact');

    const contacts = contactsService.getContacts();
    component.onContactDelete(contacts[0]);

    expect(spyOnDeleteContact).toHaveBeenCalled();
  });

  it('should toggle the isFavorite mark of corresponding contact when there is a favoriteToggle event', () => {
    const spyOnToggleFavoriteMark = spyOn(contactsService, 'toggleFavoriteMark');

    const contacts = contactsService.getContacts();
    component.onFavoriteMarkToggle(contacts[0]);

    expect(spyOnToggleFavoriteMark).toHaveBeenCalled();
  });
});
