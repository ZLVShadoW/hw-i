import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {SectionWrapper} from '../../p1-main/m1-ui/SectionWrapper/SectionWrapper';

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople: Array<React.ReactNode> = people.map((p) => (
        <div key={p._id} style={{width: 185, display: 'flex', justifyContent: 'space-between', marginBottom: 10}}>
            <span>{p.name}</span> <span><b>{p.age}</b></span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <SectionWrapper>
            <h3>homeworks 8</h3>

            {/*should work (должно работать)*/}
            {finalPeople}

            <div style={{display: 'flex', gap: 10}}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check}>check 18</SuperButton>
            </div>

        </SectionWrapper>
    )
}

export default HW8
