import { Tooltip } from '@material-ui/core';
import styles from '../styles/Resume.module.css'
import { Download } from '@material-ui/core'

const Resume = () => {
    return (
        <Tooltip title='Download Resume' placement="top-start" arrow>
            <div className={styles.downloadBox} data-aos='zoom-in'>
                <a href="/khushalkrsain_resume.pdf" download>
                    <img className={styles.downloadImg} style={{ color: 'white' }} src="/images/download-white.ico" alt="" />
                </a>
            </div>
        </Tooltip>
    )
}

export default Resume;

