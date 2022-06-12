import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'

import React, { useState } from 'react'

export const Context = React.createContext()
const { Provider } = Context
const todos = [
  { id: 1, name: 'Learning Hooks', done: false },
  { id: 2, name: 'Learning Redux', done: false },
  { id: 3, name: 'Learning React', done: true },
]
const App = () => {
  const [list, setList] = useState(todos)

  // 添加任务
  const addTodo = (name) => {
    setList([{ id: Date.now(), name, done: false }, ...list])
  }

  // 删除任务
  const delTodo = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <Provider value={{ delTodo: delTodo }}>
      <section className="todoapp">
        <TodoHeader addTodo={addTodo} />
        <TodoMain list={list} />
        <TodoFooter />
      </section>
    </Provider>
  )
}

export default App
