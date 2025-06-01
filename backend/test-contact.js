const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env' });

// Import the Contact model
const Contact = require('./src/models/Contact');

// Connect to MongoDB and test saving contact data
const testContactModel = async () => {
  try {
    console.log('Testing Contact model...');
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log('MongoDB Connected Successfully!');
    console.log(`Connected to: ${mongoose.connection.host}`);
    console.log(`Database name: ${mongoose.connection.name}`);
    
    // Create a test contact document
    const testContact = new Contact({
      name: 'Test Contact',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'This is a test message for the contact form.'
    });
    
    console.log('Test contact document:', testContact);
    console.log('Attempting to save test contact...');
    
    // Save the document
    const savedContact = await testContact.save();
    console.log('Test contact saved successfully!');
    console.log('Saved contact:', savedContact);
    
    // Find the document
    console.log('Attempting to find the saved contact...');
    const foundContact = await Contact.findById(savedContact._id);
    console.log('Found contact:', foundContact);
    
    // Clean up
    await Contact.deleteOne({ _id: savedContact._id });
    console.log('Test contact deleted successfully!');
    
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
testContactModel(); 