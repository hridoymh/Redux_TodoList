import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice'

const Todos = () => {
  const todos = useSelector((state)=>state.todos)
  const dispathch = useDispatch()

  const removeTodoHandler = (id) => {
      dispathch(removeTodo(id))
  }
  return (
    <>
    {
    todos.map((todo)=>(
        <div>
            <input className="hidden" type="checkbox" id={`task_${todo.id}`}/>
            <label className="flex items-center justify-between hover:bg-gray-900" htmlFor={`task_${todo.id}`}>
                <div className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900">
                <span className="ch flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                <span className="ml-4 text-sm">{todo.text}</span>
                </div>
                <span className='text-right p-1 bg-red-500 rounded hover:bg-red-600' onClick={()=>removeTodoHandler(todo.id)}>
                    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                    <path fill="currentColor" d="M8 11a1 1 0 100 2h8a1 1 0 100-2H8z" />
                    <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
            </label>
            
        </div>
    ))
    }
    </>
  )
}

export default Todos