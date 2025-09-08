import './Advantage.css';

type AdvantageProps = {
    imageSrc: string,
    title: string,
    backgroundColor?: string
    text?: string
};

function Advantage({imageSrc, title, backgroundColor = '#e5eeeb', text}: AdvantageProps) {
    return ( 
        <div className="advantage">
            <div className="advantage__icon" style={{ backgroundColor }}>
                <img src={imageSrc} alt={title} width="36" height="36" />
            </div>
            <div className="advantage__info">
                <div className="advantage__title">{title}</div>
                <div className="advantage__text">{text}</div>
            </div>
        </div>
    );
}

export default Advantage;