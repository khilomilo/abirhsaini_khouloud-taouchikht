import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/tout.scss"


const Navigation = () => {
    return (
        <div className="Navigation">
            <h1>
            <NavLink className={"exo"} exact to="/" activeClassName='nan-active'>acceuil</NavLink>
            <NavLink className={"exo"} exact to="menu" activeClassName='nan-active>'>menu</NavLink>
            <NavLink className={"exo"} exact to="reservation" activeClassName='nan-active'> reservation </NavLink>
            <NavLink className={"exo"} exact to="about" activeClassName='nan-active'> contact </NavLink>
            <NavLink  className={"exo"} exact to="about" activeClassName='nan-active'> about us </NavLink>
            </h1>
        </div>
    );
};

export default Navigation;