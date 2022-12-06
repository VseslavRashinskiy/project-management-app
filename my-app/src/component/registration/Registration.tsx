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
import { Language, __baseUrl__ } from '../constant';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import login from '../assets/image/login.png';
import { mainState } from '../constant';

export type CreateUser = {
  name: FormDataEntryValue | null;
  login: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

export type ResponseLoginUser = {
  name: string;
  login: string;
  _id: string;
};

export type Error = { message: string; statusCode: number };

export const createUser = async (user: CreateUser) => {
  const response = await axios.post<ResponseLoginUser>(__baseUrl__ + 'auth/signup', user);
  localStorage.setItem('idUser', JSON.stringify(response.data._id));
  return response.data;
};

export const Registration = ({ language }: Language) => {
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
        {
          language === 'EN' ? alert(mainState[0].regOk) : alert(mainState[1].regOk);
        }
        navigate('/login');
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const error = e as AxiosError<Error>;
          // Error 409
          if (error.response?.data.statusCode === 409) {
            setError(language === 'EN' ? mainState[0].regErr : mainState[1].regErr || null);
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
            {language === 'EN' ? mainState[0].reg : mainState[1].reg}
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
              label={language === 'EN' ? mainState[0].name : mainState[1].name}
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
              label={language === 'EN' ? mainState[0].email : mainState[1].email}
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
              label={language === 'EN' ? mainState[0].password : mainState[1].password}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {language === 'EN' ? mainState[0].reg : mainState[1].reg}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" component={RouterLink} to="/login">
                  {language === 'EN' ? mainState[0].regQ : mainState[1].regQ}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
