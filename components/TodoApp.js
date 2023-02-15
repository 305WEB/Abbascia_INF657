import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./Styles";

export default function TodoApp({ handleAdd }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length !== 0 && description.trim().length > 3) {
      const newTask = {
        title: title,
        description: description
      };

      handleAdd(newTask);
      setTitle("");
      setDescription("");
    } else {
      alert(
        "Please enter more than 3 characters for Title and Description fields."
      );
    }
  };

  return (
    <div style={Styles.card}>
      <form onSubmit={handleSubmit} style={Styles.form}>
        <h2> Add a Task to List</h2>
        <br />
        <div className="inputbox">
          <input
            onChange={handleTitleChange}
            type="text"
            placeholder="    Task Title"
            value={title}
          />
          <input
            onChange={handleDescriptionChange}
            type="text"
            placeholder="    Task Description"
            value={description}
          />
        </div>
        <br /> <br />
        <button className="btn">Add Item</button>
      </form>
    </div>
  );
}
