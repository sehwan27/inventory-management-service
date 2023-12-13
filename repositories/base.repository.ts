import { Model, Document, FilterQuery, UpdateQuery } from "mongoose";

export class BaseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async findOne(filter: FilterQuery<T>): Promise<T | null> {
    return this.model.findOne(filter);
  }

  async find(): Promise<T[]> {
    return this.model.find();
  }

  async create(payload: Partial<T>): Promise<T> {
    const data = {
      ...payload,
      created_datetime_utc: new Date().toISOString(),
      modified_datetime_utc: new Date().toISOString(),
    };
    return this.model.create(data);
  }

  async update(id: string, data: UpdateQuery<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  findOneAndUpdate(filter: FilterQuery<T>, payload: any) {
    return this.model.findOneAndUpdate(
      filter,
      {
        $set: {
          ...payload,
          modified_datetime_utc: new Date().toISOString(),
        },
      },
      { new: true }
    );
  }

  //   async delete(id: string): Promise<T | null> {
  //     return this.model.findByIdAndDelete(id).exec();
  //   }
}
