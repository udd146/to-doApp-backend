import todoModel from "../model/todoModel.js";

export const getToDo = async (req,res)=>{
    const todo=await todoModel.find();
    // console.log("data get")
    res.send(todo)
    
}

export const saveToDo =(req,res)=>{
    const {text}=req.body

    todoModel
      .create({text})
      .then((data)=>{
        console.log("added succesfully")
        console.log(data)
        res.send(data)
      })
      .catch((err) => console.log(err))
}

export const deleteTodo=(req,res)=>{
    const {_id}= req.body;

    todoModel
       .findByIdAndDelete(_id)
       .then(()=>res.set(200).send("deleted successfully"))
       .catch((err)=>console.log(err))

}


export const UpdateToDo =(req,res)=>{
    const {_id,text}=req.body

    todoModel
        .findByIdAndUpdate(_id,{text})
        .then(()=>res.set(201).send('Updated successfully'))
        .catch((err)=>console.log(err))
} 


