import { Document, Schema, model, models } from 'mongoose';

// Define the Category interface
export interface ICategory extends Document {
  _id: string;
  name: string;
}

// set the Schema for the Category model
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

// check if model exists to avoid overwrite otherwise create new model
const Category = models.Category || model('Category', CategorySchema);

export default Category;
