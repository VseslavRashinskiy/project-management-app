import { Link } from 'react-router-dom';
import React from 'react';
import { Language, mainState } from './constant';

const NotFound = ({ language }: Language) => {
  return (
    <div>
      {language === 'EN' ? mainState[0].notFound : mainState[1].notFound}
      <Link to="/"> {language === 'EN' ? mainState[0].home : mainState[1].home}</Link>
    </div>
  );
};

export default NotFound;
