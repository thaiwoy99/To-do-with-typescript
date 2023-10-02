import React from 'react'
import { Todos } from "../models"
import SingleTodo from './SingleTodo'
 interface props{
    todos:Todos[]
    edit:(e:React.FormEvent, id:number, edited:string)=>void
    handleDone:(event:React.MouseEvent,id:number)=>void
    handleDelete:(event:React.MouseEvent,id:number)=>void
    
 }
const InputList = ({todos,edit,handleDone,handleDelete}:props) => {
  return (
    <div className=' w-[90%] flex justify-evenly flex-wrap m-auto '>
        {todos.map(todo=>{

            return(
                <SingleTodo {...todo} key={todo.id} edit ={edit} handleDone={handleDone}  handleDelete={handleDelete}/>
            )
        })}
      
    </div>
  )
}

export default InputList
