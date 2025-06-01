const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env' });

// Define a simple schema for testing
const TestSchema = new mongoose.Schema({
  name: String,
  timestamp: { type: Date, default: Date.now }
});

const Test = mongoose.model('Test', TestSchema);

// Connect to MongoDB and test saving data
const testConnection = async () => {
  try {
    console.log('Testing MongoDB connection...');
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('MongoDB Connected Successfully!');
    console.log(`Connected to: ${mongoose.connection.host}`);
    console.log(`Database name: ${mongoose.connection.name}`);
    
    // Create a test document
    const testDoc = new Test({ name: 'Test Document' });
    console.log('Attempting to save test document...');
    
    // Save the document
    const savedDoc = await testDoc.save();
    console.log('Test document saved successfully!');
    console.log('Saved document:', savedDoc);
    
    // Find the document
    console.log('Attempting to find the saved document...');
    const foundDoc = await Test.findById(savedDoc._id);
    console.log('Found document:', foundDoc);
    
    // Clean up
    await Test.deleteOne({ _id: savedDoc._id });
    console.log('Test document deleted successfully!');
    
    // Disconnect
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    
    console.log('All tests passed successfully!');
  } catch (error) {
    console.error('Test failed with error:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
  } finally {
    process.exit();
  }
};

// Run the test
testConnection(); 