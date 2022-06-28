import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.affairs}>
            {props.data.map((item) => (
                <Affair
                    key={item._id}
                    affair={item}
                    deleteAffairCallback={props.deleteAffairCallback}/>
            ))}
            <div>
                <button className={s.btns} onClick={setAll}>All</button>
                <button className={s.btns} onClick={setHigh}>High</button>
                <button className={s.btns} onClick={setMiddle}>Middle</button>
                <button className={s.btns} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
