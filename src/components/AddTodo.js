import React, { useState } from 'react'
import '../App.css';

export default function AddTodo(props) {

    const [text, setText] = useState('');
    const handleEnter = (e) => {
        if (e.keyCode === 13) {
    
            props.addTodoBtn(text)
            setText('');
        }
      }


    return (
        <>

            <div className="container d-flex ">
                <input type="text" value={text} onKeyDown={handleEnter} placeholder='Add a new Todo' onChange={e => { setText(e.target.value) }} style={{ width: '42vw' }} />
                <button className='btn btn-primary mx-3' onClick={() => {
                    props.addTodoBtn(text)
                    setText('');
                }} style={{ whiteSpace: 'nowrap' }}>Add Todo</button>
            </div>



        </>
    )
}
