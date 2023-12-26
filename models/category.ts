import mongoose, { Document, Schema } from "mongoose";

interface CategoryModel extends Document {
  id: string;
  name: string;
  created_datetime_utc: Date,
  modified_datetime_utc: Date,
}

const categorySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  created_datetime_utc: { type: Date, required: true },
  modified_datetime_utc: { type: Date, required: true },
}, { versionKey: false });

const CategoryModel = mongoose.model<CategoryModel>("categories", categorySchema);

export default CategoryModel;
