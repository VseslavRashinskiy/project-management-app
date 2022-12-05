import { Grid, Link } from '@mui/material';
import React from 'react';
import rsSchool from '../assets/image/rs_school.svg';

const dateTeam = [{ name: 'Vseslav Rashinskiy', url: 'https://github.com/VseslavRashinskiy' }];

export const Footer = () => {
  return (
    <Grid
      container
      alignItems=" center"
      justifyContent="space-between"
      sx={{ p: 2 }}
      position="absolute"
      bottom="0"
    >
      <Grid item>
        <img src={rsSchool} alt="rsSchool" />
      </Grid>
      <Grid display="flex" gap={1} flexWrap={'wrap'}>
        {dateTeam.map((user) => (
          <Grid key={user.name} item>
            <Link href={user.url} underline="hover">
              {user.name}
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid>2022</Grid>
    </Grid>
  );
};
