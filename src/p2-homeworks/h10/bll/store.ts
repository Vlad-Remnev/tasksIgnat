import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const reducers = combineReducers({
    loading: loadingReducer,
    backColor: themeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev

export const useTypeSelector: TypedUseSelectorHook<AppStoreType> = useSelector