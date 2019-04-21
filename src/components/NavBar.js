/**
 * @file Holds the <NavBar> component
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import React from 'react';
import Icon from './Icon';
import styles from '../styles/components/NavBar.module.scss';

/* Constants definition */
const tabs = [
  {
    title: "Overview",
    icon: "home",
    isActive: true
  },
  {
    title: "Favorites",
    icon: "star"
  },
  {
    title: "New Fight",
    icon: "plus"
  },
  {
    title: "About",
    icon: "info"
  }
]

/* Component definition */
const NavBar = () =>
  <footer className={styles.wrapper}>
    {
      tabs.map((item, index) => 
        <div className={item.isActive && styles.active} key={index}>
          <Icon name={item.icon} />
          {item.title}
        </div>
      )
    }
  </footer>;

export default NavBar;