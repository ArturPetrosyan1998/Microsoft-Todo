import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";

const TodoList = ({ add, remove, important }) => {
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
    const onImportant = (importantId,checked) => {
        important(importantId,checked)
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
                        <input type="checkbox" onChange={(e) => {
                            const checked = e.target.checked
                            const importantId = item.id
                            onImportant(importantId,checked)
                        }}/>
                    </div>
                )
            })
            }

        </div>
    )
}

export default TodoList;