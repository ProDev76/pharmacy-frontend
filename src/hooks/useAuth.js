import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../store/userSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Logika untuk memuat data user saat aplikasi dimulai
  }, []);

  const login = async (credentials) => {
    dispatch(loginRequest());
    try {
      const response = await api.login(credentials);
      dispatch(loginSuccess(response.data));
      setUser(response.data);
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return { user, login };
};

export default useAuth;
