import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
    cards,
    onCardLike,
    onCardDelete,
    isCardsLoading,
}) {
    const { name, about, avatar } = React.useContext(CurrentUserContext);

    return (
        <>
            <section className="profile">
                <button
                    type="button"
                    onClick={onEditAvatar}
                    className="profile__avatar-button"
                >
                    <img
                        className="profile__avatar"
                        src={avatar}
                        alt="Аватар пользователя"
                    />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{name}</h1>
                    <button
                        className="profile__button-edit"
                        onClick={onEditProfile}
                        type="button"
                        aria-label="Редактировать информацию пользователя"
                    ></button>
                    <p className="profile__profession">{about}</p>
                </div>
                <button
                    className="profile__button-add"
                    type="button"
                    onClick={onAddPlace}
                    aria-label="Добавить информацию"
                ></button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                    {isCardsLoading ? (
                        <div className="elements__loading-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    ) : (
                            cards.map((card) => (
                                <Card
                                    key={card._id}
                                    card={card}
                                    onCardLike={onCardLike}
                                    onCardDelete={onCardDelete}
                                    onCardClick={onCardClick}
                                />
                            ))
                        )}
                </ul>
            </section>
        </>
    );
}

export default Main;