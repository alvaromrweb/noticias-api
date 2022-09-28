import { Card, CardActions, CardMedia, CardContent, Typography, Button, Link, Grid } from '@mui/material';

const Noticia = ({noticia}) => {
  return (
    <Grid item md={6} lg={4}>
        <Card>
            <CardMedia
            component="img"
            height="300"
            image={noticia.urlToImage}
            alt={`Imagen de la noticia: ${noticia.title}`}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {noticia.title}
            </Typography>
            <Typography variant="body1" component="div" color='error'>
            {noticia.source.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {noticia.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Link href={noticia.url} target='_blank' variant='button' width={'100%'} textAlign={'center'} sx={{textDecoration: 'none'}}>
                Ver noticia
            </Link>
        </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia