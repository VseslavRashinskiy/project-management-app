import React from 'react';
import { Box, CardMedia, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import mainImg from '../assets/image/digital-education-main-banner-img.png';
import { Language, mainState } from '../constant';
import { Registration } from '../registration/Registration';
import { LogIn } from '../registration/LogIn';
import { Typography } from '@mui/material';
import NotFound from 'component/NotFound';
import { ProfileUser } from '../profile/ProfileUser';
import { EditProfile } from 'component/profile/EditProfile';

const Placeholder = ({ language }: Language) => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <div className="main-content">
      <Typography variant="h3" component="h2">
        {language === 'EN' ? mainState[0].title : mainState[1].title}
      </Typography>
      <Typography variant="body1" component="h2">
        {language === 'EN' ? mainState[0].discription : mainState[1].discription}
      </Typography>
    </div>
    <CardMedia component="img" image={mainImg} alt="main-img" />
  </Grid>
);

export const Main = ({ language }: Language) => {
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
        <Route path="/" element={<Placeholder language={language} />} />
        <Route path="login" element={<LogIn language={language} />} />
        <Route path="profile/edit" element={<EditProfile language={language} />} />
        <Route path="register" element={<Registration language={language} />} />
        <Route path="profile" element={<ProfileUser language={language} />} />
        <Route path="*" element={<NotFound language={language} />} />
      </Routes>
    </Box>
  );
};
