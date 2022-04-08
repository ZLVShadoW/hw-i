import {UserType} from '../HW8';

export type SortUpType = {
    type: 'sort'
    payload: 'up'
}
export type SortDownType = {
    type: 'sort'
    payload: 'down'
}
export type CheckAge = {
    type: 'check'
    payload: number
}

export type ActionsType = SortUpType | SortDownType | CheckAge

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let copyState = [...state]

            if (action.payload === 'up') {
                copyState.sort((firstEl, secondEl) => {
                    if ((firstEl.name).toLowerCase() > (secondEl.name).toLowerCase()) return 1
                    if ((firstEl.name).toLowerCase() < (secondEl.name).toLowerCase()) return -1
                    else return 0
                })
            }
            if (action.payload === 'down') {
                copyState.sort((firstEl, secondEl) =>
                    firstEl.name > secondEl.name ? -1 : 1)
            }
            return copyState
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}