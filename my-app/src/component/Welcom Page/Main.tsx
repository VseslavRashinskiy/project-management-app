import React from 'react';
import { Grid, CardMedia } from '@mui/material';
import mainImg from '../assets/image/digital-education-main-banner-img.png';
import { mainState } from '../constant';
import Typography from '@mui/material/Typography';

export const Main = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {mainState.map((item, index) => (
        <div key={index} className="main-content">
          <Typography variant="h3" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body1" component="h2">
            {item.discription}
          </Typography>
        </div>
      ))}
      <CardMedia component="img" image={mainImg} alt="main-img" />
    </Grid>
  );
};
