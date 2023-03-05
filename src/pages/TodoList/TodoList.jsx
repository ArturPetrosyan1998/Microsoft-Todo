import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import styles from './TodoList.module.scss';
import imgRemove from "./assets/Icons/remove.svg"
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
const TodoList = ({ add, remove, important, complited }) => {
    const [text, setText] = useState('')
    const todos = useSelector((state) => state.todos);
    console.log(todos);
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
                            <div className={styles.divTodo} >
                                <div className={styles.content} >
                                    <p onClick={(e) => {
                                        const complitedId = item.id;
                                        let className = e.target.className
                                        className === styles.content ?
                                            e.target.className = styles.contentComplited :
                                            e.target.className = styles.content;
                                        onComplited(e, complitedId)
                                    }}>{item.todo}</p>
                                    <div className={styles.icons}>
                                        <img src={imgRemove} alt="" className={styles.imgRemove} onClick={() => {
                                            onRemove(item.id)
                                        }} />
                                        <input type="checkbox" className={styles.checkbox} checked={item.isImportant} onChange={(e) => {
                                            const checked = e.target.checked
                                            const importantId = item.id
                                            onImportant(importantId, checked)
                                        }} />
                                    </div>
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