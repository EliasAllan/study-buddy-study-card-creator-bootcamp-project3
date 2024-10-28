// Importing mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Creating a connection to mongodb using mongoose with database name.
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;