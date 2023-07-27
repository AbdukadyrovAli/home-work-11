import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import "./App.css";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

function App() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const completeTask = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  const countCompletedTasks = () => {
    return todos.filter((todo) => todo.complete).length;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Container>
          <h3>Всего: {todos.length}</h3>
          <h3>Невыполненные: {todos.filter((todo) => !todo.complete).length}</h3>
          <h3>Выполненные: {countCompletedTasks()}</h3>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? "Светлая тема" : "Темная тема"}
          </button>
        </Container>
      </header>

      <H>Todo-List</H>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

const H = styled.h1`
  background-color: #fff;
  margin-top: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border: 3px solid white;
  width: 100%;
  height: 60px;
  border-radius: 20px;

  h3 {
    background-color: #fff;
  }
  button {
    background-color: #fff;
  }
`;

export default App;
