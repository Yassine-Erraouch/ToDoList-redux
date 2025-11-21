import { createSlice } from "@reduxjs/toolkit";


//import reducers 
import {toggle_todo} from '../reducers/toggle_todo'
import {delete_todo} from "../reducers/delete_todo.Jsx";
import { add_todo } from "../reducers/add_todo";


const todoSlice = createSlice({
  name: "todos",
  initialState : [
    {id : new Date() , title : "" , completed : false }
  ],
  reducers: {
    add_todo,
    delete_todo,
    toggle_todo
  },
});

export const {
   toggle_todo : TOGGLE_TODO ,
    delete_todo : DELETE_TODO,
    add_todo : ADD_TODO 
   } = todoSlice.actions;
export default todoSlice.reducer;
