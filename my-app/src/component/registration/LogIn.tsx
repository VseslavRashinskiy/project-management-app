import React from 'react';
import { Lock } from '@mui/icons-material';
import { Avatar, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import axios, { AxiosError } from 'axios';
import { Language, __baseUrl__ } from '../constant';
import login from '../assets/image/login.png';
import { useState } from 'react';
import { Error } from './Registration';
import { mainState } from '../constant';

type SignUser = {
  login: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

type ResponseLoginUser = {
  token: string;
};

export const signUser = async (user: SignUser) => {
  const response = await axios.post<ResponseLoginUser>(__baseUrl__ + 'auth/signin', user);
  localStorage.setItem('tokenUser', JSON.stringify(response.data.token));
  return response.data;
};

export const LogIn = ({ language }: Language) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    signUser({
      login: data.get('email'),
      password: data.get('password'),
    })
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<Error>;
          // Error 401
          if (error.response?.data.statusCode === 401) {
            setError(language === 'EN' ? mainState[0].logErr : mainState[1].logErr || null);
          } else {
            // Error 400
            setError(error.response?.data.message || null);
          }
        }
      });
  };

  return (
    <Grid container component="main" sx={{ height: 'calc(100vh - 65px)', maxWidth: '1900px' }}>
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
      <Grid item xs={12} sm={8} md={7}>
        <Box
          sx={{
            position: 'relative',
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
            {language === 'EN' ? mainState[0].logIn : mainState[1].logIn}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <TextField
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label={language === 'EN' ? mainState[0].email : mainState[1].email}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={language === 'EN' ? mainState[0].password : mainState[1].password}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography sx={{ color: 'red', mt: 1 }}>{error}</Typography>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {language === 'EN' ? mainState[0].logIn : mainState[1].logIn}
            </Button>
            <Grid container>
              <Grid item>
                <Link variant="body2" component={RouterLink} to="/register">
                  {language === 'EN' ? mainState[0].logQ : mainState[1].logQ}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
