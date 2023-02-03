import React from 'react';
import SearchBar from './searchBar';
import FilterInOrder from './Orden&Filters/filterInOrder';
import styles from './style.module.css'

function Nav() {
  return (
    <nav className={`${styles.navBar}`}>
      <div className={`${styles.filters}`}>
        <FilterInOrder />
      </div>
      <div className={`${styles.search}`} >
        <SearchBar  />
        </div>
      

    </nav>
  );
};

export default Nav;