import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type FilterType = 'all' | AffairPriorityType

export type AffairType = {
    _id: number;
    name: string;
    priority: AffairPriorityType
}
// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

const func1 = (el: AffairType, filterText: FilterType) => el.priority === filterText
const func2 = (filterNew: FilterType) => (el: AffairType) => el.priority === filterNew

function func3(filterText: FilterType, el: AffairType) {
    return el.priority === filterText
}

// pure helper functions, can use array`s method filter instead of if else
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {

    //TODO: question about func 2,3

    if (filter === 'high') return affairs.filter((el) => func1(el, filter))
    if (filter === 'low') return affairs.filter(func2(filter))
    if (filter === 'middle') return affairs.filter(func3.bind(null, filter))

    // else if (filter === 'middle') return affairs.filter(el => el.priority === filter)
    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={'wrapper-block'}>
            <h3>homeworks 2</h3>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />
        </div>
    )
}

export default HW2
