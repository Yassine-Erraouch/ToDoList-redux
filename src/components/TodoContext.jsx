import { createContext, useContext, useState, useEffect } from 'react'

const TodoContext = createContext()

export const useTodos = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodos must be used within TodoProvider')
  }
  return context
}

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('futuristic-todos')
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('futuristic-todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    setTodos([...todos, {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}
