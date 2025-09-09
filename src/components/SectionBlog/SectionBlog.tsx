import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonLink from "../ButtonLink/ButtonLink";
import BlogCard from "../BlogCard/BlogCard";

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
                    <BlogCard
                        imageLink="/imgs/blog_card_1.png"
                        title="Красивая Италия, какая она в реальности?"
                        shortDescription="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
                        postDate="01/04/2023"
                        href="читать статью"
                    />
                    <BlogCard
                        imageLink="/imgs/blog_card_2.png"
                        title="Долой сомнения! Весь мир открыт для вас!"
                        shortDescription="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ..."
                        postDate="01/04/2023"
                        href="/"
                    />
                    <BlogCard
                        imageLink="/imgs/blog_card_3.png"
                        title="Как подготовиться к путешествию в одиночку? "
                        shortDescription="Для современного мира базовый вектор развития предполагает."
                        postDate="01/04/2023"
                        href="/"
                    />
                    <BlogCard
                        imageLink="/imgs/blog_card_4.png"
                        title="Индия ... летим?"
                        shortDescription="Для современного мира базовый."
                        postDate="01/04/2023"
                        href="/"
                    />
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