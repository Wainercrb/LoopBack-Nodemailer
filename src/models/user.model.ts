import { Entity, model, property } from '@loopback/repository';

@model()
export class User extends Entity {


  @property({
    id: true,
    description: 'The unique identifier for a product',
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  surnames: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
