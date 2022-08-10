import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: allTypesReducer) => {
    switch (action.type) {
        case 'sort': {
            return [...state.sort((a, b) =>
                action.payload === 'up'
                    ? b.age - a.age
                    : a.age - b.age)]
        }
        case "check": {
            return state.filter(user => user.age > action.payload).sort((a, b) => b.age - a.age)
        }
        default:
            return state
    }
}

type allTypesReducer = sortACType | checkACType

type sortACType = ReturnType<typeof sortAC>
export const sortAC = (param: string) => {
    return {
        type: 'sort',
        payload: param

    } as const
}

type checkACType = ReturnType<typeof checkAC>
export const checkAC = (num: number) => {
    return {
        type: 'check',
        payload: num

    } as const
}