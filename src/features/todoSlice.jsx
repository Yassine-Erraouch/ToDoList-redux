import { createSlice } from "@reduxjs/toolkit";


//import reducers 
import {toggle_todo} from '../reducers/toggle_todo'


const todoSlice = createSlice({
  name: "todos",
  initialState : [
    {id : new Date() , title : "" , completed : false }
  ],
  reducers: {
      toggle_todo
  },
});

export const { toggle_todo : TOGGLE_TODO } = todoSlice.actions;
export default todoSlice.reducer;
