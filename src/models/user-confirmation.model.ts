import {Entity, model, property} from '@loopback/repository';

@model()
export class UserConfirmation extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  emailToken: string;

  @property({
    type: 'date',
    required: true,
  })
  createAt: string;


  constructor(data?: Partial<UserConfirmation>) {
    super(data);
  }
}
