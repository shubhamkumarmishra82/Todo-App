import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name : "todo",
  initialState : {
    todos : [] ,
    selectTodos : {}
  },
  reducers : {
   getData : (state , action) =>{
    state.todos = action.payload
   } , 
    getDataById : (state , action) =>{
      state.selectTodos = action.payload
    },
    deleteDataById : (state , action)=>{
      state.todos = state.todos.filter(todo=>todo.id !==action.payload)
    }
  }
})
export const todoAction = todoSlice.actions;
export default todoSlice.reducer;