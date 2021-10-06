import { Button } from '@mui/material';
import styles from '../styles/Card.module.css'
import Link from 'next/link'

const Card = ({ topImg, cardName, cardContent, cardLink }) => {
    return (
        <div data-aos="flip-left" className={styles.cardBox}>
            <div style={{ backgroundImage: `url(/images/${topImg} )` }} alt="skill-img" className={styles.cardImg} />
            <div className={styles.cardCont}>
                <h1>{cardName}</h1>
                <p className={styles.cardInfo}>
                    {cardContent}
                </p>
                <button className={styles.btn}><Link href={cardLink}><a target="_blank">Redirect</a></Link></button>
            </div>
        </div >
    );
}

export default Card;