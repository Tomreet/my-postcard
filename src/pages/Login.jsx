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

  // Функция для универсального входа
  const handleUniversalLogin = (e) => {
    e.preventDefault();
    // Устанавливаем тестовые данные и сразу выполняем вход
    const demoUsername = 'Инопланетянин';
    const demoPassword = 'universal_password';
    
    setUsername(demoUsername);
    setPassword(demoPassword);
    
    // Используем напрямую тестовые данные, не дожидаясь обновления состояния
    if (login(demoUsername, demoPassword)) {
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
        <button type="submit">
          Войти
        </button>
        <button type="button" onClick={handleUniversalLogin}>
          Универсальный
        </button>
      </form>
    </div>
  );
};

export default Login;