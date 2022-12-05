import React from 'react';
import { Lock } from '@mui/icons-material';
import { Avatar, Button, CssBaseline, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { axiosApiInstance, userId, __baseUrl__ } from '../constant';
import { useNavigate } from 'react-router-dom';
import login from '../assets/image/login.png';
import { useUser } from '../UserProvider';
import { CreateUser, Error, ResponseLoginUser } from 'component/registration/Registration';

export const updateUser = async (newUser: CreateUser) => {
  if (userId) {
    const response = await axiosApiInstance.put<ResponseLoginUser>(
      `${__baseUrl__}users/` + userId.slice(1, -1),
      newUser
    );
    return response.data;
  }
};

export const EditProfile = () => {
  const [user] = useUser();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    updateUser({
      name: data.get('name'),
      login: data.get('email'),
      password: data.get('password'),
    })
      .then(() => {
        alert('Profile update');
        navigate('/');
        window.location.reload();
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<Error>;
          // Error 409
          if (error.response?.data.statusCode === 409) {
            setError(error.response?.data.message || null);
          } else {
            // Error 400
            setError(error.response?.data.message || null);
          }
        }
      });
  };
  return (
    <Grid container component="main" sx={{ height: 'calc(100vh - 65px)', maxWidth: '1900px' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: `url(${login})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1976d2',
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Lock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleUpdate}
            sx={{
              mt: 2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              type="text"
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              autoComplete="name"
              defaultValue={user?.name}
              autoFocus
            />
            <TextField
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              defaultValue={user?.login}
              autoFocus
            />
            <Typography sx={{ color: 'red', mt: 1 }}>{error}</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Update
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
