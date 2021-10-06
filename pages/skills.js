import styles from '../styles/Skills.module.css'

const Skills = () => {
    return (
        <div className={styles.skillPage}>
            <h1>My Skills</h1>
            <div className={styles.skillsContainer}>
                <li className={styles.skillBox}><img src="/images/html.png" alt="" /><span>HTML 5</span></li>
                <li className={styles.skillBox}><img src="/images/css.png" alt="" /><span>CSS 3</span></li>
                <li className={styles.skillBox}><img src="/images/js.png" alt="" /><span>JavaScript</span></li>
                <li className={styles.skillBox}><img src="/images/react.png" alt="" /><span>React JS</span></li>
                <li className={styles.skillBox}><img src="/images/nextjs.png" alt="" /><span>Next JS</span></li>
                <li className={styles.skillBox}><img src="/images/redux.png" alt="" /><span>Redux</span></li>
                <li className={styles.skillBox}><img src="/images/sass.png" alt="" /><span>SASS</span></li>
                <li className={styles.skillBox}><img src="/images/style-comp.png" alt="" /><span>Styled-Components</span></li>
            </div>
        </div>
    );
}

export default Skills;

