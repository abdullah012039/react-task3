import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyHeader from './MyHeader'
import MyButton from './MyButton'
import SectionHeader from './SectionHeader'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="task1">
      <MyHeader />
      <MyButton />
    </div>
  )
}

export default App
