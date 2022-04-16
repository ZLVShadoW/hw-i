const initState = {
    isLoading: false
}

export type StateType = typeof initState

type ActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionsType): StateType => { // fix any
    switch (action.type) {
        case 'SET_IS_LOADING': {
            return {isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'SET_IS_LOADING', isLoading}) as const // fix any