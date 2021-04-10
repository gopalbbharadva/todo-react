import React from "react";
import { firebaseDB } from "../firebaseconfig";

const Todolisttile = ({ id, todo, inprogress }) => {


    const checkTodo=()=>{
        firebaseDB.collection("Todo").doc(id).update({
            
            inProgress:!inprogress
        })
        console.log(inprogress);
    }

    const deleteTodo=()=>{
        firebaseDB.collection("Todo").doc(id).delete();
    }
  return (
    <div>
      <ul style={{ listStyleType: "none",margin:"1rem 0",padding:"0"}}>
        <li >
          <h3 style={{ textAlign: "start"}}>{`${todo}`}</h3>
          <small style={{ textAlign:"inherit",padding:"0",margin:"0" }}>
            {inprogress ? "Inprogress" : "Completed"}
          </small>
          <button 
          onClick={checkTodo} 
          style={{cursor:"pointer",fontSize:"small"}}>{inprogress?"Check":"uncheck"}</button>
          <button onClick={deleteTodo} style={{cursor:"pointer",backgroundColor:"red",fontSize:"small"}}>Delete</button>
        </li><br/>
        <hr style={{backgroundColor:"#A7F3D0",height:"1px"}}/>
      </ul>
    </div>
  );
};

export default Todolisttile;
