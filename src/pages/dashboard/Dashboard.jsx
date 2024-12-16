import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { logout } from '../../store/userSlice';
import AdminLayout from '../../layout';

import './dashboard.scss';


const Dashboard = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  // React.useEffect(() => {
  //   const token = localStorage.getItem('authToken');

  //   // Jika token tidak ada, langsung redirect ke login
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('authToken');

    // Reset state Redux
    dispatch(logout());

    // Redirect ke halaman login
    navigate('/login');
  };

  return (
    <AdminLayout>
      <div className='container-layout'>
        <div>Welcome, {user?.name || 'Guest'}</div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
