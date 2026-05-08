import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage  from './pages/auth/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login"   element={<LoginPage />} />
        <Route path="*"        element={<Navigate to="/sign-up" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
