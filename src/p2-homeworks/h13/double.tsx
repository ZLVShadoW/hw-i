import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {requestApi, ResponseInfoType} from './RequestsAPI';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {serApi} from './RequestsAPI';


export const Double = () => {

    const [appSer, setAppSer] = React.useState(serApi)


    const [isChecked, setIsChecked] = React.useState<boolean>(true)
    const [info, setInfo] = React.useState<ResponseInfoType>()

    const sendReq = () => {
        appSer.sendValue({success: isChecked})
            .then(res => setInfo(res))
            .catch(error => {
                setInfo(error)
            })
    }

    const changeAPI = () => {
        let newSer = appSer === serApi ? requestApi : serApi
        //@ts-ignore
        setAppSer(newSer)
    }

    return (
        <div>
            <SuperButton onClick={changeAPI}>Change API</SuperButton>
            <span> {appSer === serApi ? 'fetch' : 'axios'}</span>
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