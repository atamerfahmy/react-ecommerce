import React from 'react'
import Card from '../Card'
import { Grid } from '@mui/material';
import { useAppSelector } from '../../utils/hooks';

type Props = {}

function Home({ }: Props) {

    const products = useAppSelector(state => state.products.value);

    return (
        <div className='p-10'>
            <Grid container spacing={2}>
                {
                    products && products.map((product, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card key={i} product={product} index={i} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home