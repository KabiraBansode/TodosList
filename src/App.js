
import './App.css';
// import React, { useState } from 'react';
import Header from './My_Components/Header';
import {Todos} from './My_Components/Todos';
import { AddTodo } from './My_Components/AddTodo';
import {Footer} from './My_Components/Footer';
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './My_Components/About';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null) {
     initTodo=[];
  }
  else{
     initTodo=JSON.parse(localStorage.getItem("todos"))
  }

    const onDelete=(todo)=>
    {
      console.log("I m Ondelete Function of todo", todo);
      
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }));
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    const addTodo=(title,desc)=>
    {
      console.log("I am Adding this Todo",title,desc)
      let sno;
       
       if(todos.length===0)
       {
         sno=1;
       }
       else
       {
       sno=todos[todos.length-1].sno +1;
      }

       const myTodo=
       {
         sno:sno,
         title:title,
         desc:desc,
       }

       console.log(myTodo)

       setTodos([...todos,myTodo]);
     
    }
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
  return (
    <>
      <BrowserRouter>
     <Header title="MY TODOS LIST" SearchBar={false} />


               <Routes>

               <Route excat path="/" element={
                 <>
                     <AddTodo addTodo={addTodo}/>
                    <Todos todos={todos} onDelete={onDelete}/>
                 </>
               }> 
               </Route>


               <Route excat path="/about" element={<About/>}></Route>


               </Routes>
           

  

      <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
