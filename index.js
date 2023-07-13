import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import route from "./routes/ToDoRoute.js";
const app=express()

// middlewares
app.use(express.json())
app.use(cors())

const PORT = 5000;

const MONGO_URL="mongodb+srv://uddashay:root123@cluster0.ptfby.mongodb.net/TodoApp"
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));

//routes
app.use(route)

app.listen(PORT,()=>{
    console.log("server running at port"+ PORT)
})
