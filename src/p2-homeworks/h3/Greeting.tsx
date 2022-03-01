import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (ev: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    onKeyEnter: (ev: React.KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyEnter, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with
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
