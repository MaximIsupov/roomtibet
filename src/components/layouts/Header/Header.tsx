"use client";

import "./Header.css"
import Nav from "@/components/widgets/Nav/Nav"
import { NavLink } from "@/types/types"
import { useState } from "react"

type HeaderProps = {
    isMainPage?: boolean
}

function Header({isMainPage=false}: HeaderProps) {

    const navLinks: NavLink[] = [
        {
            "name": "Главная",
            "href": "/"
        },
        {
            "name": "Про гида",
            "href": "/"
        },
        {
            "name": "Программа тура",
            "href": "/directions/"
        },
        {
            "name": "Стоимость",
            "href": "/"
        },
        {
            "name": "Блог",
            "href": "/"
        },
        {
            "name": "Контакты",
            "href": "/"
        },
    ]

    const [isShownMobNavMenu, setIsShownMobNavMenu] = useState(false);

    const toggleMobNavMenu = () => {
        setIsShownMobNavMenu( isShownMobNavMenu => !isShownMobNavMenu );
    }

    return ( 
        <header className={`header${isMainPage ? ' header_main' : ''}`}> 
            <div className="container">
                <a href="/" className="header__logo">
                    <img src="/icons/logo.svg" alt="Логотип" />
                </a>
                <div className={`header__info ${isShownMobNavMenu ? 'active' : ''}`}>
                    <Nav className="nav-header" links={navLinks} />
                    <span onClick={toggleMobNavMenu}>×</span>
                </div>
                <div className="header__menu-toggler" onClick={toggleMobNavMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;