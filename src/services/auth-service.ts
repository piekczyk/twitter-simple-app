const login = ({login, password}: Record<string, string>) => {
  const token = login + password;
  sessionStorage.setItem('token', token);
};

const logout = () => sessionStorage.clear();

const getToken = () => {
  return sessionStorage.getItem('token');
};

export const authService = {
  login,
  logout,
  getToken,
};
