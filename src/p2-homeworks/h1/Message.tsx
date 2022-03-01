import React from 'react'
import cn from './Message.module.css'

type MessageTypeProps = {
    avatar: string;
    name: string;
    message: string;
    time: string,
    right?: boolean
}

function Message(props: MessageTypeProps) {

    const message = props.right ? `${cn.message_right}` : `${cn.message}`
    const messageText = props.right ? `${cn.message__text_right}` : `${cn.message__text}`

    return (
        <div className={message}>
            <div className={cn.message__ava}>
                <div className={cn.message__ava_wrap}>
                    <img src={props.avatar} alt={props.name}/>
                </div>
            </div>
            <div className={messageText}>
                <div className={cn.message__name}>{props.name}</div>
                <div className={cn.message__message}>{props.message}</div>
                <div className={cn.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;

//TODO: transform: scale(-1) and others modifiers for mirror message

// <div className={cn.message}>
//     <div className={cn.message__ava}>
//         <div className={cn.message__ava_wrap}>
//             <img src={props.avatar} alt={props.name}/>
//         </div>
//     </div>
//     <div className={cn.message__text}>
//         <div className={cn.message__name}>{props.name}</div>
//         <div className={cn.message__message}>{props.message}</div>
//         <div className={cn.message__time}>{props.time}</div>
//     </div>
// </div>
