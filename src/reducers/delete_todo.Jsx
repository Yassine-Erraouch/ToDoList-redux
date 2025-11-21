export const delte_todo = (state , action) =>{

        const target_todo_index = state.findIndex(td=> td.id===action.payload.id)
        if(index !== -1) {

            state.splice(target_todo_index,1)
        } 

}