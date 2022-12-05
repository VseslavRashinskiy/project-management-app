import * as React from 'react';
import { useState } from 'react';
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
import { mainState } from '../constant';
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
  const [language, setLanguage] = useState(localStorage.getItem('language') as string);

  const data = {
    nameEN: 'Create new board',
    nameRU: 'Создать новую доску',
    path: '/statistic',
    isPrivate: true,
  };

  const getList = () => (
    <div>
      {data.isPrivate ? (
        <PrivateNavMenuItem path={data.path} name={language === 'EN' ? data.nameEN : data.nameRU} />
      ) : (
        <></>
      )}
    </div>
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
            <Button
              color="inherit"
              onClick={() => {
                if (localStorage.getItem('language') === 'EN') {
                  localStorage.setItem('language', 'RU');
                  setLanguage(localStorage.getItem('language') as string);
                } else {
                  localStorage.setItem('language', 'EN');
                  setLanguage(localStorage.getItem('language') as string);
                }
              }}
            >
              {localStorage.getItem('language') ? language : 'RU'}
            </Button>
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
                    {language === 'EN' ? mainState[0].logIn : mainState[1].logIn}
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
                    {language === 'EN' ? mainState[0].reg : mainState[1].reg}
                  </RouterLink>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Main language={language} />
      <Footer />
    </div>
  );
}
