import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './RoutesPages';

import cn from './Header.module.css'

function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className={cn.nav}>
            {isOpen
                ? <>
                    <ul>
                        <li><NavLink to={PATH.PRE_JUNIOR}>Pre-jun</NavLink></li>
                        <li><NavLink to={PATH.JUNIOR}>Jun</NavLink></li>
                        <li><NavLink to={PATH.JUNIOR_PLUS}>Jun-plus</NavLink></li>
                    </ul>
                    <span onClick={() => setIsOpen(false)}>X</span>
                </>
                : <button onClick={() => setIsOpen(true)}>Menu</button>
            }
        </nav>
    )
}

export default Header
