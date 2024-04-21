import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  // State to hold the value of the input field
  const [todoText, setTodoText] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (todoText.trim() !== "") {
      // Call the addTodo function passed from the parent component
      addTodo(todoText);
      // Clear the input field
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Bind the value of the input field to the state */}
      <h2>Task</h2>
      <input
        type="text"
        placeholder="Enter your todo here..."
        value={todoText}
        onChange={handleChange}
      />
      <div className="data">
        <div className="des">
          <label htmlFor="info">Descraption</label>
          <textarea name="" id="info"></textarea>
        </div>
        <div className="date">
          <label htmlFor="from">From</label>
          <input type="date" id="from" />
          <br />
          <label htmlFor="to">To</label>
          <input type="date" id="to" />
          <br />
          <label htmlFor="time">Time</label>
          <input type="time" id="time" value="time" />
        </div>
        <div className="categories">
          <label htmlFor="cruc">Crucial</label>
          <input type="radio" id="cruc" name="categories" />
          <label htmlFor="dep">Depends</label>
          <input type="radio" id="dep" name="categories" />
          <label htmlFor="irr">Irrelevant</label>
          <input type="radio" id="irr" name="categories" />
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
