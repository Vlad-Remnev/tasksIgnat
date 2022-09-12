import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes: ThemeType[] = ['dark', 'red', 'some'];
//const themes: [string, number, boolean] = ['1йй', 'аыва', 'выаы']; типизация КОРТЕЖ

function HW12() {
    //const theme = useSelector<AppStoreType, ThemeType>(state => state.backColor.theme); // useSelector
    const theme = useTypeSelector<ThemeType>(state => state.backColor.theme); // useSelector
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeAC(e.currentTarget.value as ThemeType))
    }



    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect onChange={onChangeCallback} options={themes}/>

            <hr/>
        </div>
    );
}

export default HW12;
