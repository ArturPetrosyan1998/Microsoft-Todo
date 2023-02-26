import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { getTodos } from "../../redux/selectors/getTodos";

const TodoList = ({ add, remove, id }) => {
    const [text, setText] = useState('')
    const todos = useSelector((state) => state.todos)
    const onChange = ({ currentTarget: { value } }) => {
        setText(value)
    }
    const onAdd = () => {
        add(text)
    }
    const onRemove = () => {
        remove()
    }
    return (
        <div>
            <Input onChange={onChange} />
            <button onClick={onAdd}>Add</button>
            {todos.map((item,index) => {
                return (
                    <div key={index}>
                        {item.todo}
                        <button onClick={onRemove}>Remove</button>
                    </div>
                )
            })
            }

        </div>
    )
}

export default TodoList;