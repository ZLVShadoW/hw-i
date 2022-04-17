import React, {useState} from 'react'
import SuperRange from '../c7-SuperRange/SuperRange';

import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    setValue1: (n: number) => void
    setValue2: (n: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, ...props
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // const [value1, setValue1] = useState(10)
    // const [value2, setValue2] = useState(55)

    // const func1 = (n: number) => {
    // if(value2 <= n) return
    //         setValue1(n)
    // }
    // const func2 = (n: number) => {
    //     if(value1 >= n) return
    //     setValue2(n)
    // }
    const func1 = (n: number) => {
    if(value![1] <= n) return
            props.setValue1(n)
    }
    const func2 = (n: number) => {
        if(value![0] >= n) return
        props.setValue2(n)
    }


    // useEffect(() => {
    //
    //         const func = () => {
    //             onChangeRange && onChangeRange([value1, value2])
    //         }
    //     if(value1 < value2) {
    //         func()
    //     }
    // }, [value1, value2])

    let st = {
        position: 'absolute',
        width: '100%'
    }

    return (
        <div className={s.double}>
            <SuperRange value={value && value[0]} min={min} max={max}
                        bcolor={'#eee'}
                        onChangeRange={func1}
                        //@ts-ignore
                        st={st}
                        po={{position: 'relative'}}
            />

            <SuperRange value={value && value[1]} min={min} max={max}
                        onChangeRange={func2}
            />
        </div>
    )
}

export default SuperDoubleRange
