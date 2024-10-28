// Importing mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

// Creating a connection to mongodb using mongoose with database name.
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://allanrnelias:Gainz589!@study-buddy.fix9my7.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;