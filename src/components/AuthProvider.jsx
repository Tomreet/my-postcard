import { createContext, useState, useContext, useEffect } from 'react';
import { users } from '../data/users';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('dembel-user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (username, password) => {
    const foundUser = users.find(u => 
      u.username === username && u.password === password
    );
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('dembel-user', JSON.stringify(foundUser));
      setError('');
      return true;
    }
    
    setError('Неверные данные для входа');
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('dembel-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);