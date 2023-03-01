import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import styles from './TodoList.module.scss'

const TodoList = ({ add, remove, important, complited }) => {
    const [text, setText] = useState('')
    const todos = useSelector((state) => state.todos);
    localStorage.setItem('all', JSON.stringify(todos))
    const onChange = ({ currentTarget: { value } }) => {
        setText(value)
    }
    const onAdd = () => {
        add(text)
    }
    const onRemove = (id) => {
        remove(id)
    }
    const onImportant = (importantId, checked) => {
        important(importantId, checked)
    }
    const onComplited = (e, complitedId) => {
        complited(complitedId)
        if (e.target.className === styles.notComplited) {
            return e.target.className = styles.complitedTodo
        } else {
            return e.target.className = styles.notComplited
        }
    }
    return (
        <div className={styles.container} >
            <div className={styles.bottom}>
                <Input onChange={onChange} className={styles.inp} />
                <button onClick={onAdd} className={styles.button} disabled={text === ''}>Add</button>
            </div>
            {
                todos.map((item, index) => {
                    return (
                        <div key={index} className={styles.todoContainer}>
                            <div className={styles.divTodo}>
                                <p className={styles.notComplited} onClick={(e) => {
                                    const complitedId = item.id;
                                    onComplited(e, complitedId)
                                }}>{item.todo}</p>
                                <div className={styles.icons}>
                                    <p onClick={() => {
                                        onRemove(item.id)
                                    }}>X</p>
                                    <input type="checkbox" onChange={(e) => {
                                        const checked = e.target.checked
                                        const importantId = item.id
                                        onImportant(importantId, checked)
                                    }} />
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </div >
    )
}

export default TodoList;