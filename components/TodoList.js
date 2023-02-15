import React, { useState } from "react";
// import Task from "./Task";
import Styles from "./Styles";

export default function TodoList({ taskList, handleCheck }) {
  if (!taskList || taskList.length === 0) {
    return <p>No Items</p>;
  }

  return (
    <div style={Styles.cardList}>
      {taskList.map((task) => (
        <div style={Styles.card}>
          <input
            className="item"
            type="checkbox"
            checked={task.checked}
            onChange={() => {
              handleCheck(task.id);
            }}
          ></input>

          <p
            style={
              task.checked
                ? {
                    textDecoration: "line-through",
                    color: "green"
                  }
                : null
            }
            className="text-display"
          >
            {task.title}
          </p>

          <p
            style={
              task.checked
                ? { textDecoration: "line-through", color: "green" }
                : null
            }
          >
            - {task.description}
          </p>

          <em
            style={
              task.checked
                ? {
                    color: "green",
                    right: "30px",
                    bottom: "30px",
                    position: "absolute"
                  }
                : { display: "none" }
            }
          >
            Completed
          </em>
        </div>
      ))}
    </div>
  );
}
