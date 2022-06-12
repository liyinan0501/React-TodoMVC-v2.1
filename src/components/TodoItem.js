import { useContext, useState, useRef, useEffect } from 'react'
import { Context } from '../App'

const TodoItem = ({ item }) => {
  const { delTodo, changeDone, changeName } = useContext(Context)
  const [current, setCurrent] = useState({
    id: '',
    name: '',
  })
  const showEdit = ({ id, name }) => {
    setCurrent({
      id: id,
      name: name,
    })
  }
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [current])

  const onKeyUp = (e) => {
    if (e.keyCode === 27) {
      setCurrent({ id: '', name: '' })
    }
    if (e.keyCode === 13) {
      changeName(current)
      setCurrent({ id: '', name: '' })
    }
  }
  return (
    <li
      key={item.id}
      className={[
        item.done ? 'completed' : '',
        current.id === item.id ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={item.done}
          onChange={() => {
            changeDone(item.id)
          }}
        />
        <label onDoubleClick={() => showEdit(item)}>{item.name}</label>
        <button className="destroy" onClick={() => delTodo(item.id)} />
      </div>
      <input
        className="edit"
        value={current.name}
        ref={inputRef}
        onBlur={() => setCurrent({ id: '', name: '' })} // 里面不能是null，否则上面className 读取current.id 读取不了会报错。
        onChange={(e) => setCurrent({ ...current, name: e.target.value })}
        onKeyUp={onKeyUp}
      />
    </li>
  )
}
export default TodoItem
