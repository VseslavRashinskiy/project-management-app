import { Link } from 'react-router-dom';
import React from 'react';
import { CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Language, mainState } from './constant';
import image from './assets/image/404.png';
import imageErr from './assets/image/404-page.png';

const NotFound = ({ language }: Language) => {
  return (
    <div className="not-found">
      {language === 'EN' ? mainState[0].notFound : mainState[1].notFound}
      <Link to="/"> {language === 'EN' ? mainState[0].home : mainState[1].home}</Link>
    </div>
  );
};

export default NotFound;
