// repositories/category.repository.ts

import { BaseRepository } from './base.repository';
import CategoryModel from '../models/category';

class CategoryRepository extends BaseRepository<CategoryModel> {
  // Add category-specific methods if needed
}

export default new CategoryRepository(CategoryModel);
