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
    title: "Start New Fight",
    icon: "plus"
  },
  {
    title: "About",
    icon: "info"
  }
]

/* Component definition */
const NavBar = () =>
  <div className={styles.wrapper}>
    {
      tabs.map((item, index) => 
        <div className={item.isActive && styles.active} key={index}>
          <Icon name={item.icon} />
          {item.title}
        </div>
      )
    }
  </div>;

export default NavBar;