import mongoose from "mongoose";

export const connectDB = async () => {
    const mongodbUri = process.env.MONGODB_URI;
    if (!mongodbUri) {
        throw new Error('Missing MONGODB_URI env variable in configuration')
    }
	await mongoose.connect(mongodbUri);
};


