import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetcher = (url: string) =>
  axios.get<Todo[]>(url, { params: { _limit: 10 } }).then((res) => res.data);

const TodoList: React.FC = () => {
  const { data, error, mutate } = useSWR<Todo[]>(
    "http://localhost:3006/todo",
    fetcher
  );

  const [newTodoList, setNewTodoList] = useState("");

  const addTodoList = () => {
    axios
      .post<Todo>("http://localhost:3006/todo", {
        title: newTodoList,
        completed: false,
      })
      .then((res) => {
        const newTodoItemList = [...(data! ?? []), res.data];
        mutate(newTodoItemList, false);
        setNewTodoList("");
      });
  };

  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodoList}
          onChange={(e) => setNewTodoList(e.target.value)}
        />
        <button onClick={addTodoList}>Add Todo List</button>
      </div>
      {data ? (
        data.map((todo) => {
          return <h1 key={todo.id}>{todo.title}</h1>;
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default TodoList;
