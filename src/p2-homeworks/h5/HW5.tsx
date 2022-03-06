import React from 'react'
import Header from './Header'
import RoutesPages from './RoutesPages'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>
            <RoutesPages/>

            </HashRouter>
        </>
    )
}

export default HW5
