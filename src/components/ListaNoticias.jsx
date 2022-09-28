import useNoticias from "../hooks/useNoticias"
import { Grid, Typography } from '@mui/material';
import Noticia from "./Noticia";

const ListaNoticias = () => {
    const {noticias} = useNoticias() || {}
    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component="h1">Últimas noticias</Typography>
            <Grid container direction='row' spacing={2}>
                {noticias.length == 0 ? 'No se han encontrado noticias' :
                noticias.map(noticia => (
                    
                    <Noticia key={noticia.url} noticia={noticia} />

                ))}

            </Grid>
        </>
    )
}

export default ListaNoticias