import React from 'react'
import Message from './Message';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Lorem ipsum dolor sit amet sum dolor sit am gfr five seven',
    time: '22:00',
}

function HW1() {
    return (
        <div className={'wrapper-block'}>
            <h3>homeworks 1</h3>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                right={true}
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
