import SectionTitle from "../SectionTitle/SectionTitle";
import Advantage from "../Advantage/Advantage";
import ButtonLink from "../ButtonLink/ButtonLink";

import './SectionProgramms.css';

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
                        <Advantage 
                            imageSrc="/imgs/giude.svg"
                            title="Опытный гид"
                            text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
                            backgroundColor="#e5eeeb"
                        />
                        <Advantage 
                            imageSrc="/imgs/safety.svg"
                            title="Безопасный поход"
                            text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
                            backgroundColor="#e3e6ee"
                        />
                        <Advantage 
                            imageSrc="/imgs/prices.svg"
                            title="Лояльные цены"
                            text="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
                            backgroundColor="#f3f1e1"
                        />
                    </div>
                    <ButtonLink 
                        href="/"
                        text="Стоимость программ"
                    />
                </div>
                <div className="programms__media">
                    <img src="/imgs/programs_1.png" alt="Изображение программы 1" />
                    <img src="/imgs/programs_2.png" alt="Изображение программы 1" />
                    <img src="/imgs/programs_3.png" alt="Изображение программы 1" />
                    <img src="/imgs/programs_4.png" alt="Изображение программы 1" />
                </div>
            </div>
        </section>
    );
}

export default SectionProgramms;