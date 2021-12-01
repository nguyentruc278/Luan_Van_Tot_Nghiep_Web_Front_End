import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/style.css';

export default function NavBar() {

    return (
        <>
            <ul className="navbar">
                <li><NavLink className="nav-link" exact activeClassName="active" to='/' >THẾ GIỚI</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" to='/vietnam'>VIỆT NAM</NavLink></li>
            </ul>
        </>
    )
}
