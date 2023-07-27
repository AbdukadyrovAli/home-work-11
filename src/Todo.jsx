import React, { useState } from "react";
import { styled } from "styled-components";
import "./Todo.css";

export const Todo = ({ todo, completeTask, deleteTask }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteWithConfirmation = () => {
    setShowModal(true);
  };

  const handleDeleteConfirmed = () => {
    deleteTask(todo.id);
    setShowModal(false);
  };

  const handleDeleteCancelled = () => {
    setShowModal(false);
  };

  return (
    <div key={todo.id}>
      <Container>
        <div className={todo.complete ? "item-text" : ""}>{todo.task}</div>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => completeTask(todo.id)}
        />
        <button onClick={handleDeleteWithConfirmation}>удалить</button>
      </Container>

      {showModal && (
        <ModalCont className="modal">
          <p>Вы уверены, что хотите удалить эту задачу?</p>
          <Button1 onClick={handleDeleteConfirmed}>Да</Button1>
          <Button2 onClick={handleDeleteCancelled}>Отмена</Button2>
        </ModalCont>
      )}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  background-color: #fff;
  margin-left: 130px;
  margin-top: 20px;
  height: 50px;
  gap: 20px;
  /* margin-bottom: 50px; */
  div {
    background-color: #fff;
    margin-left: 10px;
  }
  button {
    background-color: red;
    color: white;
    margin-right: 10px;
    height: 30px;
    border-radius: 10px;
  }
`;
const ModalCont=styled.div`
background-color: #FFF;
p{
  background-color: #FFF;
}

`
const Button1=styled.button`
background-color: green;
width: 70px;
height: 30px;
border-radius: 20px;
color: #FFF;
`
const Button2=styled.button`
background-color: red;
width: 90px;
height: 30px;
border-radius: 20px;
color: #FFF;`