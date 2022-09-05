import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandler = (value: number | number[]) => {
        setValue1(+value)
    }

    const onChangeMaxHandler = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.container}>
                <div>{value1}</div>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeHandler}
                    // сделать так чтоб value1 изменялось
                />
                <div></div>
            </div>

            <div className={s.container}>
                <div>{value1}</div>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeMaxHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
