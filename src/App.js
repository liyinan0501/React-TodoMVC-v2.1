import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'

import { useState } from 'react'

const todos = [
  { id: 1, name: 'Learning Hooks', done: false },
  { id: 2, name: 'Learning Redux', done: false },
  { id: 3, name: 'Learning React', done: true },
]
const App = () => {
  const [list, setList] = useState(todos)
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain list={list} />
      <TodoFooter />
    </section>
  )
}

export default App
