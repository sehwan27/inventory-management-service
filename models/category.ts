import mongoose, { Document, Schema } from "mongoose";

export interface CategoryModel extends Document {
  category_id: string;
  name: string;
}

const categorySchema = new Schema({
  category_id: { type: String, required: true },
  name: { type: String, required: true },
});

const Category = mongoose.model<CategoryModel>("categories", categorySchema);

export default Category;
