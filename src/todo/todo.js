import { useState } from "react";
import axios from 'axios';
import FormSubmitBtn from '../form_input/button_type';
import {SolutionEditor, ProblemInput, FileTypeInput, Category} from '../form_input/text_input';
import { EditorNav } from "../form_input/nav_input";
import { Link } from "react-router-dom";

const TodoNav = ()=>{
  return (
    <nav className="navbar navbar-light bg-dark pd-0">
    <Link className="navbar-brand text-light" to="/todo">Todo :)</Link>
    <div>
        <Link className="navbar-brand text-light" to="todo">Add</Link>
        <Link className="navbar-brand text-light" to="/">View</Link>
    </div>
</nav>
  )
}


const ToDO = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("ToDO Submit")
  }

  return (
      <div className="todo-container">
        <div className="todo-container2">
        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <input type="text" className="form-control c-dark" aria-describedby="ToDo Title" placeholder="Add Todo"/>
            <textarea className="form-control c-dark" aria-describedby="Todo Description" placeholder="Todo Description"/>
            <div className="input-data-contaner">
              <label>Last date</label>
              <input type="date" className="form-control c-dark" aria-describedby="date" placeholder="DD|MM|YYYY"/>
              <label>Last time</label>
              <input type="time" className="form-control c-dark" aria-describedby="time" placeholder="HH:MM"/>
            </div>
            <FormSubmitBtn/>
          </div>
        </form>
        </div>
      </div>
  );
}


export default ToDO;
