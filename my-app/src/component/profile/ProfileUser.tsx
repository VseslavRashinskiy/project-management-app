import React from 'react';
import { Avatar, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserProvider';
import avatar from '../assets/image/avatar1.png';

export const ProfileUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useUser();
  const exitProfile = () => {
    localStorage.removeItem('tokenUser');
    setUser(null);
    navigate('/');
  };
  return (
    <Grid container component={Paper} justifyContent="space-between" alignItems="center">
      <Grid item xs={4} md={4} display="flex" flexDirection="column" alignItems="center">
        <Avatar alt={user?.name} src={avatar} sx={{ width: '30%', height: '30%' }} />
        <Button onClick={exitProfile}>sign out</Button>
      </Grid>
      <Grid item xs={8} md={8}></Grid>
    </Grid>
  );
};
