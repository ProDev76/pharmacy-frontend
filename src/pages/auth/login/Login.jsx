import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Alert, Form, Input, Button, Card } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { loginRequest, loginSuccess, loginFailure } from '../../../store/userSlice';

import './login.scss';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  // Cek token saat komponen dimuat
  useEffect(() => {
    const token = localStorage.getItem('authToken');

    // Jika token ada, langsung redirect ke dashboard
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const onFinish = async (values) => {
    dispatch(loginRequest());
    setErrorMessage('');
    try {
      const response = await fetch('http://localhost:4000/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const { token, name } = result.data;

        // Simpan token ke localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('name', name);

        // Simpan user ke Redux
        dispatch(loginSuccess({ name }));

        // Redirect ke dashboard
        navigate('/');
      } else {
        setErrorMessage(result.error);
        dispatch(loginFailure(result.error || 'Unknown error'));
      }

    } catch (error) {
      // Tangani error jaringan atau kesalahan lain
      setErrorMessage('Network error. Please try again later.');
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="login-form">
      <Card className='login-card'>
        <h2>Login</h2>
        {error && <Alert className='mb-6' message={errorMessage} type="error" showIcon />}
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email address!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter your email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters long!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter your password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
