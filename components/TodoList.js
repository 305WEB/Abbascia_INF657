import React, { useState } from "react";
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
                    textDecoration: "line-through"
                  }
                : null
            }
          >
            {task.title}
          </p>

          <p style={task.checked ? { textDecoration: "line-through" } : null}>
            - {task.description}
          </p>

          <em
            style={
              task.checked
                ? {
                    color: "orangered",
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
