import mongoose, { Document, Schema } from "mongoose";

interface UserModel extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  created_datetime_utc: Date,
  modified_datetime_utc: Date,

}

const schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_datetime_utc: { type: Date, required: true },
  modified_datetime_utc: { type: Date, required: true },
}, { versionKey: false });

const UserModel = mongoose.model<UserModel>("users", schema);

export default UserModel;
