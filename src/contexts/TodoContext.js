import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        // Example todo item structure
        // {
        //     id : 1,
        //     description : "Sample Todo",
        //     completed : false
        // }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleTodoCompletion : (id) => {}
});


export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
