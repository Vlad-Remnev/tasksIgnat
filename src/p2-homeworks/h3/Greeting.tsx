import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
export const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.good

    return (
        <div className={s.container}>
            <input value={name} onChange={setNameCallback} onKeyDown={onKeyDownHandler} className={inputClass} placeholder={"Введите имя"}/>
            <button onClick={addUser} className={s.btnAdd}>add</button>
            <span className={s.notif}>{error}</span>
            <span className={s.counter}>Counter: {totalUsers}</span>
        </div>
    )
}
