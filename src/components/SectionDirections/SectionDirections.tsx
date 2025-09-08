import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ButtonLink from "../ButtonLink/ButtonLink";

function SectionDirections() {
    return (  
        <section className="directions">
            <SectionTitle
                title="Популярные направления"
                subtitle="по версии отдыхающих"
                additionalClasses="centered"
            />
            <ButtonLink 
                href="/"
                text="Рейтинг направлений"
            />
        </section>
    );
}

export default SectionDirections;