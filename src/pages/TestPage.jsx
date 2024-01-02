import React from 'react'
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import { useSelector } from 'react-redux'

const TestPage = () => {
    

  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
        <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
            <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
                <div className="flex items-center mb-6">
                    <svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <h4 className="font-semibold ml-3 text-lg">Hridoy's Tasks</h4>
                </div>
                <Todos/>
                
                {/* <div>
                    <input className="hidden" type="checkbox" id="task_7"/>
                    <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_7">
                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">Eavesdrop on Master Frodo & Gandalf.</span>
                    </label>	
                </div>
                <div>
                    <input className="hidden" type="checkbox" id="task_8"/>
                    <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_8">
                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">Boil, mash, and stick potatoes in stew.</span>
                    </label>	
                </div>
                <div>
                    <input className="hidden" type="checkbox" id="task_9"/>
                    <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_9">
                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">Carry Frodo.</span>
                    </label>	
                </div>
                <div>
                    <input className="hidden" type="checkbox" id="task_10"/>
                    <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_10">
                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <span className="ml-4 text-sm">Be all round legend.</span>
                    </label>	
                </div> */}
                <AddTodo/>
            </div>
            
        </div>
    </div>
  )
}

export default TestPage