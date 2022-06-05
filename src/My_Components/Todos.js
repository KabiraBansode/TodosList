import React from 'react'
import { Todo } from './Todo'
export const Todos = (props) => {

  let todolist={
   position:"relative",
   top:"40px"

  }
  return (
    
   <div className="container mt-4" style={todolist}>
     <h3 className='text-center my-3 mt-5'>Todos List </h3>

     {props.todos.length===0?"No Todos to Display":
     props.todos.map((todo)=>
     {     
             
            return (
            <>
            <Todo todo={todo}  key={todo.sno} onDelete={props.onDelete}/> <hr />
            </>
            )
            

     })
     }
     
    
   </div>
  )


  
}
