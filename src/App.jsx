import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Album from './pages/Album';
import Notes from './pages/Notes';
import './index.css';
import LoginBottom from './components/LoginBottom';

const App = () => {
  return (
    <BrowserRouter>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path="/album" element={
            <RequireAuth>
              <Album />
            </RequireAuth>
          } />
          <Route path="/notes" element={
            <RequireAuth>
              <Notes />
            </RequireAuth>
          } />
        </Routes>
      </AuthProvider>
      <LoginBottom />
    </BrowserRouter>
  );
};

export default App;
