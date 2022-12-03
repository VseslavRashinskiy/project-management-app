import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { Main } from './Main';
import { Footer } from './Footer';
import { useUser } from '../UserProvider';

export default function Header() {
  const [user] = useUser();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <RouterLink
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={`/`}
              >
                <BackupTableIcon />
                App
              </RouterLink>
            </Typography>
            {user ? (
              <Button
                sx={{
                  fontSize: {
                    lg: '1rem',
                    md: '1rem',
                    sm: '1rem',
                    xs: 10,
                  },
                }}
                color="inherit"
                component={RouterLink}
                to="/profile"
              >
                {user.name}
              </Button>
            ) : (
              <>
                <Button color="inherit">
                  <RouterLink
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                    to={`login`}
                  >
                    Log In
                  </RouterLink>
                </Button>
                <Button color="inherit">
                  <RouterLink
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                    to={`register`}
                  >
                    Sign Up
                  </RouterLink>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Main />
      <Footer />
    </div>
  );
}
