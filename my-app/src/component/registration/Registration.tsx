import React from 'react';
import { Lock } from '@mui/icons-material';
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { __baseUrl__ } from '../constant';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import login from '../assets/image/login.png';

type CreateUser = {
  name: FormDataEntryValue | null;
  login: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

type ResponseLoginUser = {
  name: string;
  login: string;
  _id: string;
};

type Error = { message: string; statusCode: number };

export const createUser = async (user: CreateUser) => {
  const response = await axios.post<ResponseLoginUser>(__baseUrl__ + 'auth/signup', user);
  localStorage.setItem('idUser', JSON.stringify(response.data._id));
  return response.data;
};

export const Registration = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleReg = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    createUser({
      name: data.get('name'),
      login: data.get('email'),
      password: data.get('password'),
    })
      .then(() => {
        alert('Регистрация прошла успешно');
        navigate('/login');
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<Error>;
          // Error 409
          if (error.response?.data.statusCode === 409) {
            setError(error.response?.data.message || null);
          } else {
            // Error 422
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
            Registration
          </Typography>
          <Box
            component="form"
            onSubmit={handleReg}
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
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              type="email"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              Registration
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" component={RouterLink} to="/login">
                  {'Registered? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
