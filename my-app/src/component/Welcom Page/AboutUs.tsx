import React from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';
import { Language, mainState } from 'component/constant';
import me from '../assets/image/LP.png';

export const AboutUs = ({ language }: Language) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      gap={1}
    >
      <Typography fontSize={'3rem'} sx={{ p: 5 }}>
        {language === 'EN' ? mainState[0].team : mainState[1].team}
      </Typography>
      <>
        <Grid container sx={{ border: '1px solid #1976D2', borderRadius: '10px' }}>
          <Grid sx={{ p: 2, width: '15%' }}>
            <CardMedia
              component="img"
              image={me}
              alt="vses"
              sx={{ borderRadius: '10px', p: 1, objectFit: 'contain' }}
            />
          </Grid>
          <Grid item sx={{ p: 2, width: '85%' }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: 'center', fontSize: '2rem' }}
            >
              {' '}
              {language === 'EN' ? mainState[0].titleMe : mainState[1].titleMe}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              {' '}
              {language === 'EN' ? mainState[0].discriptionMe : mainState[1].discriptionMe}
            </Typography>
          </Grid>
        </Grid>
      </>
    </Grid>
  );
};
