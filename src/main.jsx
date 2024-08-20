import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CoursesPage from './CoursesPage.jsx'
import CartPage from './CartPage.jsx'
import './index.css'
import TodoPage from './TodoPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CoursesPage />
    <CartPage />
    <TodoPage />
  </StrictMode>,
)
