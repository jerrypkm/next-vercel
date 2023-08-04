import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css';
import ActiveLink from '../activeLink/ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/',
    id: 0,
  },
  {
    text: 'About',
    href: '/about',
    id: 1,
  },
  {
    text: 'Contact',
    href: '/contact',
    id: 2,
  },
  {
    text: 'Pricing',
    href: '/pricing',
    id: 3,
  },
]

const Navbar = () => {
  return (
    <nav className={styles['navbar-container']}>
        {menuItems.map(el => <ActiveLink key={el.id} href={el.href} label={el.text}/>)}
    </nav>
  )
}

export default Navbar