const initState = {
    theme: 'some'
};

export type StateType = typeof initState

type ActionsThemeType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionsThemeType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                theme: action.themeOption
            };
        }
        default:
            return state;
    }
};

// export const changeThemeC = (): any => {}; // fix any
export const changeThemeC = (themeOption: string) => ({type: 'CHANGE_THEME', themeOption} as const);