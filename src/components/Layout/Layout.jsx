import React from 'react'
import Header from 'components/Header/header'
import { Outlet } from 'react-router-dom'
import css from 'components/Layout/Layout.module.css'

const Layout = () => {
    return (
        <div>

            <header className={css.header}>
                
                  <Header />
            <Outlet />
            </header> 
          
        
        </div>
    )
}
export default Layout