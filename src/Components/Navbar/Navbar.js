import React from 'react';
import "./Navbar.css";
import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/search.png";
import logo from "../../assets/images/logo.png";

function Navbar()
{
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img src={menu} alt="menu" className="menu__icon" />
            </div>
            <div className="navbar__mid">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="navbar__right">
                <img src={search} className="search__icon" alt="search" />
            </div>
        </div>
    )
}

export default Navbar;
