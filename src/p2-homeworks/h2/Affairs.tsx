import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

import cl from './Affairs.module.css'

//TODO: in video ~12:50 about dynamic classNames (hw2)
type ButtonsType = {
    name: FilterType;
    label: string;
}

const buttons: Array<ButtonsType> = [
    {name: 'all', label: 'All'},
    {name: 'high', label: 'High'},
    {name: 'middle', label: 'Middle'},
    {name: 'low', label: 'Low'},
]

type AffairsPropsType = {
    data: Array<AffairType>;
    setFilter: (filterText: FilterType) => void;
    deleteAffairCallback: (id: number) => void;
    filter: FilterType;
}

function Affairs(props: AffairsPropsType) {

    const emptyFilter = props.filter === "all" ? '' : props.filter

    const mappedAffairs = props.data.length > 0
        ? props.data.map((a: AffairType) => (
            <Affair
                key={a._id}
                // affair={a}
                {...a}
                deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
            />
        ))
        : <div>No {emptyFilter} affairs</div>

    // const setAll = () => {
    //     props.setFilter('all')
    // }
    // const setHigh = () => {
    //     props.setFilter('high')
    // }
    // const setMiddle = () => {
    //     props.setFilter("middle")
    // }
    // const setLow = () => {
    //     props.setFilter("low")
    // }

    const changeFilterHandle = (filterText: FilterType) => {
        props.setFilter(filterText)
    }

    const filterButtons = buttons.map(el => {
        const isActive = props.filter === el.name ? ` ${cl.active}` : ''
        return (
            <button
                key={el.name}
                className={cl.btn + `${isActive}`}
                onClick={() => changeFilterHandle(el.name)}>
                {el.label}
            </button>
        )
    })

    return (
        <div className={cl.someClass}>

            {mappedAffairs}
            <div className={cl.buttonsGroup}>
                {filterButtons}

                {/*<button className={cl.btn} onClick={setAll}>All</button>*/}
                {/*<button className={cl.btn} onClick={setHigh}>High</button>*/}
                {/*<button className={cl.btn} onClick={setMiddle}>Middle</button>*/}
                {/*<button className={cl.btn} onClick={setLow}>Low</button>*/}

            </div>
        </div>
    )
}

export default Affairs
