import React, { forwardRef } from "react";

const PopupWithForm = forwardRef(
    (
        {
            isValid = true,
            name,
            title,
            children,
            isOpen,
            onClose,
            onSubmit,
            buttonText,
        },
        ref
    ) => {
        return (
            <section
                className={`popup popup_type${name} ${isOpen ? 'popup_opened' : ''}`}
            >
                <div
                    onClick={onClose}
                    className={`popup__overlay popup__overlay_${name}`}
                ></div>
                <form
                    ref={ref}
                    className={`popup__container popup__container_type_${name}`}
                    name={name}
                    action="#"
                    onSubmit={onSubmit}
                    noValidate >
                    <h2 className="popup__title">{title}</h2>
                    <fieldset className="popup__input-container">{children}</fieldset>
                    <button
                        className={`popup__button popup__button_type_save ${isValid ? '' : 'popup__button_type_disabled'
                            }`}
                        type="submit"
                        disabled={!isValid}
                    >
                        {buttonText || 'Сохранить'}
                    </button>
                    <button
                        className={`popup__close popup__close_type_${name}`}
                        onClick={onClose}
                        type="button"
                        aria-label="Закрыть окно"
                    ></button>
                </form>
            </section>
        );
    }
);

export default PopupWithForm;