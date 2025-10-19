type Breadcrumb = { name: string; link: string }
type BreadcrumbProps = { breadcrumbs: Breadcrumb[] }

import './Breadcrumbs.css';

function Breadcrumbs({breadcrumbs}: BreadcrumbProps) {
    return ( 
        <div className="container">
            <div className="breadcrumbs">
                {breadcrumbs.map(
                    breadcrumb => (
                        <a key={breadcrumb.link} href={breadcrumb.link}>{breadcrumb.name}</a>
                    )
                )}
            </div>
        </div>
    );
}

export default Breadcrumbs;