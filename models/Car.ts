import mongoose, { Schema, model, models, Types } from 'mongoose';

const CarSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  yearFabrication: { type: Number, required: true },
  yearModel: { type: Number, required: true },
  mileage: { type: Number, required: true },
  color: { type: String, required: true },
  transmission: { type: String, enum: ['manual', 'automatic'], required: true },
  fuel: { 
    type: String, 
    enum: ['gasoline', 'ethanol', 'flex', 'diesel', 'electric'], 
    required: true 
  },
  condition: { 
    type: String, 
    enum: ['new', 'used'], 
    required: true 
  },
  price: { type: Number, required: true },
  description: { type: String },
  images: [{ type: String }], // URLs
  location: {
    state: { type: String, required: true },
    city: { type: String, required: true }
  },
  seller: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, { timestamps: true });

export const Car = models.Car || model('Car', CarSchema);
