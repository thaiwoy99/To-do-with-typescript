import react from "react"
import React from 'react'
import { useState } from "react"
import { Todos } from "../models"
import InputList from "./InputList"

const InputField = () => {
    const [Todo, setTodo] = useState<string>("")
    const [todos,settodos] = useState<Todos[]> ([])
    const UpdateTodo=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setTodo(e.target.value)
      
 }

 const UpdateTodos =(e:React.FormEvent)=>{
  e.preventDefault()
  if(Todo){
    settodos(prev=>[...prev,{id:Date.now(),todo:Todo,isDone:false}])
    setTodo("")
  }
  

 }
 const Edit =(e:React.FormEvent, id:number, edited:string )=>{
  settodos(todos.map((todo)=>{
    return todo.id==id ? {...todo , todo:edited} : todo

  }))


 }
 const handleDone=(event:React.MouseEvent, id:number)=>{
  settodos(todos.map(todo=>{
    return todo.id==id ?{...todo,isDone:true}:todo
  }))
    

 }
 const handleDelete=(event:React.MouseEvent,id:number)=>{
  settodos(todos.filter(todo =>todo.id !==id))
 }



 

    
  return (
    <div>
    
    <form action="" className="relative w-[95%] mx-auto   flex flex-col mb-5 " onSubmit={UpdateTodos} >
        <input type="text" className="w-[100%]   py-[15px] outline-none rounded-full px-[20px] text-lg" 
        value={Todo}  placeholder="Enter a task " onChange={UpdateTodo}/>
<button 
 className=" w-[50px] h-[50px] rounded-full text-white
  bg-[#2f74c0] shadow-[0_0 _10px_rgb(0,0,0,0.3)] absolute right-0  m-[6px] text-xl transition-all hover:bg-[#388ae2] duration-500 active:scale-50" type="submit">
Go</button>

    </form>
    <InputList todos={todos} edit ={Edit} handleDone={handleDone} handleDelete={handleDelete}/>
    </div>
  )
}

export default InputField
