import { Router } from "express";
import { getToDo,saveToDo,deleteTodo,UpdateToDo } from "../controller/todoController.js";
const route=Router()

route.get("/",getToDo)

route.post("/save",saveToDo)
route.post("/update",UpdateToDo)
route.post("/delete",deleteTodo)

export default route