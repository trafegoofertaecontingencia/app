import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'buyer' | 'seller' | 'admin';
  location: {
    city: string;
    state: string;
  };
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // hash da senha
  phone: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['buyer', 'seller', 'admin'], 
    default: 'buyer' 
  },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true }
  },
  avatar: { type: String } // URL da foto de perfil
}, { timestamps: true });

export const User = models.User || model<IUser>('User', UserSchema);
