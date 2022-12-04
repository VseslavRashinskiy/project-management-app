import React from 'react';
import { Box, CardMedia, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import mainImg from '../assets/image/digital-education-main-banner-img.png';
import { mainState } from '../constant';
import { Registration } from '../registration/Registration';
import { LogIn } from '../registration/LogIn';
import { Typography } from '@mui/material';
import NotFound from 'component/NotFound';
import { ProfileUser } from '../profile/ProfileUser';

const Placeholder = () => (
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

export const Main = () => {
  return (
    <Box
      sx={{
        mt: 8,
        display: 'flex',
        width: '100%',
        // height: 'calc(100vh - 64px)',
        justifyContent: 'center',
      }}
    >
      <Routes>
        <Route path="/" element={<Placeholder />} />
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Registration />} />
        <Route path="profile" element={<ProfileUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};
