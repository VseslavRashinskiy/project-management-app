import { Link } from 'react-router-dom';
import React from 'react';
import { CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Language, mainState } from './constant';
import image from './assets/image/404.png';
import imageErr from './assets/image/404-page.png';

const NotFound = ({ language }: Language) => {
  return (
    <Grid container component="main" sx={{ height: 'calc(100vh - 65px)', maxWidth: '1900px' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1976d2',
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        component={Paper}
        elevation={6}
        sx={{
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            404{' '}
          </Typography>
          <Grid item>
            {language === 'EN' ? mainState[0].notFound : mainState[1].notFound}
            <Link to="/"> {language === 'EN' ? mainState[0].home : mainState[1].home}</Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFound;
