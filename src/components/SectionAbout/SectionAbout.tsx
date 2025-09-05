import SectionTitle from "../SectionTitle/SectionTitle";
import ButtonLink from "../ButtonLink/ButtonLink";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import './SectionAbout.css';


function SectionAbout() {
    return ( 
        <section className="about">
            <div className="container">
                <div className="about__media">
                    <img src="/imgs/about__image.png" className="about__top-image" />
                    <VideoPlayer
                        src="/video/198939-909336004_tiny.mp4"
                        loop={true}
                    />
                </div>
                <div className="about__info">
                    <SectionTitle 
                        title="Исследуйте все горные массивы мира вместе с нами"
                        subtitle="о нашем походе"
                    />
                    <div className="about__description">
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.
                    </div>
                    <ButtonLink 
                        href="/"
                        text="Программа тура"
                    />
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;