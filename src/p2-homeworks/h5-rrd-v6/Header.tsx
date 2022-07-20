import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Navbra.module.css'

function Header() {
    return (
        <div className={s.overlap}>
            <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}/>
            <label className={s.btnMenu} htmlFor="hmt">Menu</label>
            <div className={s.hiddenMenu}>
                <NavLink className={s.link} to={'/pre-junior'}>The Start</NavLink>
                <NavLink className={s.link} to={'/junior'}>Stronger</NavLink>
                <NavLink className={s.link} to={'/juniorExtra'}>The Strongest</NavLink>
            </div>
        </div>
    )
}

export default Header
