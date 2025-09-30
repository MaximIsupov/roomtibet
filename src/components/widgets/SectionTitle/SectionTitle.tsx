import './SectionTitle.css';

type SectionTitleProps = {
    title: string,
    subtitle: string,
    additionalClasses?: string
}

function SectionTitle( {title, subtitle, additionalClasses}: SectionTitleProps) {
    return ( 
        <div className={`section-title ${additionalClasses ? additionalClasses : ''}`}>
            <div className='section-title__subtitle'>{subtitle}</div>
            <h2 className='section-title__title' data-heading-tag="H2">{title}</h2>
        </div>
    );
}

export default SectionTitle;