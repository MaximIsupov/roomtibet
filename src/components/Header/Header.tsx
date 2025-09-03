import "./Header.css"
import Nav from "../Nav/Nav"
import { NavLink } from "@/types/types"

function Header() {

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
            "href": "/"
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

    return ( 
        <header className="header">
            <div className="container">
                <a href="/" className="header__logo">
                    <img src="/icons/logo.svg" alt="Логотип" />
                </a>
                <div className="header__info">
                    <Nav className="nav-header" links={navLinks} />
                </div>
            </div>
        </header>
    );
}

export default Header;