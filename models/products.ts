import mongoose, { Document, Schema } from "mongoose";

interface ProductModel extends Document {
  product_id: string;
  name: string;
  brand: string;
  quantity: string;
  category_id: string;
  remarks: string;
  created_datetime_utc: Date,
  modified_datetime_utc: Date,
  expiry_datetime_utc: Date,
  manufactured_datetime_utc: Date,
}

const productSchema = new Schema({
  product_id: { type: String, required: true },
  name: { type: String, required: true },
  brand: { type: String },
  quantity: { type: String },
  category_id: { type: String },
  remarks: { type: String },
  expiry_datetime_utc: { type: Date },
  manufactured_datetime_utc: { type: Date },
  created_datetime_utc: { type: Date, required: true },
  modified_datetime_utc: { type: Date, required: true },
}, { versionKey: false });

const ProductModel = mongoose.model<ProductModel>("products", productSchema);

export default ProductModel;
