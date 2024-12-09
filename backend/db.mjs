import mongoose from "mongoose";

export default async function connectDb() {
  await mongoose.connect(
    'mongodb+srv://trankhanhnam0919:0919005689@cluster0.4f77y.mongodb.net/');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
