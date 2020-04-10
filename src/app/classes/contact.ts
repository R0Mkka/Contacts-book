import { IContact } from '../models/contact.models';

export class Contact implements IContact {
  public id: number;
  public isFavorite: boolean;
  public firstName: string;
  public patronymic: string;

  constructor(
    public lastName: string,
    public phoneNumber: string,
    firstName: string,
    patronymic: string,
  ) {
    this.id = Date.now();
    this.isFavorite = false;
    this.firstName = firstName || '-';
    this.patronymic = patronymic || '-';
  }
}
