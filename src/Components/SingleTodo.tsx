import React, { useState,useEffect,useRef } from 'react'

import{AiFillEdit,AiFillDelete} from "react-icons/ai"
import{MdDone} from "react-icons/md"
 interface Todos{
  id:number;
  isDone:boolean;
  todo:string;
  edit:(e:React.FormEvent, id:number, edited:string)=>void
  handleDone:(e:React.MouseEvent,id:number)=>void
  handleDelete:(event:React.MouseEvent,id:number)=>void
}


const SingleTodo = ({id,todo,isDone,edit,handleDone,handleDelete}:Todos) => {

  const [Edit,setEdit] =useState<boolean>(false)
  const [toEdit,settoEdit] =useState<string>(todo)
  const inputele = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputele.current?.focus()

  },[Edit])
  
  
  
  return (
    
    <div className='w-[98%] bg-back_img flex py-5 mb-5  px-8 rounded-lg md:w-[29%]'>
        <form action="" className='w-full flex  ' onSubmit={(e)=>{
          e.preventDefault()
          edit(e, id,toEdit)
          setEdit(false)
        
        }} >
          {Edit && !isDone ?(
            <div className='flex-1'>
          <input value={toEdit}
          onChange={(e)=>{settoEdit(e.target.value)}}
          ref={inputele}
          className='outline-none px-3 '

          
          /></div>):isDone?(
            <p className='flex-1 text-xl line-through'>{todo}</p> ):(
              <p className='flex-1 text-xl'>{todo}</p>

            )}
            <div className='flex space-x-2 text-xl'>
                <span onClick={()=>{setEdit(!Edit)}}><AiFillEdit/></span>
                <span  onClick={(e)=>{handleDelete(e,id)}}><AiFillDelete/></span>
                <span  onClick={(e)=>{handleDone(e,id)}}><MdDone/></span>

            </div>

        </form>
        
      
    </div>
  )
}

export default SingleTodo
