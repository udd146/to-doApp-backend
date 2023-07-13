import mongoose from "mongoose";

const todoSchema=new mongoose.Schema(
    {
        text:{
            type:String,
                 required:true

        }
    }
)

export default mongoose.model('ToDo',todoSchema)