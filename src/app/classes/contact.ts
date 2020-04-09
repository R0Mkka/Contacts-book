import { IContact } from '../models/contact.models';

export class Contact implements IContact {
  public id: number;
  public isFavorite: boolean;

  constructor(
    public firstName: string,
    public lastName: string,
    public patronymic: string,
    public phoneNumber: string,
  ) {
    this.id = Date.now();
    this.isFavorite = false;
  }
}
