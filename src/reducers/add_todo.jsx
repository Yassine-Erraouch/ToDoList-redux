export const add_todo = (state,action)=>{

     
       state.push(
            {id:new Date() ,
                content: action.payload.content,
                completed : false 
            }

       )     
}