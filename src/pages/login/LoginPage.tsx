import React, {ChangeEvent, FormEvent, useEffect, useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import {authService} from 'services';

import './style.scss';

const LoginPage: React.FC = () => {
  const [values, setValues] = useState({login: '', password: ''});
  const history = useHistory();

  useEffect(() => {
    authService.logout();
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues(prevValues => ({...prevValues, [name]: value}));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      history.push('/');
      authService.login(values);
    },
    [history, values],
  );

  return (
    <form onSubmit={handleSubmit} className="login-page">
      <p>Login form</p>
      <input
        type="text"
        name="login"
        placeholder="login"
        value={values.login}
        onChange={handleChange}
        minLength={5}
        required
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,8}$"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
