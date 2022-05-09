import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {SectionWrapper} from '../../p1-main/m1-ui/SectionWrapper/SectionWrapper';

//TODO https://codesandbox.io/s/multi-range-slider-react-js-ecwcr?from-embed=&file=/src/App.js

function HW11() {

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(1)

    const onChangeInputRangeHandle = (num: number) => {
        if (num >= value2) return
        setValue1(num)
    }

    const onChangeDoubleInputRangeHandle = (nums: Array<number>) => {
        setValue1(nums[0])
        setValue2(nums[1])
    }

    return (
        <SectionWrapper>
            <div style={{width: '95%'}}>
                <h3>homeworks 11</h3>
                <br/>
                <div>
                    <SuperRange
                        value={value1}
                        min={0}
                        max={100}
                        bgColor={'#0a6d98'}
                        onChangeRange={onChangeInputRangeHandle}
                    />
                    <span>{value1}</span>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        min={0}
                        max={100}
                        onChangeRange={onChangeDoubleInputRangeHandle}
                        setValue1={setValue1}
                        setValue2={setValue2}
                    />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>{value1}</span>
                        <span>{value2}</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HW11
