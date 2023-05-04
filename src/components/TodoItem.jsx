import React from 'react'

export default function TodoItem(props) {

    const handleDel = (index) => {
        const newTodos = [...props.todos];
        newTodos.splice(index, 1);
        props.setTodo(newTodos);
    }

    const handleDone = (index) => {
        const newTodos = [...props.todos];
        for (let i = 0; i < newTodos.length; i++) {
            if (newTodos[i].id == index + 1) {
               newTodos[i].isCompleted=!newTodos[i].isCompleted
            }
        }
        console.log(newTodos);
        props.setTodo(newTodos);
    }

    return (
        <div>
            {(props.todos.length != 0) ? (
                <div>
                    {props.todos.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item.id}:{item.title}</p>
                                {(item.isCompleted)?(<div>This task is completed</div>):(<div></div>)}
                                <button onClick={() => handleDel(index)}>Del</button>
                                <button onClick={() => handleDone(index)}>Done</button>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div>
                    <p>There is nothing here</p>
                </div>
            )}
        </div>
    )
}
