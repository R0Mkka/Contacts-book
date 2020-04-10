import { TestBed, async } from '@angular/core/testing';

import { ContactsService } from './contacts.service';

import { Contact } from '../classes/contact';

const mockContact = new Contact('Test', '+7(000)000-00-00', 'Contact', '#1');
const mockContactList = [
  { ...mockContact, id: 3 },
  { ...mockContact, id: 4 },
  { ...mockContact, id: 5 },
];

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactsService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(ContactsService);

    refreshContacts(service);
    addMockContacts(service);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should add the contact to the list', () => {
    const initialContacts = service.getContacts();

    service.addContact(mockContact);
    const finalContacts = service.getContacts();

    expect(finalContacts.length).toBe(initialContacts.length + 1);
    expect(finalContacts.pop().id).toBe(mockContact.id);
  });

  it('should delete the contact by id', () => {
    const initialContacts = service.getContacts();
    const firstContact = initialContacts[0];

    service.deleteContact(firstContact.id);

    expect(service.getContacts().length).toBe(initialContacts.length - 1);
  });

  it('should toggle the isFavorite mark of the contact by its id', () => {
    const initialContacts = service.getContacts();
    const firstContact = initialContacts[0];

    expect(firstContact.isFavorite).toBeFalsy();

    service.toggleFavoriteMark(firstContact.id);

    expect(firstContact.isFavorite).toBeTruthy();
  });

  it('should raise up favorite contacts', () => {
    const initialContacts = service.getContacts();
    const initialLastContact = initialContacts[initialContacts.length - 1];

    service.toggleFavoriteMark(initialLastContact.id);

    const firstContact = service.getContacts()[0];

    expect(firstContact.isFavorite).toBeTruthy();
    expect(firstContact.id).toBe(initialLastContact.id);
  });
});

function refreshContacts(service: ContactsService) {
  service.getContacts().forEach((singleContact: Contact, index: number) => {
    singleContact.id = index + 1;
    singleContact.isFavorite = false;
  });
}

function addMockContacts(service: ContactsService) {
  mockContactList.forEach((singleContact: Contact) => {
    service.addContact(singleContact);
  });
}
