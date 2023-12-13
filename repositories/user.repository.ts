import { BaseRepository } from './base.repository';
import UserModel from '../models/users';

class UserRepository extends BaseRepository<UserModel> {
  // Add product-specific methods if needed
}

export default new UserRepository(UserModel);
