import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from '@mui/material';
const MyCard = ({ item }) => {
    return (
        <Card sx={{ minWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={item.image.url}
                    alt={item.source.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.source.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.source.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button LinkComponent={Link} variant="contained">
                    <Link size="small" color="inherit" underline="none" href={item.source.page}>
                        Learn More
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default MyCard
