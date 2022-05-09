import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date | null>(null)
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
       clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const addZero = (date: number | null) => {
        if (date === null) return
      return date < 10 ? `0${date}` : date
    }

    const stringTime = date &&`${addZero(date!.getHours())} : ${addZero(date!.getMinutes())} : ${addZero(date!.getSeconds())}`
    const stringDate = date &&`${addZero(date!.getDate())} : ${addZero(date!.getMonth() + 1)} : ${date!.getFullYear()}`

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{cursor: 'pointer'}}
            >
                {stringTime}
            </div>

                <div style={{minHeight: 30, marginTop: 10}}>
                    { show && stringDate}
                </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
