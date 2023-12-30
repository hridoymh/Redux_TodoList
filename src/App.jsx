import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className=''>
      <div className="flex justify-center">
        <h1 className='text-4xl font-bold m-6'>Todo List using Redux</h1>
      </div>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
