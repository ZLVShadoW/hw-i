class RequestsAPI {
    _baseURL = 'https://neko-cafe-back.herokuapp.com/auth/test'

    getResource = () => {
        return fetch(this._baseURL)
    }

    sendValue = (data: any) => {
        return fetch(this._baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }
}

export const apiService = new RequestsAPI()