import { Pagination, Stack, Grid } from '@mui/material';
import useNoticias from '../hooks/useNoticias';

const Paginacion = () => {
    const {totalNoticias, pagina, handlePagChange} = useNoticias()
    const count = Math.ceil(totalNoticias / 20)
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item md={6}>
            <Stack spacing={2} direction={'row'} justifyContent='center' alignItems='center' sx={{marginY: 5}}>
            <Pagination count={count} color="primary" page={pagina} onChange={handlePagChange} />
            </Stack>

        </Grid>

    </Grid>
  )
}

export default Paginacion