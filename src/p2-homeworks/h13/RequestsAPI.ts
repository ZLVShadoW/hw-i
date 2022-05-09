import axios from 'axios';

let _baseURL ='https://neko-cafe-back.herokuapp.com/auth/test'

export const apiService = {

    sendValue: (data: { success: boolean }) => {
         return fetch(_baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
    }
}

// --------- axios ---------

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const requestApi = {
    sendValue: (data: {success: boolean}) => {
        return instance.post<ResponseInfoType>('auth/test', data)
            .then(res => res.data)
            .catch(err => err.response.data)
    }
}

export type ResponseInfoType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}

// -------------------------

class ServerFetch {
//TODO при вынесении ссылки в отдельное свойство _baseURL
    private _baseNewURL: string = 'https://neko-cafe-back.herokuapp.com/auth/test'

    sendValue(data: {success: boolean}) {
        return fetch(this._baseNewURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
    }
}

export const serApi = new ServerFetch()