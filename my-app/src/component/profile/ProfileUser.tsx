import React from 'react';
import { Avatar, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserProvider';
import { axiosApiInstance, Language, __baseUrl__ } from '../constant';
import avatarOut from '../assets/image/avatar1.png';
import avatarDelete from '../assets/image/avatar2.png';
import avatarEdit from '../assets/image/avatar3.png';
import { Link as RouterLink } from 'react-router-dom';
import { mainState } from '../constant';

export const ProfileUser = ({ language }: Language) => {
  const navigate = useNavigate();
  const [user, setUser] = useUser();
  const exitProfile = () => {
    localStorage.removeItem('tokenUser');
    setUser(null);
    navigate('/');
  };
  const deleteProfile = () => {
    if (
      window.confirm(language === 'EN' ? mainState[0].deleteProfileQ : mainState[1].deleteProfileQ)
    ) {
      axiosApiInstance.delete(`${__baseUrl__}users/${user?._id}`);
      localStorage.clear();
      setUser(null);
      navigate('/');
    }
  };

  return (
    <div className="main__profile">
      <div className="profile__item">
        <Avatar alt={user?.name} src={avatarOut} sx={{ width: '30%', height: '30%' }} />
        <Button onClick={exitProfile}>
          {' '}
          {language === 'EN' ? mainState[0].signOut : mainState[1].signOut}
        </Button>
      </div>
      <div className="profile__item">
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
            {language === 'EN' ? mainState[0].editProfile : mainState[1].editProfile}
          </RouterLink>
        </Button>
      </div>
      <div className="profile__item">
        <Avatar alt={user?.name} src={avatarDelete} sx={{ width: '30%', height: '30%' }} />
        <Button onClick={deleteProfile}>
          {' '}
          {language === 'EN' ? mainState[0].deleteProfile : mainState[1].deleteProfile}
        </Button>
      </div>
    </div>
  );
};
