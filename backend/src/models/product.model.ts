import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    price: number;
    description?: string;
    image?: string;
    createdAt?: Date;
}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String },
        image: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
