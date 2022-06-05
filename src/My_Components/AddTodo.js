import React from 'react';
import  { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    let btn=
    { 
        width:"100%"
    }
    let container={
        
        width:"500px"
    }

    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit=(e)=>
    {
           
           e.preventDefault();
           if(!title || !desc)
           {
             alert("Title and Description cannot be Blank")
           }
          else
          {
          addTodo(title,desc);
          settitle("");
          setdesc("");
          }
    }
    
  return (
    <div className='container my-3 mt-5' style={container}>
        <h3 className='text-center mt-3'>Add a Todo List</h3>
        <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title}   onChange={(e)=>{settitle(e.target.value)}}  className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" value={desc}    onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-success btn-sm " style={btn}>Add Todo</button>
      </form>
    </div>
  )
}
