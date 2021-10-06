import styles from '../styles/Resume.module.css'

const Resume = () => {
    return (
        <div className={styles.downloadBox} data-aos='zoom-in' >
            <a href="/khushalkrsain_resume.pdf" download>Download My Resume</a>
        </div>
    );
}

export default Resume;