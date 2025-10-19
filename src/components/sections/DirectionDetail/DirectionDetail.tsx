import { DirectionCardProps } from "@/types/types";
import './DirectionDetail.css';

import Booking from "@/components/widgets/Booking/Booking";

import PageTitle from "@/components/widgets/PageTitle/PageTitle";

function DirectionDetail(post: DirectionCardProps) {
    return ( 
        <section className="direction-page">
            <div className="container">
                <PageTitle text={post.title} />
                <p className="direction-page__subtitle">{post.subtitle}</p>
                <div className="direction-page__row">
                    <div className="direction-page__col">
                        <img className="direction-page__image" src={post.imagePath} alt={post.title} width="760" height="1000" />
                    </div>
                    <div className="direction-page__col">
                        {post.rating && (
                            <div className="direction-page__rating">
                                Рейтинг: <span>{post.rating}</span>
                            </div>
                        )}
                        {post.price && post.priceCurrency && (
                            <div className="direction-page__price">
                                Цена: <span>{post.price}{post.priceCurrency}</span>
                            </div>
                        )}
                        <Booking target={post.title} />
                    </div>
                </div>
                {post.content && (
                    <div className="direction-page__content">
                        <p>{post.content}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default DirectionDetail;