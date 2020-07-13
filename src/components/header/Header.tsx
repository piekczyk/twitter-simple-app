import React, {ChangeEvent, MouseEvent, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import {authService} from 'services';

import './style.scss';

type HeaderProps = {
  postId?: string;
  handleFilter: (value: string) => void;
};

export const Header: React.FC<HeaderProps> = ({postId, handleFilter}) => {
  const history = useHistory();

  const handleLogout = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      authService.logout();
      history.push('/login');
    },
    [history],
  );

  const handleGoBack = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      history.push('/');
    },
    [history],
  );

  const handleFilterChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleFilter(e.target.value);
    },
    [handleFilter],
  );

  return (
    <div className="header">
      {postId ? (
        <button onClick={handleGoBack} className="header-back">
          Go back
        </button>
      ) : (
        <>
          <button onClick={handleLogout} className="header-logout">
            Logout
          </button>
          <input
            type="text"
            name="search"
            className="header-input"
            placeholder="search"
            onChange={handleFilterChange}
          />
        </>
      )}
    </div>
  );
};
