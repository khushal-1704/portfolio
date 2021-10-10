import styledEngine from '@mui/styled-engine';
import { style } from 'dom-helpers';
import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutHeader}>About Me</h1>
            <div className={styles.aboutInfo}>
                <p>Hi! I'm  Khushal Kumar Sain, Engineering UG Student
                    Since my school days, I loved spending a great amount of time in creating stuff.&nbsp;</p>
                <p>From preparing for inter - school competition to college projects, I enjoyed all of them.
                    During pandemic, I came across
                    <strong style={{ color: 'red' }}> WEB DEVELOPMENT </strong> and understood the wide range of possibilities web development holds.</p>
                <p>For me, a website is all about experience.
                    New technologies excite me and motivates me to explore more.
                    Currently, I'm looking for a full time role in fast scrolling company.</p>
            </div>
        </div>
    );
}

export default About;




