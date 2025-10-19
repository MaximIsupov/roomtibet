"use client";

import './Booking.css';
import { useState } from 'react';

type BookingProps = {
    target: string;
}


function Booking({target}: BookingProps) {

    const [isActiveModal, setIsActiveModal] = useState(false);
    const toggleModal = () => {
        setIsActiveModal(isActiveModal => !isActiveModal);
    }

    return ( 
        <div className="booking">
            <div className="booking__btn" onClick={toggleModal}>
                Записаться
            </div>
            <div className={`booking__overlay${isActiveModal ? ' active' : ''}`} onClick={toggleModal}></div>
            <div className={`booking__modal${isActiveModal ? ' active' : ''}`}>
                <div className="booking__title">
                    Отправьте нам свои контакты и мы свяжемся с вами
                </div>
                <form action="">
                    <input type="text" placeholder="Имя" name="booking-name" />
                    <input type="text" placeholder="Номер телефона" name="booking-name" />
                    <input type="hidden" value={target} name="booking-target" />
                    <button className="booking__btn" onClick={toggleModal}>
                        Отправить
                    </button>
                    <div className="checkbox">
                        подписываясь на новости, вы автоматически соглашаетесь с <a href="/">условиями обработки персональных данных</a> и <a href="/">правилами рекламных рассылок</a>
                    </div>
                </form>
                <div className="booking__close" onClick={toggleModal}>
                    ×
                </div>
            </div>
        </div>
    );
}

export default Booking;