import Todo from "../models/todo.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResposne.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create a new todo using asyncHandler
const createTodo = asyncHandler(async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed || false,
    });

    try {
        const newTodo = await todo.save();
        res
            .status(201)
            .json(new ApiResponse(201, "Todo created successfully", newTodo));
    } catch (err) {
        console.error("Error while saving Todo:", err);
        throw new ApiError(500, "Failed to create todo", [err.message]);
    }
});

const getTodos = asyncHandler(async (req, res) => {

    try {

        const todos = await Todo.find();// wait from db

        res
            .status(200)
            .json(new ApiResponse(200, "Todos fetched successfully", todos));

    } catch (err) {
        throw new ApiError(500, "Failed to fetch todos", [err.message])
    }


})

const updateTodo = asyncHandler(async (req, res) => {
    // Implementation for updating a todo

    try{
        // for updating todo what we do is we find the todo we want to update by id
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true});// parameter find the todo by its url and update its body

        if(!todo){
            throw new ApiError(404, "Todo not found")
        }

        res.status(200).json(new ApiResponse(200, "Todo updated successfully", todo))

    }catch(err){
        throw new ApiError(500, "Failed to update todo", [err.message])
    }

})

const deleteTodo = asyncHandler(async (req, res) => {
    // Implementation for deleting a todo

    // find by id which todo i want to delete
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if(!todo){
            throw new ApiError(404, "Todo not found")
        }

        res.status(200).json(new ApiResponse(200, "Todo deleted successfully", todo))
        
    }catch(err){
        throw new ApiError(500, "Failed to delete todo", [err.message])
    }

})

export { createTodo,
         getTodos,
         updateTodo,
         deleteTodo
 };
