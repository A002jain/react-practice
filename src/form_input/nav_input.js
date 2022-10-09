import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


export const EditorNav= ()=>{
    return(
        <nav className="navbar navbar-light bg-dark pd-0">
            <Link className="navbar-brand text-light" to="/">DocIt :)</Link>
            <div>
                <Link className="navbar-brand text-light" to="/create">Create</Link>
                <Link className="navbar-brand text-light" to="/read">Read</Link>
                <Link className="navbar-brand text-light" to="/todo">ToDo</Link>
                <Link className="navbar-brand text-light" to="/account">Account</Link>
                <Link className="navbar-brand text-light" to="/family">Family</Link>
            </div>
        </nav>
    )
  }