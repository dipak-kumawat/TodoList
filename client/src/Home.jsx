import React, { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";

const Home = () => {
  const [todos, setTodos] = useState([]);
useEffect(() => {
  axios.get("/get")
  .then((response) => {
    setTodos(response.data);
    console.log(response.data);
  })
  .catch((error) => {
    console.error("There was an error!", error);
  });

}, []);


  const handleEdit = (id) => {
    axios
      .put("/update/" + id)
      .then((result) => {
        location.reload()
      })
      .catch((err) => console.log(err));
  };

  
  const handleDelete = (id) => {
    axios
      .delete("/delete/" + id)
      .then((result) => {
        location.reload()
      })
      .catch((err) => console.log(err));
      }

  return (
    <div className="home">
      <h2> To Do List <i className="uil uil-clipboard-notes"></i></h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo, index) => (
          // Corrected the arrow function to return the JSX element
          <div key={index} className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? <i class="uil uil-check-circle"></i> 
              :
              <i className="uil uil-circle"></i>
              }
              <p className={todo.done ? "line_throungh" :"" }>  
              {todo.task}
              </p>
            </div>
            <i className="uil uil-trash-alt" onClick={() =>handleDelete(todo._id)}></i>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
