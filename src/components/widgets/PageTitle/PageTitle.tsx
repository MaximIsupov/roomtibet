type PageTitleProps = {
    text: string,
    classes?: string
}

import './PageTitle.css';

function PageTitle({text, classes}: PageTitleProps) {
    return ( 
        <h1 className={`page-title ${classes ? classes : ""}`} data-heading-tag="H1">{text}</h1>
    );
}

export default PageTitle;