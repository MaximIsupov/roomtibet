import SectionTitle from '../SectionTitle/SectionTitle';
import ButtonLink from '../ButtonLink/ButtonLink';

import './SectionGallery.css';

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
                    <div className='big'><img src='/imgs/gallery_1.png' alt="Изображение в галерее 1" /></div>
                    <div><img src='/imgs/gallery_2.png' alt="Изображение в галерее 2" /></div>
                    <div><img src='/imgs/gallery_3.png' alt="Изображение в галерее 3" /></div>
                    <div><img src='/imgs/gallery_4.png' alt="Изображение в галерее 4" /></div>
                    <div className='big'><img src='/imgs/gallery_5.png' alt="Изображение в галерее 5" /></div>
                    <div><img src='/imgs/gallery_6.png' alt="Изображение в галерее 6" /></div>
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