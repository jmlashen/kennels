import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    } 
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/"> Home </Link>
            </li>
            {isAuthenticated && <li className="navbar__item">
                    <Link className="navbar__link" to="/animals"> Animals </Link>
                </li>}
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations"> Locations </Link>
            </li>
            {isAuthenticated && <li className="navbar__item">
                    <Link className="navbar__link" to="/employees"> Employees </Link>
                </li>}
            {isAuthenticated && <li className="navbar__item">
                    <Link className="navbar__link" to="/owners"> Owners </Link>
                </li>} 
            {isAuthenticated
                ? <li className="navbar__item">
                    <span className="navbar__link" onClick={handleLogout}> Logout </span>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
        </ul>
    );
};

//Creating the NavBar component for the constant navigation elements ^^^^

//Notice the use of the <Link/> component. This comes from the React Router package you installed. It has an attribute named to. It will render a hyperlink in your DOM, and when clicked, it will change the URL in the browser to the value of the to attribute.