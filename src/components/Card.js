import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
    const { _id } = React.useContext(CurrentUserContext);

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    const isOwn = card.owner._id === _id;
    const isLiked = card.likes.some((i) => i._id === _id);

    return (
        <li className="card">
            {isOwn ? (
                <button
                    className="card__remove-button"
                    type="button"
                    aria-label="Удалить карточку"
                    onClick={handleDeleteClick}
                ></button>
            ) : (
                    ''
                )}
            <img
                src={card.link}
                alt={`Лучшая фотография ${card.name}`}
                className="card__image"
                onClick={handleClick}
            />
            <div className="card__description">
                <p className="card__name">{card.name}</p>
                <div className="card__like-cover">
                    <button
                        className={`${isLiked ? `card__like card__like_active` : `card__like`}`}
                        type="button"
                        aria-label="Поставить лайк"
                        onClick={handleLikeClick}
                    />
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;