import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/userContext'
import TodoListContextProvider from './context/todoListContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoListContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </UserContextProvider>
  </TodoListContextProvider>
)
