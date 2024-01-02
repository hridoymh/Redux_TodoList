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
    <form onSubmit={addTodoHandler}>
      <div className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
          <svg className="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <input className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task" value={input} onChange={e=>setInput(e.target.value)}/>
      </div>
    </form>
  )
}

export default AddTodo