import React from 'react';
import { Avatar, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserProvider';
import { axiosApiInstance, __baseUrl__ } from '../constant';
import avatarOut from '../assets/image/avatar1.png';
import avatarDelete from '../assets/image/avatar2.png';
import avatarEdit from '../assets/image/avatar3.png';
import { Link as RouterLink } from 'react-router-dom';

export const ProfileUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useUser();
  const exitProfile = () => {
    localStorage.removeItem('tokenUser');
    setUser(null);
    navigate('/');
  };
  const deleteProfile = () => {
    if (window.confirm('Are you sure you want to delete')) {
      axiosApiInstance.delete(`${__baseUrl__}users/${user?._id}`);
      localStorage.clear();
      setUser(null);
      navigate('/');
    }
  };

  return (
    <Grid container component={Paper} justifyContent="space-between" alignItems="center">
      <Grid item xs={4} md={4} display="flex" flexDirection="column" alignItems="center">
        <Avatar alt={user?.name} src={avatarOut} sx={{ width: '30%', height: '30%' }} />
        <Button onClick={exitProfile}>sign out</Button>
      </Grid>
      <Grid item xs={4} md={4}>
        <Avatar alt={user?.name} src={avatarEdit} sx={{ width: '30%', height: '30%' }} />
        <Button>
          {' '}
          <RouterLink
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={`edit`}
          >
            Edit profile
          </RouterLink>
        </Button>
      </Grid>
      <Grid item xs={4} md={4}>
        <Avatar alt={user?.name} src={avatarDelete} sx={{ width: '30%', height: '30%' }} />
        <Button onClick={deleteProfile}>Delete profile</Button>
      </Grid>
    </Grid>
  );
};
