const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType) => {
    switch (action.type) {
        case 'CHANGE-LOAD': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
}

export type loadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE-LOAD',
        payload: {
            isLoading
        }
    } as const
}