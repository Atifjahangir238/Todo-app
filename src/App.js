import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App(props) {
  const [listTodo, setListTodo] = useState([]);

  const addTodoBtn = (text) => {
    if (text !== '') {
      setListTodo([...listTodo, text])
    }
  }
  const deleteListItem = (key) => {
    let newListItem = [...listTodo];
    newListItem.splice(key, 1);
    setListTodo([...newListItem]);

  }
  return (
    <>
      <div className="container  app shadow-lg my-5" style={{ width: '50vw', height: 'auto', borderRadius: '8px' }}>
        <h2 className='text-start p-3'>Todo List</h2>

        <AddTodo addTodoBtn={addTodoBtn} />
        {listTodo.map((listItem, i) => {
          return (
            // <TodoList key={i} index={i}  deleteListItem={deleteListItem} />
            <TodoList key={i} index={i} item={listItem} deleteListItem={deleteListItem} />
          )
        })}

      </div>
    </>
  );
}

export default App;
