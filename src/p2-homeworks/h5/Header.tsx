import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './RoutesPages';

import cn from './Header.module.css'

function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const setActive = ({isActive}:{isActive:boolean}) => isActive ? cn.active : ''

    return (
        <nav className={cn.nav}>
            {isOpen
                ? <>
                    <ul>
                        <li><NavLink className={setActive} to={PATH.PRE_JUNIOR}>Pre-jun</NavLink></li>
                        <li><NavLink className={setActive} to={PATH.JUNIOR}>Jun</NavLink></li>
                        <li><NavLink className={setActive} to={PATH.JUNIOR_PLUS}>Jun-plus</NavLink></li>
                    </ul>
                    <span className={cn.closeMenu} onClick={() => setIsOpen(false)}>X</span>
                </>
                : <button onClick={() => setIsOpen(true)}><span className={cn.btnMenu}>Menu</span></button>
            }
        </nav>
    )
}

export default Header
