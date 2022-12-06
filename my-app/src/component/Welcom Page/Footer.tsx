import { Link } from '@mui/material';
import React from 'react';
import rsSchool from '../assets/image/rs_school.svg';

const dateTeam = { name: 'Vseslav Rashinskiy', url: 'https://github.com/VseslavRashinskiy' };

export const Footer = () => {
  return (
    <div className="footer">
      <img src={rsSchool} alt="rsSchool" />
      <div className="footer__git">
        <div className="git__img"></div>
        <Link href={dateTeam.url}>{dateTeam.name}</Link>
      </div>
      <p>2022</p>
    </div>
  );
};
