import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ButtonLink from "../ButtonLink/ButtonLink";
import DirectionCard from "../DirectionCard/DirectionCard";


import './SectionDirections.css';

function SectionDirections() {
    return (  
        <section className="directions">
            <div className="container">
                <SectionTitle
                    title="Популярные направления"
                    subtitle="по версии отдыхающих"
                    additionalClasses="centered"
                />
                <div className="directions__list">
                    <DirectionCard 
                        imagePath="/imgs/direction_cover_1.png"
                        title="Озеро возле гор"
                        subtitle="романтическое приключение"
                        price={480}
                        priceCurrency="$"
                        rating={4.9}
                        href="/"
                    />
                    <DirectionCard 
                        imagePath="/imgs/direction_cover_2.png"
                        title="Ночь в горах"
                        subtitle="в компании друзей"
                        price={500}
                        priceCurrency="$"
                        rating={4.5}
                        href="/"
                    />
                    <DirectionCard 
                        imagePath="/imgs/direction_cover_3.png"
                        title="Йога в горах"
                        subtitle="для тех, кто забоится о себе"
                        price={230}
                        priceCurrency="$"
                        rating={5.0}
                        href="/"
                    />
                </div>
                <ButtonLink 
                    href="/"
                    text="Рейтинг направлений"
                    additionalClasses="centered"
                />
            </div>
        </section>
    );
}

export default SectionDirections;