import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import styles from './TodoList.module.scss';
import imgRemove from "./assets/Icons/remove.svg"
import classNames from "classnames/bind";
import { getTodos } from "../../redux/selectors/getTodos";
import Button from "../../components/Button/Button";
const cx = classNames.bind(styles)


const TodoList = ({ add, remove, important, complited }) => {
    const [text, setText] = useState('')
    const todos = useSelector((state) => getTodos(state));
    localStorage.setItem('all', JSON.stringify(todos))

    const onChange = ({ currentTarget: { value } }) => {
        setText(value)
    }

    const onAdd = () => {
        add(text)
        setText('')
    }

    const onRemove = (id) => {
        remove(id)
    }

    const onImportant = (id, checked) => {
        important(id, checked)
    }


    const onComplited = (id) => {
        complited(id)
    }
    return (
        <div className={styles.container} >
            <div className={styles.bottom}>
                <Input
                    name='task'
                    value={text}
                    onChange={onChange}
                    className={styles.inp}
                />
                <Button
                    onClick={onAdd}
                    className={styles.button}
                    disabled={text === ''}
                >
                    Add
                </Button>
            </div>
            {
                todos.map((item, index) => {
                    return (
                        <div key={index} className={styles.todoContainer}>
                            <div className={styles.divTodo} >
                                <div className={styles.content} >
                                    <p className={styles.content} onClick={(e) => {
                                        let className = e.target.className
                                        className === styles.content ?
                                            e.target.className = styles.contentComplited :
                                            e.target.className = styles.content;
                                        onComplited(item.id)
                                    }}>{item.todo}</p>
                                    <div className={styles.icons}>
                                        <img src={imgRemove}
                                            alt="remove img"
                                            className={styles.imgRemove}
                                            onClick={() => {
                                                onRemove(item.id)
                                            }} />
                                        <Input
                                            type="checkbox"
                                            name='checkbox'
                                            className={styles.checkbox}
                                            checked={item.isImportant || false}
                                            onChange={(e) => {
                                                const checked = e.target.checked
                                                onImportant(item.id, checked)
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