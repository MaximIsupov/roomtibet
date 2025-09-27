import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonLink from "../ButtonLink/ButtonLink";
import BlogCard from "../BlogCard/BlogCard";

import { blogPosts } from "../../data/Blog";
import './SectionBlog.css';

function SectionBlog() {
    return ( 
        <section className="blog">
            <div className="container">
                <SectionTitle 
                    title="Блог о путешествиях"
                    subtitle="делимся впечатлениями"
                    additionalClasses="centered"
                />
                <div className="blog__list">
                    {
                        blogPosts.map((post, index) => (
                            <BlogCard 
                                key={index}
                                imageLink={post.imageLink}
                                title={post.title}
                                shortDescription={post.shortDescription}
                                postDate={post.postDate}
                                href={post.href}
                            />
                        ))
                    }
                </div>
                <ButtonLink
                    href="/"
                    text="Другие материалы"
                    additionalClasses="centered"
                />
            </div>
        </section>
    );
}

export default SectionBlog;