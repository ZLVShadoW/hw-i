import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (userName: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any


    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        let {value} = e.currentTarget
        value = value.trim()

        setName(value)
        setError('')

        if(!value) {
            setError('Enter name')
        }
    }

    const addUser = () => {
        if (!name) {
            setError('Enter name')
            return
        }
        setError('')
        addUserCallback(name)
        setName('')
        alert(`Hello ${name}!`) // need to fix
    }

    const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addUser()
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyEnter={onKeyEnter}
        />
    )
}

export default GreetingContainer