import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (ev: React.ChangeEvent<HTMLInputElement>) => void
    onKeyEnter: (ev: React.KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyEnter, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.error : ''
    const errorTextClass = error ? `${s.errorText} ${s.active}` : `${s.errorText}`

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyEnter}/>
            <button onClick={addUser} className={s.btn} disabled={!!error}>add</button>
            <span>{totalUsers}</span>
            <div className={errorTextClass}>{error}</div>
        </div>
    )
}

export default Greeting
