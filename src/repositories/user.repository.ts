import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(User, dataSource);
  }
}
