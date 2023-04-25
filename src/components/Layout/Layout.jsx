import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import css from 'components/Layout/Layout.module.css'

const Layout = () => {
    return (
        <div>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink className={css.link} to='/'>
                        Home
                    </NavLink>
                    <NavLink className={css.link} to='/movies'>
                        Movies
                    </NavLink>
                </nav>
            </header> 
          
        
        </div>
    )
}
export default Layout