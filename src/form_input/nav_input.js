import { Link } from "react-router-dom";


export const EditorNav= ({toggleSidebar})=>{

    return(
        // <nav className="navbar navbar-light fixed-top pd-0" style={{"backgroundColor":"#141824"}}>
        //     <h1 className="navbar-brand text-light" href="#" onClick={toggleSidebar}>DocIt </h1>
        //     <div>
        //         <Link className="navbar-brand text-light" to="/create">Create</Link>
        //         <Link className="navbar-brand text-light" to="/read">Read</Link>
        //         <Link className="navbar-brand text-light" to="/todo">ToDo</Link>
        //         <Link className="navbar-brand text-light" to="/account">Account</Link>
        //         <Link className="navbar-brand text-light" to="/family">Family</Link>
        //     </div>
        // </nav>
        <nav className="nav-container">
                <div>
                    <h1 className="logo-container" href="#" onClick={toggleSidebar}>MySpace </h1>
                </div>
                <div className="navbarTab-container">
                    <Link className="navbarTab" to="/create">Create</Link>
                    <Link className="navbarTab" to="/read">Read</Link>
                    <Link className="navbarTab" to="/todo">ToDo</Link>
                    <Link className="navbarTab" to="/account">Account</Link>
                    <Link className="navbarTab" to="/family">Family</Link>
                </div>
        </nav>
    )
  }