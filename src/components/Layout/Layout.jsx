import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import css from './Layout.module.css';

const LayoutLink = styled(NavLink)`
  &.active {
     color: pink;
  }
`;

export const Layout = () => {
  
  return (
    <div>
      <header className={css.header}>
        <nav className={css.nav}>
          <LayoutLink to="/" className={css.link}>
            Home
          </LayoutLink>
          <LayoutLink to="/movies" className={css.link}>
            Movies
          </LayoutLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};