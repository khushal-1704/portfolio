// import { Button } from '@mui/material';
// import styles from '../styles/Card.module.css'
// import Link from 'next/link'

// const Card = ({ topImg, cardName, cardContent, cardLink }) => {
//     return (
//         <div data-aos="flip-left" className={styles.cardBox}>
//             <div style={{ backgroundImage: `url(/images/${topImg} )` }} alt="skill-img" className={styles.cardImg} />
//             <div className={styles.cardCont}>
//                 <h1>{cardName}</h1>
//                 <p className={styles.cardInfo}>
//                     {cardContent}
//                 </p>
//                 <button className={styles.btn}><Link href={cardLink}><a target="_blank">Redirect</a></Link></button>
//             </div>
//         </div >
//     );
// }

// export default Card;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({ topImg, cardName, cardContent, cardLink }) {
    return (
        <Card sx={{ maxWidth: 340, marginRight: 5, marginBottom: 7, position: 'relative' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`/images/${topImg}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ borderBottom: '1px solid lightgray', fontWeight: '700' }}>
                        {cardName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px' }}>
                        {cardContent}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" sx={{ position: 'absolute', bottom: '2%' }}>
                    <a href={cardLink} target='_blank' style={{ textDecoration: 'none', fontWeight: '700' }}>Redirect</a>
                </Button>
            </CardActions>
        </Card>
    );
}