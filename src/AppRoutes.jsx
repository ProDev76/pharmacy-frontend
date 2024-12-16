import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );

}

export default AppRoutes
