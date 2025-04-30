const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env' });

console.log('Testing MongoDB connection...');
console.log('MongoDB URI:', process.env.MONGODB_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    console.log('Connected to:', mongoose.connection.host);
    console.log('Database name:', mongoose.connection.name);
    
    // Create a test document
    const TestSchema = new mongoose.Schema({
      name: String,
      timestamp: { type: Date, default: Date.now }
    });
    
    const Test = mongoose.model('Test', TestSchema);
    const testDoc = new Test({ name: 'Test Document' });
    
    return testDoc.save();
  })
  .then(savedDoc => {
    console.log('Test document saved successfully:', savedDoc);
    return mongoose.disconnect();
  })
  .then(() => {
    console.log('Disconnected from MongoDB');
    console.log('All tests passed successfully!');
  })
  .catch(error => {
    console.error('Test failed with error:', error);
    console.error('Error details:', error.message);
    console.error('Error stack:', error.stack);
  })
  .finally(() => {
    process.exit();
  }); 