import SectionTitle from "@/components/widgets/SectionTitle/SectionTitle";
import ButtonLink from "@/components/widgets/ButtonLink/ButtonLink";
import DirectionCard from "@/components/widgets/DirectionCard/DirectionCard";


import { DirectionCardProps } from "@/types/types";
import './SectionDirections.css';

type SectionDirectionsType = {
    directions: DirectionCardProps[],
    isSection?: boolean
}

function SectionDirections({directions, isSection=true}: SectionDirectionsType) {
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
                        directions.map((direction, index) => (
                            <DirectionCard 
                                key={index}
                                imagePath={direction.imagePath}
                                title={direction.title}
                                subtitle={direction.subtitle}
                                price={direction.price}
                                priceCurrency={direction.priceCurrency}
                                rating={direction.rating}
                                href={direction.href}
                                slug={direction.slug}
                            />
                        ))
                    }
                </div>
                { isSection && 
                    <ButtonLink 
                        href="/directions/"
                        text="Рейтинг направлений"
                        additionalClasses="centered"
                    />
                }
            </div>
        </section>
    );
}

export default SectionDirections;