import React from "react";

function ImagePopup({ card, onClose }) {
    return (
        <section
            className={`popup popup_type_img ${card.isOpen ? 'popup_opened' : ''
                }`}
        >
            <div
                onClick={onClose}
                className="popup__overlay popup__overlay_image-card"
            ></div>
            <div className="popup__img-container">
                <figure className="popup__figure">
                    <img
                        src={card.link}
                        alt={`Лучшая фотография ${card.name}`}
                        className="popup__image"
                    />
                    <figcaption className="popup__caption">{card.name}</figcaption>
                    <button
                        className="popup__close"
                        type="button"
                        aria-label="Закрыть окно"
                        onClick={onClose}
                    ></button>
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;

