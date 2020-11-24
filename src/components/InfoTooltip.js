import React from 'react';
import success from '../images/success.svg';
import error from '../images/error.svg';

const InfoTooltip = ({ message, isOpen, isSuccess, onClose }) => {
    return (
        <section
            className={`infotooltip popup popup_infotooltip ${isOpen ? 'popup_opened' : ''
                }`}
        >
            <div
                onClick={onClose}
                className="popup__overlay popup__overlay_infotooltip"
            ></div>
            <div className="infotooltip__container">
                {isSuccess ? <img src={success} alt="успешно" /> : <img src={error} alt="ошибка" />}
                <h3 className="infotooltip__title">{message}</h3>
                <button
                    className="popup__close popup__close_infotooltip"
                    type="button"
                    aria-label="Закрыть окно"
                    onClick={onClose}
                ></button>
            </div>
        </section>
    );
};

export default InfoTooltip;