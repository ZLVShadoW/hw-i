import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {apiService, requestApi, ResponseInfoType} from './RequestsAPI';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';


export const Request = () => {

    // const [api, setApi] = React.useState([apiService])
    const [api, setApi] = React.useState(apiService)

    const [isChecked, setIsChecked] = React.useState<boolean>(true)
    const [info, setInfo] = React.useState<ResponseInfoType>()

    const sendReq = () => {
        // api[0].sendValue({success: isChecked})
        api.sendValue({success: isChecked})
            .then(res => setInfo(res))
            .catch(error => {
                //TODO - где увидеть :)))
                // console.log({...error}) где увидеть :)))
                setInfo(error)
            })
    }

    const changeAPI = () => {
        // let ser = api[0] === apiService ? requestApi : apiService
        let ser = api === apiService ? requestApi : apiService

        // setApi([ser])
        setApi(ser)
    }

    return (
        <div>
            <SuperButton onClick={changeAPI}>Change API</SuperButton>
            {/*<span> {api[0] === apiService ? 'fetch' : 'axios' }</span>*/}
            <span> {api === apiService ? 'fetch' : 'axios' }</span>
            <br/>

            <SuperCheckbox checked={isChecked} onChangeChecked={setIsChecked}>Check</SuperCheckbox>
            <br/>

            <SuperButton onClick={sendReq}>Send Request</SuperButton>
            <div>
                <span>errorText: </span>
                <span>{info && info.errorText}</span>
            </div>
            <div>
                <span>info: </span>
                <span>{info && info.info}</span>
            </div>
        </div>
    )
}