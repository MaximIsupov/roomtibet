import './ButtonLink.css';

type ButtonLinkProps = {
    href: string,
    text: string,
    additionalClasses?: string
}

function ButtonLink({href, text, additionalClasses}: ButtonLinkProps) {
    return ( 
        <a href={href} className={`button ${additionalClasses ? additionalClasses : ''}`}>
            {text}
        </a>
    );
}

export default ButtonLink;