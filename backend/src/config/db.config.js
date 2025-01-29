const mongoose = require("mongoose")

exports.ConnectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://WedToMe:4JJjMK8N2xa99lpg@cluster0.u9013.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(`The db is connect with ${mongoose.connection.host}`);
    }
    catch(error){
        mongoose.disconnect()
        process.exit(1)
    }
}