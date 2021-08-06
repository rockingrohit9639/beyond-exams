import React from 'react';
import "./Navbar.css";
import menu from "../../assets/icons/menu.png";
import search from "../../assets/icons/search.png";
import arrowDown from "../../assets/icons/arrow-down.png";
import notiIcon from "../../assets/icons/bell.png";
import logoMobile from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import logoDesktop from "../../assets/images/logo-desktop.png";

function Navbar()
{
    return (
        <div className="navbar">
            <div className="navbar__phone">
                <div className="navbar__left">
                    <img src={menu} alt="menu" className="menu__icon" />
                </div>
                <div className="navbar__mid">
                    <img src={logoMobile} className="logo" alt="logo" />
                </div>
                <div className="navbar__right">
                    <img src={search} className="search__icon" alt="search" />
                </div>
            </div>

            <div className="navbar__desktop">
                <img src={logoDesktop} alt="logo" />

                <div className="desktop__menu">
                    <div className="center desktop__search">
                        <img className="searchIcon" src={search} />
                    </div>

                    <p className="courses">Courses</p>

                    <div className="course__level">
                        <p>Beginner</p>
                        <img src={arrowDown} alt="down_arrow" />
                    </div>

                    <p className="create__course">Create a course</p>
                    <p className="dashboard">My Dashboard</p>

                    <img src={notiIcon} alt="notification" className="notification__icon" />

                    <div className="user">
                        <img src={user} alt="user" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
