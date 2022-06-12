import { useContext } from 'react'
import { Context } from '../App'

const TodoItem = ({ item }) => {
  const { delTodo, changeDone } = useContext(Context)
  return (
    <li key={item.id} className={item.done ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={item.done}
          onChange={() => {
            changeDone(item.id)
          }}
        />
        <label>{item.name}</label>
        <button className="destroy" onClick={() => delTodo(item.id)} />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  )
}
export default TodoItem
