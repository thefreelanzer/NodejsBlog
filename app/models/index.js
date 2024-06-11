const mongoos = require("mongoose");

const connectDB = async () => {
  try {
    mongoos.set("strictQuery", false);
    const conn = await mongoos.connect(process.env.MONGODB_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
