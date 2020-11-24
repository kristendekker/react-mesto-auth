import {
    currentUser
} from "./utils";

class Api {
    constructor({
        baseUrl,
        headers
    }) {
        this._url = baseUrl;
        this._headers = headers;
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    setUserInfo(formData) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                about: formData.about,
            }),
        }).then((res) => this._handleResponse(res));
    }

    addCard(formData) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: formData.name,
                link: formData.link,
            }),
        }).then((res) => this._handleResponse(res));
    }

    removeCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    addLike(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    removeLike(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }

    changeAvatar(formData) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: formData.avatar,
            }),
        }).then((res) => this._handleResponse(res));
    }

    changeLikeCardStatus(id, like) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: like ? 'PUT' : 'DELETE',
            headers: this._headers,
        }).then((res) => this._handleResponse(res));
    }
}

const api = new Api(currentUser);
export default api;