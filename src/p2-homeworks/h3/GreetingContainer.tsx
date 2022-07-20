import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import {Greeting} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value.replace(/\d/g, '')
        if (error) {
            setError('')
        }
        setName(text)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error) {
            setError('')
        }
        if (e.key === 'Enter') {
            addUser()
        }
    }
    const addUser = () => {
        if (!name.trim()) {
            setError('Введите пожалуйста значение')
            setName('')
            return
        }
        addUserCallback(name)
        alert(`Hello  ${name}!`)
        setName('')
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownHandler={onKeyDownHandler}
        />
    )
}
