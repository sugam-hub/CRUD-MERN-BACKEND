import mongoose from "mongoose";

const Connection = async (username, password) => {
  mongoose.set("strictQuery", true);
  const URL = `mongodb+srv://${username}:${password}@cluster0.n2jrkbm.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully!!");
  } catch (error) {
    console.log("Error while connecting to database ", error);
  }
};

export default Connection;
