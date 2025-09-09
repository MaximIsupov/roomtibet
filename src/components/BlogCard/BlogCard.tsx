import "./BlogCard.css";

type BlogCardTypes = {
    imageLink: string,
    title: string,
    shortDescription: string,
    href: string,
    postDate: string,
}

function BlogCard({imageLink, title, shortDescription, href, postDate}: BlogCardTypes) {
    return ( 
        <a href={ href } className="blog-card">
            <div className="blog-card__image">
                <img src={ imageLink } alt={ title } width="230" height="280" />
            </div>
            <div className="blog-card__info">
                <div className="blog-card__top">
                    <h3 className="blog-card__title">{ title }</h3>
                    <div className="blog-card__short-description">
                        { shortDescription }
                    </div>
                </div>
                <div className="blog-card__bottom">
                    <div className="blog-card__date">{ postDate }</div>
                    <div className="blog-card__link">Читать статью</div>
                </div>
            </div>
        </a>
    );
}

export default BlogCard;