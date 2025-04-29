import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import LoginImput from '../UI/LoginImput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Дембельский календарь</h2>
        <LoginImput
            label="Логин:"
            type="text"
            value={username}
            set={setUsername}
        />

        <LoginImput
            label="Пароль:"
            type="password"
            value={password}
            set={setPassword}
        />

        {error && <div className="error-message">{error}</div>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;