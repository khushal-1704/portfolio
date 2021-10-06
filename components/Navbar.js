import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Navbar = () => {


    return (
        <div className={styles.navBar}>
            <ul className={styles.navContainer} >
                <li className={styles.navElements} ><Link href='/' ><a>Home</a></Link></li>
                <li className={styles.navElements}><Link href='/skills'><a>Skills</a></Link></li>
                <li className={styles.navElements}><Link href='/projects'><a>Projects</a></Link></li>
                <li className={styles.navElements}><Link href='/about'><a>About</a></Link></li>
                <li className={styles.navElements}><Link href='/contactMe'><a>Contact</a></Link></li>
            </ul>
        </div >
    );
}

export default Navbar;