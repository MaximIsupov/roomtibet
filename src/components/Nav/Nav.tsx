import { NavLink } from "@/types/types";

type NavProps = {
  className?: string
  links: NavLink[]  
}

function Nav({className, links}: NavProps) {
    return ( 
        <nav className={className}>
            <ul>
                {   
                    links.map(link => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;