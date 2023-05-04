import React, { useState } from 'react'

export default function AddToDo(props) {
    const [item, setItem] = useState("");
    
    const handleChange = (e) =>{
        setItem(e.target.value)
    }

    const addToDo = () => {
       if(item.length != 0){
            props.setTodo(prevItem => [...prevItem, {
                id: props.itemNum+1,
                title:item,
                isCompleted: false
            }]);
        }
        else{
            try{
                throw new Error("Input is missing")
            }
            catch(err){
                console.log(err)
            }
        }
      
    }

    return (
        <div>
            <input placeholder='Add to do' name="item" onChange={handleChange}/>
            <button onClick={addToDo}>Click to Add</button>
        </div>
    )
}
