import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ButtonLink from "../ButtonLink/ButtonLink";
import DirectionCard from "../DirectionCard/DirectionCard";


import { Directions } from "../../data/Directions";
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
                    {
                        Directions.map((direction, index) => (
                            <DirectionCard 
                                key={index}
                                imagePath={direction.imagePath}
                                title={direction.title}
                                subtitle={direction.subtitle}
                                price={direction.price}
                                priceCurrency={direction.priceCurrency}
                                rating={direction.rating}
                                href={direction.href}
                            />
                        ))
                    }
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