const mongoose = require("mongoose");

exports.ConnectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI;
        if (!dbURI) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }
        await mongoose.connect(dbURI);
        console.log(`The db is connected with ${mongoose.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
        mongoose.disconnect();
        process.exit(1);
    }
};