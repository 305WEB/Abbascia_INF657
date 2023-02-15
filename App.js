import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import { useState } from "react";
// import TaskData from "./components/TaskData";
import TodoApp from "./components/TodoApp";
import Styles from "./components/Styles";

export default function App() {
  // holds list
  const ToDoData = [];
  const [taskList, setTaskList] = useState(ToDoData);

  const checkTask = (id) => {
    // checks if id we are getting from checkbox exists in tasklist, then will create new array (...task) where checked: false : (or) task
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (id) => {
    // creates new array without the selected id
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const addNextTask = (newTask) => {
    newTask.id = uuidv4();

    // adds newTask to array taskList
    setTaskList([newTask, ...taskList]);
    // to test console.log(newTask)
  };

  return (
    <View style={Styles.container}>
      <br />

      <h1>To Do List</h1>

      <br />

      <TodoApp handleAdd={addNextTask}></TodoApp>
      <br />

      <TodoList
        taskList={taskList}
        handleDelete={deleteTask}
        handleCheck={checkTask}
      />
    </View>
  );
}
