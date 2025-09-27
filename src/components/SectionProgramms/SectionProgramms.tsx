import SectionTitle from "../SectionTitle/SectionTitle";
import Advantage from "../Advantage/Advantage";
import ButtonLink from "../ButtonLink/ButtonLink";

import './SectionProgramms.css';
import { ProgrammsData } from "../../data/ProgrammsData";

function SectionProgramms() {
    return ( 
        <section className="programms">
            <div className="container">
                <div className="programms__info">
                    <SectionTitle 
                        title="Лучшие программы для тебя"
                        subtitle="наше предложение"
                    />
                    <div className="programms__description">
                        Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.
                    </div>
                    <div className="programms__advantages">
                        {ProgrammsData.map((program, index) => (
                            <Advantage 
                                key={index}
                                imageSrc={program.imageSrc}
                                title={program.title}
                                text={program.text}
                                backgroundColor={program.backgroundColor}
                            />
                        ))}
                    </div>
                    <ButtonLink 
                        href="/"
                        text="Стоимость программ"
                    />
                </div>
                <div className="programms__media">
                    <img src="/imgs/programs_1.png" alt="Изображение программы 1" />
                    <img src="/imgs/programs_2.png" alt="Изображение программы 2" />
                    <img src="/imgs/programs_3.png" alt="Изображение программы 3" />
                    <img src="/imgs/programs_4.png" alt="Изображение программы 4" />
                </div>
            </div>
        </section>
    );
}

export default SectionProgramms;