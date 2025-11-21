export const add_todo = (state,action)=>{

        [...state,
            {id:new Date() ,
                 content: action.payload.content,
                 completed : false 
                }]
}