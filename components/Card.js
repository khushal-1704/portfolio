import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link'

export default function MultiActionAreaCard({ topImg, cardName, cardContent, cardLink }) {
    return (
        <>
            <Link href={cardLink} target='_blank'>
                <a target='_blank' style={{ textDecoration: 'none' }}>
                    <Card sx={{ maxWidth: 340, marginRight: 5, marginBottom: 7, position: 'relative', height: '350px' }}>
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
                                <Link href={cardLink}><a target='_blank' style={{ textDecoration: 'none', fontWeight: '700' }}>Redirect</a></Link>
                            </Button>
                        </CardActions>
                    </Card>
                </a>
            </Link>
        </>
    );
}