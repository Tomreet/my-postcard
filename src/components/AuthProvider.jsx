import { createContext, useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { users } from '../data/users';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  // Мемоизированные функции
  const login = useCallback((username, password) => {
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
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('dembel-user');
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('dembel-user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Стабильный объект контекста
  const value = useMemo(() => ({
    user,
    login,
    logout,
    error
  }), [user, error, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};