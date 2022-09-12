export type ThemeType = 'dark' | 'red' | 'some'

export type InitialStateType = {
    theme: ThemeType
};

const initState: InitialStateType = {
    theme: 'dark'
};

export const themeReducer = (state: InitialStateType  = initState, action: changeThemeActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE_COLOR": {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};

export type changeThemeActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: ThemeType) => {
    return {
        type: "CHANGE_COLOR",
        payload: {theme}
    } as const
};