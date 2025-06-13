import mongoose, { Schema, model, models } from 'mongoose';

const CarSchema = new Schema({
  brand: { type: String, required: true }, // ex: "Audi"
  model: { type: String, required: true }, // ex: "A3 1.8 Turbo 5p Mec."

  yearFipe: { type: String, required: true }, // ex: "2005-1"
  yearFabrication: { type: Number, required: true },

  bodyType: { type: String, required: true },

  color: { type: String, required: true },
  mileage: { type: Number, required: true },
  price: { type: Number, required: true },

  images: [{ type: String, required: true }], // URLs Cloudinary

  description: { type: String },

  location: {
    state: { type: String, required: true },
    city: { type: String, required: true },
  },

  seller: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },

  // OBS: campos abaixo não aparecem no módulo atual, mas podem ser reativados depois
  // transmission: { type: String, enum: ['manual', 'automatic'] },
  // fuel: { type: String, enum: ['gasoline', 'ethanol', 'flex', 'diesel', 'electric'] },
  // condition: { type: String, enum: ['new', 'used'] },
  // bodyType: { type: String, enum: ['hatch', 'sedan', 'suv', 'picape', 'van', 'conversivel', 'esportivo', 'outro'] }

}, { timestamps: true });

export const Car = models.Car || model('Car', CarSchema);
