import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { Link, Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <BackupTableIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Button color="inherit">
            {' '}
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
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
