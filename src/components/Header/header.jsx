// import StyledLink from './'
import { NavLink } from 'react-router-dom';
import style from './header.module.css'

const Header = () => {

  return (
      <div className={style.headerContainer}>
         <NavLink className='nav-link' active to="/">Home</NavLink>
         <NavLink className='nav-link' active to="/movies">Movies</NavLink>
    </div>
  )
}

export default Header;