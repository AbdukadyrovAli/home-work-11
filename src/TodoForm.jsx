import React, { useState } from "react";
import { styled } from "styled-components";

export const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter new form..."
        />
        <Button>ADD</Button>
      </form>
    </>
  );
};
const Button = styled.button`
  background-color: red;
  color: white;
  border-radius: 10px;
  width: 70px;
  height: 40px;
  margin-left: 20px;
`;

const Input = styled.input`
  background-color: #fff;
  border: 3px solid blue;
  height: 40px;
  width: 300px;
  margin-top: 20px;
`;
