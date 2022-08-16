import React from 'react';
import { Grid } from '@mui/material';
import MyCard from './MyCard';


const Cards = ({ data }) => {
    return (
        <Grid container spacing={2} className='p-3 mt-20' display='flex' alignItems='center' justifyContent='center'>
            {data.map((item, index) => {
                return (
                    <Grid item xl={3} key={index} >
                        <MyCard item={item} />
                    </Grid>
                )
            })}

        </Grid>
    )
}

export default Cards
