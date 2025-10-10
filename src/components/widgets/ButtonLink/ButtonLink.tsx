import './ButtonLink.css';

import Link from "next/link";

type ButtonLinkProps = {
    href: string,
    text: string,
    additionalClasses?: string
}

function ButtonLink({href, text, additionalClasses}: ButtonLinkProps) {
    return ( 
        <Link href={href} className={`button ${additionalClasses ? additionalClasses : ''}`}>
            {text}
        </Link>
    );
}

export default ButtonLink;