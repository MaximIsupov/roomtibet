import SectionTitle from '@/components/widgets/SectionTitle/SectionTitle';
import ButtonLink from '@/components/widgets/ButtonLink/ButtonLink';

import './SectionGallery.css';

import { galleryImages } from '@/data/GalleryImages';

function SectionGallery() {
    return ( 
        <section className='gallery'>
            <div className='container'>
                <SectionTitle 
                    title='Делимся впечатлениями'
                    subtitle='фото-отчет'
                    additionalClasses='centered'
                />
                <div className='gallery__grid'>
                    {
                        galleryImages.map((image, index) => (
                            <div key={index} className={image.big ? 'big' : ''}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))
                    }
                </div>
                <ButtonLink
                    href="/"
                    text='Наш pinterest'
                    additionalClasses='centered'
                />
            </div>
        </section>
    );
}

export default SectionGallery;