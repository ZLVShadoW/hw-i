import React from 'react'
import SuperRange from '../c7-SuperRange/SuperRange';

import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number] // у Игната было отмечено, как  опционально "?", почему
    min: number
    max: number
    setValue1: (n: number) => void
    setValue2: (n: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,
        ...props
        // min, max, step, disable, ...
    }
) => {

    const func1 = (n: number) => {
        if (value[1] <= n) return
        props.setValue1(n)
    }
    const func2 = (n: number) => {
        if (value[0] >= n) return
        props.setValue2(n)
    }

    // --- без типизации переменной атрибут st идёт в ругань :)))
    const st: React.CSSProperties = {
        position: 'absolute',
        width: '100%'
    }

    return (
        <div className={s.double}>
            <SuperRange value={value[0]} min={min} max={max}
                        bgColor={'#eee'}
                        onChangeRange={func1}
                        st={st}
                        po={{position: 'relative'}}
            />

            {/*<SuperRange value={value && value[1]} min={min} max={max} - если опционально*/}
            <SuperRange value={value[1]} min={min} max={max}
                        onChangeRange={func2}
            />
        </div>
    )
}

export default SuperDoubleRange
