import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import MenuIcon from '@material-ui/core/Menu'
import { useEffect } from 'react'

const Navbar = () => {

    return (

        <div className={styles.nav}>
            <input type="checkbox" id={styles.navCheck} />
            <div className={styles.navHeader}>
                <Link href='/'>
                    <a target='_parent'>
                        <div className={styles.navTitle}>
                            myPortfolio( );
                        </div>
                    </a>
                </Link>
            </div>
            <div className={styles.navBtn}>
                <label htmlFor={styles.navCheck}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className={styles.navLinks}>
                <Link href='/'><a target='_parent'>HOME</a></Link>
                <Link href='/skills'><a target='_parent'>SKILLS</a></Link>
                <Link href='/projects'><a target='_parent'>PROJECTS</a></Link>
                <Link href='/about'><a target='_parent'>ABOUT</a></Link>
                <Link href='/contactMe'><a target='_parent'>CONTACT</a></Link>
            </div>
        </div>
    );


}

export default Navbar;



/*
return (
        <div className={styles.navBar}>
            <div className={styles.navContainer}>
                <div className={styles.menuBar}>
                    <div className={styles.burger}>
                        <img src="/images/menu.png" alt="" />
                    </div>
                </div>
                <ul className={styles.navContainer} >
                    <li className={styles.navElements} ><Link href='/'><a>Home</a></Link></li>
                    <li className={styles.navElements}><Link href='/skills'><a>Skills</a></Link></li>
                    <li className={styles.navElements}><Link href='/projects'><a>Projects</a></Link></li>
                    <li className={styles.navElements}><Link href='/about'><a>About</a></Link></li>
                    <li className={styles.navElements}><Link href='/contactMe'><a>Contact</a></Link></li>
                </ul>
            </div>
    );
*/