import "./DirectionCard.css";

type DirectionCardPropsBase  = {
    title: string,
    subtitle: string,
    imagePath: string,
    href: string,
    price?: number,
    priceCurrency?: '$' | '₽',
    rating?: number,
};

type PriceProps =
  | { price: number; priceCurrency: '$' | '₽' }
  | { price?: undefined; priceCurrency?: undefined }
;

type DirectionCardProps = DirectionCardPropsBase  & PriceProps;

function DirectionCard({title, subtitle, price, href, priceCurrency, rating, imagePath}: DirectionCardProps) {
    return ( 
        <a href={href} className="direction">
            <img src={imagePath} alt={title} width="380" height="500" />
            {rating && (
                <div className="direction__rating">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 14.27L13.15 16.78C13.91 17.24 14.84 16.56 14.64 15.7L13.54 10.98L17.21 7.79999C17.88 7.22 17.52 6.12 16.64 6.04999L11.81 5.64L9.92 1.17999C9.58 0.369995 8.42 0.369995 8.08 1.17999L6.19 5.62999L1.36 6.03999C0.48 6.10999 0.12 7.20999 0.79 7.78999L4.46 10.97L3.36 15.69C3.16 16.55 4.09 17.23 4.85 16.77L9 14.27Z" fill="#F2BE22" />
                    </svg>
                    <span>{rating}</span>
                </div>
            )}
            <div className="direction__info">
                <div className="direction__text">
                    <div className="direction__title">
                        {title}
                    </div>
                    <div className="direction__subtitle">
                        {subtitle}
                    </div>
                </div>
                {
                    price && (
                        <div className="direction__price">
                            {price} {priceCurrency}
                        </div>
                    )
                }
            </div>
        </a>
    );
}

export default DirectionCard;