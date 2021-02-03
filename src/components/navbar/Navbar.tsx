import React from "react";
import {NavLink, useLocation} from "react-router-dom"
import s from "./Navbar.module.css"

const plusSvg =
    <svg className={s.plusSvg} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"/>
    </svg>

export const Navbar: React.FC<{}> = () => {
    const location = useLocation()
    if(["/login","/signup"].includes(location.pathname)) return null
    console.log(location)
    return (
        <nav className={s.nav}>
            <div><NavLink exact to="/" className={s.link} activeClassName={s.active}>Homepage</NavLink></div>
            <div><NavLink to="/top" className={s.link} activeClassName={s.active}>Top chefs</NavLink></div>
            <div><NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.ava}>
                <NavLink to={"/add"}>{plusSvg}</NavLink>
                <NavLink to="/profile" >
                    <img className={s.avatar} alt={"avatar"} src={"https://htn.com.au/wp-content/uploads/2018/02/PP18-DIPLOMA-IN-PROFESSIONAL-CHEF.jpg"}/>
                </NavLink>
            </div>
        </nav>
    )
}