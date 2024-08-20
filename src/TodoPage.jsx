import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './TodoPage.module.css'

const TodoPage = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState([])
    const [done, setDone] = useState([])
    const [edit, setEdit] = useState(false)
    const [index2, setIndex] = useState(0)
    const DoneFunction = (index) => {
        setDone([...done, todos[index]])
        setTodos(todos.filter(todo => todo != todos[index]))
        console.log(done)
        console.log(todos)
    }
    const DeleteFunction = (index) => { 
        setTodos(todos.filter(todo => todo != todos[index]))
    }
    const EditFunction = (index) => {
        setInput(todos[index])
        setIndex(index)
        setEdit(true)
    }
    const UpdateFunction = (index) => {
        setTodos(todos.map((todo,i) => i == index ? input : todo))
        setEdit(false)
    }
    return (
        <div className={style.page}>
            <h1>Todo List</h1>
            <input type="text" onChange={(e) => {setInput(e.target.value)}} />
            <button onClick={() => { edit ? UpdateFunction(index2) : setTodos([...todos, input])}}>{edit && "Update" || "Add"}</button>
            <ul className={style.list}>
            { 
               todos.length != 0 ? todos.map((todo,index) => (<li key={uuidv4()}>{todo} <button onClick={()=>DoneFunction(index)}> Done </button> <button onClick={()=>DeleteFunction(index)}> Delete </button><button onClick={()=>EditFunction(index)}> Edit </button></li>)) : <li> No todos </li>
            }
            </ul>
        </div>
    )
}
export default TodoPage
