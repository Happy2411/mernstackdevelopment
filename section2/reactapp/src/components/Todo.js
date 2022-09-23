import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {

    const [todoList, setTodoList] = useState([ 'Eat', 'Play', 'Sleep' ]);
    const [todotext, setTodotext] = useState("");


    // const nums = [1, 2, 3, 4];

    // const displayNums = () => {
    //     return nums.map( (n) => ( 
    //         <div className='card mt-5'>
    //             <div className='card-body'>
    //                 <h1>{n}</h1>
    //             </div>
    //         </div>
    //      ) )
    // }

    const addTodo = () => {
        if(todotext){
            setTodoList([ ...todoList, todotext ]);
            setTodotext("");
        }
    }

    const removeTodo = (index) => {
        let temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
    }

    const displayTodoList = () => {
        return todoList.map( (task, index) => (
            <div key={index}
            
            className='todo d-flex justify-content-between'>
                <p className='todo-text'>{task}</p>
                <button className='btn btn-danger' onClick={() => {removeTodo(index)}}> <i class="fas fa-trash"></i> </button>
            </div>
         ))
    }


  return (
    
    <div className='container py-5'>
        <p className='display-4 text-center mb-5'>TODO LIST</p>
        <div className='input-group'>
            <input className='form-control' value={todotext} onChange={(e) => {setTodotext(e.target.value)}} />
            <button className='btn btn-primary' onClick={addTodo}>Add New Task</button>
        </div>

        {/* calling function */}
        {displayTodoList()}
    </div>
    
  )
}

export default Todo;