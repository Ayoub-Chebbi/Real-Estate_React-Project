import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config();
// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected")
}).catch((err) => {
    console.log(err);
});
const app = express();

app.listen(4000,() => {
        console.log("server is running 4000");
    }
);

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)