import * as React from 'react';
import {
  AppBar,
  Button,
  Box,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Main } from './Main';
import { Footer } from './Footer';
import { useUser } from '../UserProvider';
import withAuth from '../WithAuth';

type NavMenuItemProps = {
  path: string;
  name: string;
};

const NavMenuItem = ({ path, name }: NavMenuItemProps) => (
  <ListItemButton component={Link} to={path}>
    <ListItemText primary={name} />
  </ListItemButton>
);

const PrivateNavMenuItem = withAuth(NavMenuItem);

export default function Header() {
  const [user] = useUser();

  const data = [{ name: 'Create new board', path: '/statistic', isPrivate: true }];

  const getList = () => (
    <>
      {data.map((item) => (
        <div key={item.name}>
          {item.isPrivate ? <PrivateNavMenuItem path={item.path} name={item.name} /> : <></>}
        </div>
      ))}
    </>
  );

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
            {getList()}
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
