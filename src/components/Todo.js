import { useState } from "react";

export function Todo() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const addTodo = () => {
    const id = currentId;
    const newTodo = { id, title: value };
    setCurrentId(currentId + 1);

    setTodos([...todos, newTodo]);

    setValue("");
  };

  const deleteAll = () => {
    setTodos([]);
    setCurrentId(1);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Текст"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addTodo}>Добавить</button>
      <button onClick={deleteAll}>Удалить все</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
