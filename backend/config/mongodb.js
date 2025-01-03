import mongoose from "mongoose";
import winston from "winston";

const URI = process.env.MONGODB_URI;
if (!URI) {
    winston.error("MongoDB URI is not defined.");
    process.exit(1);
}

const mongooseOptions = {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
};

const connectDB = async (retries = 5, retryDelay = 5000) => {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            winston.info(`MongoDB connection attempt ${attempt}`);
            await mongoose.connect(URI, mongooseOptions);
            winston.info("MongoDB Connected Successfully");
            return;
        } catch (error) {
            winston.error(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt === retries) {
                winston.error("MongoDB Connection Failed after multiple attempts");
                process.exit(1);
            }
            await new Promise(res => setTimeout(res, retryDelay));
        }
    }
};

const gracefulShutdown = async (signal) => {
    try {
        await mongoose.connection.close();
        winston.info(`MongoDB connection closed due to ${signal}`);
        process.exit(0);
    } catch (error) {
        winston.error(`Error closing MongoDB connection: ${error.message}`);
        process.exit(1);
    }
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGQUIT', () => gracefulShutdown('SIGQUIT'));

process.on('unhandledRejection', (reason) => {
    winston.error("Unhandled Rejection:", reason);
    process.exit(1);
});

mongoose.connection.on('connected', () => winston.info('Mongoose connected'));
mongoose.connection.on('disconnected', () => winston.warn('Mongoose disconnected'));
mongoose.connection.on('error', (err) => winston.error('Mongoose connection error:', err));

export default connectDB;
