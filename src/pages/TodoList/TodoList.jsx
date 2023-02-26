import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const TodoList = ({ add }) => {
    const [text, setText] = useState('')
    const onChange = (event) => {
        setText(event.target.value)
    }
    return (
        <div>
            <Input onChange={onChange} />
            <Button onClick={add}>ADD</Button>
        </div>
    )
}

export default TodoList;