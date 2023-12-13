import { BaseRepository } from './base.repository';
import ProductModel from '../models/products';

class ProductRepository extends BaseRepository<ProductModel> {
  // Add product-specific methods if needed
}

export default new ProductRepository(ProductModel);
