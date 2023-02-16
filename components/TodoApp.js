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
        "Please enter Title and more than 3 characters for Description field."
      );
    }
  };

  return (
    <div style={Styles.card}>
      <form onSubmit={handleSubmit} style={Styles.form}>
        <h2> Add Item to List</h2>
        <br />
        <div>
          <input
            onChange={handleTitleChange}
            type="text"
            placeholder="    Title"
            value={title}
          />
          <input
            onChange={handleDescriptionChange}
            type="text"
            placeholder="    Description"
            value={description}
          />
        </div>
        <br /> <br />
        <button>Add Item</button>
      </form>
    </div>
  );
}
