import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";

const TodoList = ({ add, remove, id }) => {
    const [text, setText] = useState('')
    const todos = useSelector((state) => state.todos)
    const onChange = ({ currentTarget: { value } }) => {
        setText(value)
    }
    const onAdd = () => {
        add(text)
    }
    const onRemove = (id) => {
        remove(id)
    }
    return (
        <div>
            <Input onChange={onChange} />
            <button onClick={onAdd}>Add</button>
            {todos.map((item, index) => {
                return (
                    <div key={index}>
                        {item.todo}
                        <button onClick={() => {
                            onRemove(item.id)
                        }}>Remove</button>
                        <input type="checkbox"/>
                    </div>
                )
            })
            }

        </div>
    )
}

export default TodoList;