import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'


const AddTodo = () => {
    const [input,setInput] = useState()
    const dispathch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispathch(addTodo(input))
        setInput('')
    }
  return (
    <div className=''>
        <form onSubmit={addTodoHandler} className='flex flex-col'>
            <input 
            onChange={(e)=> setInput(e.target.value)}
            value={input}
            className='bg-gray-700 text-white rounded border-2 border-gray-500'
            />
            <input type="submit" value="submit"/>
        </form>
    </div>
  )
}

export default AddTodo