import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './style.scss';

export const NotFoundPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 2000);
  });

  return <div className="page-not-found">Page not found, redirecting soon</div>;
};
