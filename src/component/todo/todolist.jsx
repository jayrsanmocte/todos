import React, { useState, useEffect } from 'react';

const Todos = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/todos?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setData(data.todos);
      })
      .then(() => {
        setTimeout(() => {
          let table = new DataTable('#myTable');
        }, 500);
      });
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setLoading(true);
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: input,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((todoData) => {
        setData((prevData) => [...prevData, todoData]);
      })
      .then(() => setInput(''))
      .then(() => {
        setLoading(false);
        // let table = new DataTable('#myTable');
      });
  };

  const handleDelete = (id) => {
    const isNewlyAdded = data.some((todo) => todo.id === id);

    if (isNewlyAdded) {
      setData((prevData) => prevData.filter((todo) => todo.id !== id));
      return;
    }

    fetch(`https://dummyjson.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setData((prevData) => prevData.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className='container' id='tododo'>
        Todo-List
      </div>
      <input type='text' onChange={handleChange} value={input} />
      <button onClick={handleSubmit}>ADD</button>
      <table className='table table-dark table-striped' id='myTable'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Todo</th>
            <th scope='col'>User ID</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo, index) => (
            <tr key={todo.id}>
              <th scope='row'>{index + 1}</th>
              <td>{todo.todo}</td>
              <td>{todo.userId}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => handleDelete(todo.id)}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
