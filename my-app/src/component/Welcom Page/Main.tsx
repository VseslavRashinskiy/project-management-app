import React from 'react';
import { CardMedia } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import mainImg from '../assets/image/main-bg.png';
import { Language, mainState } from '../constant';
import { Registration } from '../registration/Registration';
import { LogIn } from '../registration/LogIn';
import { Typography } from '@mui/material';
import NotFound from 'component/NotFound';
import { ProfileUser } from '../profile/ProfileUser';
import { EditProfile } from 'component/profile/EditProfile';
import { AboutUs } from './AboutUs';

const Placeholder = ({ language }: Language) => (
  <>
    <div className="welcome__main-about">
      <Typography variant="h3" component="h2" className="main-content__title">
        {language === 'EN' ? mainState[0].title : mainState[1].title}
      </Typography>
      <Typography variant="body1" component="h2">
        {language === 'EN' ? mainState[0].discription : mainState[1].discription}
      </Typography>
    </div>
    <CardMedia component="img" image={mainImg} alt="main-img" />
    <AboutUs language={language}></AboutUs>
  </>
);

export const Main = ({ language }: Language) => {
  return (
    <div className="welcome__main">
      <Routes>
        <Route path="/" element={<Placeholder language={language} />} />
        <Route path="login" element={<LogIn language={language} />} />
        <Route path="profile/edit" element={<EditProfile language={language} />} />
        <Route path="register" element={<Registration language={language} />} />
        <Route path="profile" element={<ProfileUser language={language} />} />
        <Route path="*" element={<NotFound language={language} />} />
      </Routes>
    </div>
  );
};
