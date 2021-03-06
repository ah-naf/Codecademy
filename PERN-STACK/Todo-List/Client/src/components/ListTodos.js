import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTodo = async (id) => {
    const response = await fetch(`/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <table className="table mt-5 text-center table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>

                <td>
                  <EditTodo todo={todo} />
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
