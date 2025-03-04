import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pavaniyureka06:NCcao1759@cluster0.oycog.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}