import { Fragment } from "react";
import { Link } from "react-router-dom";


import "./style.css";
// https://www.instagram.com/p/CpiGaN8qxsY/
// https://www.instagram.com/p/CzbeuCPB7n3/
// https://www.instagram.com/p/Cw8eug1tI5p/


// Todo: merge active and simple tab set default values: done

const SideBarTab = ({title, styleClassName, onClick, to, active}) => {
    return(
        <Link className={`${styleClassName} ${active && "active"}`} onClick={onClick} to={to}>{title}</Link>
    )
}


const SideBar = ({show , toggleSidebar}) =>{

    return(
        <Fragment>
            <div 
                className={`sidebar-backdrop ${show && "show"}`}
                onClick={toggleSidebar}
            ></div>
            <nav id="sidebar" className={`sidebar ${show && "show"}`}>
                <h2 className="title">
                    <i className="bi bi-view-list"></i>
                    PageTitle
                </h2>
                <ul>
                    <div className="sidebarTabContainer">
                        <SideBarTab 
                            title="Create" 
                            styleClassName="sideBarTab"
                            onClick={toggleSidebar}
                            to="/create"
                            active={true}
                        />
                        <SideBarTab 
                            title="Read" 
                            styleClassName="sideBarTab"
                            onClick={toggleSidebar}
                            to="/read"
                            active={false}
                        />
                        <SideBarTab 
                            title="ToDo" 
                            styleClassName="sideBarTab"
                            onClick={toggleSidebar}
                            to="/todo"
                            active={false}
                        />
                        <SideBarTab 
                            title="Family" 
                            styleClassName="sideBarTab"
                            onClick={toggleSidebar}
                            to="/family"
                            active={false}
                        />
                        <SideBarTab 
                            title="TicTacToe" 
                            styleClassName="sideBarTab"
                            onClick={toggleSidebar}
                            to="/home"
                            active={false}
                        />
                    </div>
                </ul>
            </nav>
        </Fragment>
    )
}

export default SideBar;