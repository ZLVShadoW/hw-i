import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {apiService} from './RequestsAPI';

export const Request = () => {

    // const makeReq = () => {
    //     console.log('make')
    // }
    //
    // const sendReq = () => {
    //     console.log('send')
    // }

    const makeReq = () => {
    apiService.getResource()
        .then(res => res.json())
        .then(res => console.log(res))
}

const sendReq = () => {
    apiService.sendValue({success: true})
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

    return (
        <div>
            <SuperButton onClick={makeReq}>Make Request</SuperButton>
            <SuperButton onClick={sendReq}>Send Request</SuperButton>
        </div>
    )
}

// const makeReq = () => {
//     apiService.getResource()
//         .then(res => res.json())
//         .then(res => console.log(res))
// }
//
// const sendReq = () => {
//     apiService.sendValue({success: true})
//         .then(res => res.json())
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }