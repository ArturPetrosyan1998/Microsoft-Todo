const Input = (props) => {
    const { ...rest } = props
    return (
        <input type="text" placeholder="Add a task" {...rest} />
    )
}

export default Input;