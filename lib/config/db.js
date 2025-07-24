import mongoose from "mongoose";

export const ConnectDB = async ()=>{
  await mongoose.connect('mongodb+srv://rahulwebdeveloper12:w1jLMLmhenVHbi6S@portfolio.dqiybms.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio')
}
