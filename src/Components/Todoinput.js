import React, { useEffect, useState } from "react";
import { firebaseDB } from "../firebaseconfig";
import firebase from "firebase";
import "./todoinput.css";
import Todolisttile from "./Todolisttile";

const Todoinput = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    firebaseDB.collection("Todo").onSnapshot(function (qs) {
      setTodoList(
        qs.docs.map((todo) => ({
          id: todo.id,
          todo: todo.data().todo,
          inProgress: todo.data().inProgress,
        }))
      );
    });
  };

  const addToDo = (e) => {
    e.preventDefault();
    firebaseDB.collection("Todo").add({
      todo: todoInput,
      inProgress: true,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodoInput("");
  };



  return (
    <div>
      <div className="container">
        <div className="sub-container">
          <form>
            <input
              className="todoinput"
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              value={todoInput}
              type="text"
              placeholder="Enter todo task:"
            />
            <button style={{cursor:"pointer"}} type="submit" onClick={addToDo} className="todobtn">
              Add
            </button>
          </form>
          {todoList.map((currentTodo) => {
            return (
              <Todolisttile
                id={currentTodo.id}
                todo={currentTodo.todo}
                inprogress={currentTodo.inProgress}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todoinput;
